import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";
import { Label } from "~~/components/ui/label";
import { Slider } from "~~/components/ui/slider";

const SenderForm1 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Send a package using The Box.</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Welcome to The Box! Fill out the form to set up your package delivery.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="stake-amount text-1xl font-bold text-primary">👩🏽 RECIEVER DETAILS</div>
            <div className="grid gap-1.5">
              <Label htmlFor="recipient-ens">What's your recipient's ENS Handle?</Label>
              <p className="text-sm text-muted-foreground">
                This info will be used to verify the identity of your Reciever during delivery.
              </p>
              <Input id="recipient-ens" type="text" placeholder="vitalik.eth" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="delivery-address">What is your recipient's delivery address?</Label>
              <p className="text-sm text-muted-foreground">
                This is the address that the Deliverer will deliver your package to.
              </p>
              <Input id="delivery-address" type="text" placeholder="Auditorium, The Egg, Brussel, Belgium" />
            </div>
            <div className="stake-amount text-1xl font-bold text-primary">📦 PACKAGE DETAILS</div>
            <div className="grid gap-1.5">
              <Label htmlFor="stake-amount">How much do you think your package is worth?</Label>
              <p className="text-sm text-muted-foreground">
                Based on this amount, we'll require your Deliverer to commit your item's value +40% in order to qualify
                to make the delivery. This prevents theft of your item!
              </p>
              <Slider defaultValue={[33]} max={100} step={1} />
              <div className="flex justify-between">
                <span>5 USDC</span>
                <span>100 USDC</span>
              </div>
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="delivery-time">When do you want your package delivered by?</Label>
              <p className="text-sm text-muted-foreground">
                This is the number of days which your Deliverer has to make your delivery, before it's able to be marked
                missing.
              </p>
              <Input id="delivery-time" type="text" placeholder="4" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SenderForm1;
