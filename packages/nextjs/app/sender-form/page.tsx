
// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import SenderForm1 from "~~/components/SenderForm1";
import SenderForm2 from "~~/components/SenderForm2";
import SenderForm4 from "~~/components/SenderForm4";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const SenderForm = () => {
  const [currentStep, setCurrentStep] = useState(1); 
  const [formData, setFormData] = useState({});

  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("BoxManager");
  const { writeContractAsync: writeShitcoin } = useScaffoldWriteContract("BoxToken");

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  useEffect( () => {
    try {
      if (currentStep == 1) {
        writeYourContractAsync({
          functionName: "approve",
          args: ["0x22F3bB82c0DE0533Ca1aaB7BE88fFe081b3CF829", 999900000000000026214],
        });
      }
      
      if (currentStep != 3) return

      // console.log([0, formData.delivery, formData.recipient, formData.worth , formData.amount])

      writeYourContractAsync({
        functionName: "sendPackage",
        args: [0, formData.delivery[0], formData.ens[0], formData.worth[0] , formData.amount[0]],
        // value: parseEther("0.1"),
      });
        
    } catch (e) {
        console.error(e);
    }
}, [currentStep]);

  const renderForm = (step) => {
    switch (step) {
      case 1:
        return <SenderForm1 formData={formData} onUpdate={updateFormData} onNext={setCurrentStep} />; 
      case 2:
        return <SenderForm2 formData={formData} onUpdate={updateFormData} onNext={setCurrentStep} />;  
      case 3:
      //   return <SenderForm3 formData={formData} onUpdate={updateFormData} onNext={setCurrentStep} />;
      // case 4:
        return <SenderForm4 formData={formData} onUpdate={updateFormData} onNext={setCurrentStep} />;
      default:
        return null;
    }
  };

  return (
<div className="container py-10 flex justify-start flex-col items-center mt-16">
    {/* {JSON.stringify(formData)} */}
    <div className="">
      {renderForm(currentStep)}
      </div>
  </div>
  );
};

export default SenderForm;
