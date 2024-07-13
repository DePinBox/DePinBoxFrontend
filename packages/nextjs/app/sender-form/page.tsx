import React from "react";
import SenderForm1 from "~~/components/SenderForm1";
import SenderForm2 from "~~/components/SenderForm2";
import SenderForm3 from "~~/components/SenderForm3";
import SenderForm4 from "~~/components/SenderForm4";

const SenderForm = () => {
  return (
    <div className="container py-10 flex justify-center flex-col items-center min-h-screen">
      <div className="flex">
        <SenderForm1 />
      </div>
      <div className="flex">
        <SenderForm2 />
      </div>
      <div className="flex">
        <SenderForm3 />
      </div>
      <div className="flex">
        <SenderForm4 />
      </div>
    </div>
  );
};

export default SenderForm;
