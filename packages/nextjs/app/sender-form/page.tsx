import React from "react";
import SenderForm1 from "~~/components/SenderForm1";
import SenderForm2 from "~~/components/SenderForm2";

const SenderForm = () => {
  return (
    <div className="container flex justify-center flex-col items-center min-h-screen">
      <div className="flex">
        <SenderForm1 />
      </div>
      <div className="flex">
        <SenderForm2 />
      </div>
    </div>
  );
};

export default SenderForm;
