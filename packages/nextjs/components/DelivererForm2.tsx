import { Button } from "~~/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "~~/components/ui/card";

const DelivererForm2 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Stake to start your delivery!</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Stake the required amount of tokens to start your delivery.
          </CardDescription>
          <p>Amount to stake: 5 BOX</p>
          <Button>Stake</Button>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DelivererForm2;
