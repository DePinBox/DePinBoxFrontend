// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { ByteHasher } from './helpers/ByteHasher.sol';
import { IWorldID } from './interfaces/IWorldID.sol';

contract BoxManager is Ownable {

  uint256 public DELIVERY_REPORT_DEADLINE = 60 * 60 * 24 * 4;
  uint256 public nextBoxId;
  IERC20 public token;
  
	using ByteHasher for bytes;

	/// @notice Thrown when attempting to reuse a nullifier
	error DuplicateNullifier(uint256 nullifierHash);

	/// @dev The World ID instance that will be used for verifying proofs
	IWorldID internal immutable worldId;

	/// @dev The contract's external nullifier hash
	uint256 internal immutable externalNullifier;

	/// @dev The World ID group ID (always 1)
	uint256 internal immutable groupId = 1;

	/// @dev Whether a nullifier hash has been used already. Used to guarantee an action is only performed once by a single person
	mapping(uint256 => bool) internal nullifierHashes;

	/// @param nullifierHash The nullifier hash for the verified proof
	/// @dev A placeholder event that is emitted when a user successfully verifies with World ID
	event Verified(uint256 nullifierHash);

  mapping(uint256 => Box) public boxes;
  mapping(uint256 => BoxConfiguration) public boxConfig;
  mapping(uint256 => mapping(address => uint256)) public courierStakes;
  mapping(address => uint256) public courierRewards;
  mapping(address => bool) public courierBlacklist;
  mapping(address => bool) public courierWhitelist;

  enum BoxStatus {
		EMPTY,
		FULL,
		DELIVERY,
    DELIVERED
	}
    
    struct BoxConfiguration {
        uint256 stakeMin;
        uint256 stakeMax;
        uint256 bountyMin;
        uint256 bountyMax;
    }

  struct Box {
    address operator;
    address sender;
    address receiver;
    address courier;
    uint256 bounty; 
    uint256 stake; 
    uint256 pickupTime;
    string location;
    BoxStatus status;
  }

  constructor(IERC20 _token, IWorldID _worldId, string memory _appId, string memory _actionId) Ownable() {
    token = _token;
    worldId = _worldId;
		externalNullifier = abi.encodePacked(abi.encodePacked(_appId).hashToField(), _actionId).hashToField();
  }

  function courierSignUp(address signal, uint256 root, uint256 nullifierHash, uint256[8] calldata proof) public {
    if (nullifierHashes[nullifierHash]) revert DuplicateNullifier(nullifierHash);

		// We now verify the provided proof is valid and the user is verified by World ID
		worldId.verifyProof(
			root,
			groupId,
			abi.encodePacked(signal).hashToField(),
			nullifierHash,
			externalNullifier,
			proof
		);

		// We now record the user has done this, so they can't do it again (proof of uniqueness)
		nullifierHashes[nullifierHash] = true;

		courierWhitelist[boxes[boxId].courier] = true;

		emit Verified(nullifierHash);
  }

  function registerBox(uint256 stakeMin, uint256 stakeMax, uint256 bountyMin, uint256 bountyMax) public {
    require(stakeMin < stakeMax && bountyMin <= bountyMax, "Invalid stake or bounty amount");
    boxes[nextBoxId] = Box(msg.sender, address(0x0), address(0x0), address(0x0), 0, 0, 0, "", BoxStatus.EMPTY);
    boxConfig[nextBoxId] = BoxConfiguration(stakeMin, stakeMax, bountyMin, bountyMax);
    nextBoxId++;
  }

  function sendPackage(uint256 boxId, string memory location, address receiver, uint256 requiredStake, uint256 bountyAmount) public payable {
    require(isBoxRegistered(boxId), "Box not registered");
    require(requiredStake >= boxConfig[boxId].stakeMin && requiredStake <= boxConfig[boxId].stakeMax, "Stake amount outside allowed range");
    require(bountyAmount >= boxConfig[boxId].bountyMin && bountyAmount <= boxConfig[boxId].bountyMax, "Bounty amount outside allowed range");
    // courierStakes[boxId][msg.sender] = requiredStake; 
    boxes[boxId].sender = msg.sender; 
    boxes[boxId].receiver = receiver; 
    boxes[boxId].bounty = bountyAmount; 
    boxes[boxId].stake = requiredStake; 
    boxes[boxId].location = location; 
    boxes[boxId].status = BoxStatus.FULL;

    token.transferFrom(msg.sender, address(this), bountyAmount);

  }

  function stake(uint256 boxId) public payable {
    require(isBoxRegistered(boxId), "Box not registered");
    // change bs to static state value
    require(msg.value >= boxConfig[boxId].stakeMin && msg.value <= boxConfig[boxId].stakeMax, "Stake amount outside allowed range");
    // courierStakes[boxId][msg.sender] = msg.value; 
    require(courierWhitelist[msg.sender] == true, "You need to whtelsit with worldcoin first");
    require(courierBlacklist[msg.sender] == false, "You are blacklisted from deliveries");
    // @ToDo do the worldcoin check
    boxes[boxId].courier = msg.sender; 
    boxes[boxId].pickupTime = block.timestamp;
    boxes[boxId].status = BoxStatus.DELIVERY;

    token.transferFrom(msg.sender, address(this), boxes[boxId].stake);
  }

  function confirmDelivery(uint256 boxId) public {
    require(isBoxRegistered(boxId), "Box not registered");
    require(msg.sender == boxes[boxId].receiver, "Only receiver can confirm delivery");
    require(boxes[boxId].status == BoxStatus.DELIVERY, "Incorrect box status");

    courierStakes[boxId][msg.sender] += boxes[boxId].stake;
    courierRewards[boxes[boxId].courier] += boxes[boxId].bounty; 
    boxes[boxId].status = BoxStatus.EMPTY;
    
    // @ToDo nullify the box state 
  }

  function reportDelivery(uint256 boxId) public {
    require(isBoxRegistered(boxId), "Box not registered");
    require(boxes[boxId].status == BoxStatus.DELIVERY, "Incorrect box status");
    require(boxes[boxId].pickupTime >= DELIVERY_REPORT_DEADLINE, "Can't report delivery before 4 days have passed");
    require(msg.sender == boxes[boxId].receiver, "Only receiver can report delivery");
    
    token.transfer(boxes[boxId].sender, boxes[boxId].stake + boxes[boxId].bounty);
    boxes[boxId].status = BoxStatus.EMPTY;
    courierBlacklist[boxes[boxId].courier] = true;

  }

  function unstake(uint256 boxId) public {
    require(isBoxRegistered(boxId), "Box not registered");
    require(courierStakes[boxId][msg.sender] > 0, "No stake found for courier");
    // require(boxes[boxId].status == BoxStatus.DELIVERY, "Incorrect box status");
    token.transfer(msg.sender, courierStakes[boxId][msg.sender]);
    courierStakes[boxId][msg.sender] = 0;
  }

  function withdrawRewards() public {
    require(courierRewards[msg.sender] > 0, "No rewards found for courier");
    token.transfer(msg.sender, courierRewards[msg.sender]);
    courierRewards[msg.sender] = 0;
  }

  function isBoxRegistered(uint256 boxId) public view returns (bool) {
    return boxes[boxId].operator != address(0);
  }
}
