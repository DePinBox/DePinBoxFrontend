import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";
import { Label } from "~~/components/ui/label";
import { Slider } from "~~/components/ui/slider";

const PackageInfo = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="w-full max-w-md mx-auto p-4 md:p-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Package Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Receiver</div>
                <div>ENS</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Delivery Location</div>
                <div>123 Main St, Anytown USA</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Deadline</div>
                <div>June 30, 2023</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Status</div>
                <div className="text-green-500 font-medium">Delivered</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Payment details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Amount staked</div>
                <div>0.5 ETH</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Bounty value</div>
                <div>0.1 ETH</div>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-2">
            <Button size="lg">I received the package</Button>
            <Button variant="outline" size="lg">
              Report package lost
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageInfo;
