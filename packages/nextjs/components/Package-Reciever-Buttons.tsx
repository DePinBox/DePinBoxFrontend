import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";
import { Label } from "~~/components/ui/label";
import { Slider } from "~~/components/ui/slider";

const PackageRecieverButtons = () => {
  return (
    <div className="grid gap-2">
      <Button size="lg">I received the package</Button>
      <Button variant="outline" size="lg">
        Report package lost
      </Button>
    </div>
  );
};

export default PackageRecieverButtons;
