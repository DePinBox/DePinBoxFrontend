// @ts-nocheck
"use client";

import type { NextPage } from "next";
import Link from "next/link";
import { Badge } from "~~/components/ui/badge";
import { Button } from "~~/components/ui/button";
import { Card, CardContent } from "~~/components/ui/card";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();

  const { data: isRegistered } = useScaffoldReadContract({
    contractName: "BoxManager",
    functionName: "isBoxRegistered",
    args: [BigInt(0)],
  });

  const { data: boxInfo } = useScaffoldReadContract({
    contractName: "BoxManager",
    functionName: "boxes",
    args: [BigInt(0)],
  });

  const BoxStatus = {
    0: 'EMPTY',
    1: 'FULL',
    2: 'DELIVERY',
    3: 'DELIVERED',
  }

  // const badgeText = BoxStatus[parseInt(boxInfo?[8])]?.toString() || 'Unknown';
  // const badgeText = parseInt(boxInfo[8]);

  return (
    <>
      <div className="flex py-10 flex-col px-5">
        <div className="flex items-center flex-col flex-grow pt-10">
          <div className="px-5">
            <h1 className="text-center">
              <span className="block text-4xl mb-2 font-bold">the-box.eth</span>
              {isRegistered && boxInfo ? (
                <div>
                  <Badge>{BoxStatus[parseInt(boxInfo[8])]?.toString() || 'Unknown'}</Badge>
                </div>
              ) : ""}
            </h1>
            <p className="text-center text-lg">The peer-to-peer delivery service. </p>
          </div>
        </div>

        <div className="grid gap-4">
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 py-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
              <div className="text-2xl font-bold">Send a Package</div>
              <p className="text-muted-foreground text-center">Create a new shipment and get it on its way.</p>
              <Link href="/sender-form">
                <Button className="text-white">Send a Package</Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 py-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <div className="text-2xl font-bold">Deliver a Package</div>
              <p className="text-muted-foreground text-center">
                Mark a package as delivered and complete the shipment.
              </p>
              <Link href="/deliver-package-info">
                <Button className="text-white">View Available Package</Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 py-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <div className="text-2xl font-bold">Manage Deliveries</div>
              <p className="text-muted-foreground text-center">Track a package or delivery.</p>
              <Link href="/my-packages">
                <Button className="text-white">My Packages</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
