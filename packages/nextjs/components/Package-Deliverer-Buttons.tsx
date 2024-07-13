import Link from "next/link";
import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";
import { Label } from "~~/components/ui/label";
import { Slider } from "~~/components/ui/slider";

const PackageDelivererButtons = () => {
  return (
    <div className="grid gap-2">
      <Button size="lg">Deliver This Item</Button>
    </div>
  );
};

export default PackageDelivererButtons;
