import { Button } from "~~/components/ui/button";

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
