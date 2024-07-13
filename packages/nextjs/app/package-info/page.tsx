import React from "react";
import PackageInfo from "~~/components/PackageInfo";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card";

const PackageInfoPage = () => {
  return (
    <div className="container py-10 flex justify-center flex-col items-center min-h-screen">
      <PackageInfo />
    </div>
  );
};

export default PackageInfoPage;
