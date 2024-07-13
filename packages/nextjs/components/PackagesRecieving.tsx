import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";
import { Label } from "~~/components/ui/label";
import { Slider } from "~~/components/ui/slider";

const PackagesRecieving = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="mb-5">
        <div className="stake-amount text-1xl font-bold text-primary">❤️ PACKAGES SENT TO YOU</div>
      </div>
      <div className="grid gap-2 md:gap-3 lg:gap-4">
        <div className="grid grid-cols-[auto_auto_auto_auto] items-center gap-2 md:gap-3 lg:gap-4 rounded-lg bg-muted p-4 text-sm font-medium md:p-6 lg:text-base">
          <div className="font-semibold">Expected Delivery Day</div>
          <div className="font-semibold">Status</div>
          <div className="font-semibold">Info</div>
        </div>
        <div className="grid grid-cols-[auto_auto_auto_auto] items-center gap-2 md:gap-3 lg:gap-4 rounded-lg bg-background p-4 text-sm md:p-6 lg:text-base border-b border-muted">
          <div>10/12/2024</div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
              <div className="h-2 w-2 rounded-full bg-white" />
              Complete
            </div>
          </div>
          <Button variant="outline" size="sm">
            View
          </Button>
        </div>
        <div className="grid grid-cols-[auto_auto_auto_auto] items-center gap-2 md:gap-3 lg:gap-4 rounded-lg bg-background p-4 text-sm md:p-6 lg:text-base border-b border-muted">
          <div>10/12/2024</div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-3 py-1 text-xs font-medium text-white">
              <div className="h-2 w-2 rounded-full bg-white" />
              Delivering
            </div>
          </div>
          <Button variant="outline" size="sm">
            View
          </Button>
        </div>
        <div className="grid grid-cols-[auto_auto_auto_auto] items-center gap-2 md:gap-3 lg:gap-4 rounded-lg bg-background p-4 text-sm md:p-6 lg:text-base border-b border-muted">
          <div>10/12/2024</div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-400 px-3 py-1 text-xs font-medium text-white">
              <div className="h-2 w-2 rounded-full bg-white" />
              Waiting
            </div>
          </div>
          <Button variant="outline" size="sm">
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PackagesRecieving;