import React from "react";
import PackagesDelivering from "~~/components/PackagesDelivering";
import PackagesRecieving from "~~/components/PackagesRecieving";
import PackagesSending from "~~/components/PackagesSending";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card";

const SenderForm = () => {
  return (
    <div className="container py-10 flex justify-center flex-col items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Manage your packages.</CardTitle>
          <p className="text-muted-foreground"> Do you have deliveries in progress? Track their statuses here.</p>
        </CardHeader>
        <div className="flex flex-col gap-10 mb-10">
          <PackagesSending />
          <PackagesRecieving />
          <PackagesDelivering />
        </div>
      </Card>
    </div>
  );
};

export default SenderForm;
