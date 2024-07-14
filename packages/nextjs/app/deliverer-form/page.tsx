import DelivererForm1 from "~~/components/DelivererForm1";
import DelivererForm2 from "~~/components/DelivererForm2";

const PackageInfoPage = () => {
  return (
    <div className="container py-3 flex justify-center flex-col items-center min-h-screen">
      <div className="container py-3 flex justify-center flex-col items-center min-h-screen">
        <div className="flex">
          <DelivererForm1 />
        </div>
      </div>
      <div className="container py-3 flex justify-center flex-col items-center min-h-screen">
        <div className="flex">
          <DelivererForm2 />
        </div>
      </div>
    </div>
  );
};

export default PackageInfoPage;
