import { Button } from "~~/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "~~/components/ui/card";

const DelivererForm1 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Join The Box`&apos;s delivery network!</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Earn bounties for delivering packages in your neighborhood.
          </CardDescription>
          <Button>Log In with Worldcoin</Button>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DelivererForm1;
