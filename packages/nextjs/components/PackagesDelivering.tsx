import Link from "next/link";
import { Button } from "~~/components/ui/button";

const PackagesDelivering = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="mb-5">
        <div className="stake-amount text-1xl font-bold text-primary">🏃🏻 PACKAGES YOU ARE DELIVERING</div>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-2 md:gap-3 lg:gap-4">
          <div className="grid grid-cols-[auto_auto_auto] items-center gap-2 md:gap-3 lg:gap-4 rounded-lg bg-muted p-4 text-sm font-medium md:p-6 lg:text-base">
            <div className="font-semibold">ENS Name</div>
            <div className="font-semibold">Status</div>
            <div className="font-semibold">Info</div>
          </div>
          <div className="grid grid-cols-[auto_auto_auto] items-center gap-2 md:gap-3 lg:gap-4 rounded-lg bg-background p-4 text-sm md:p-6 lg:text-base border-b border-muted">
            <div>abc.eth</div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
                <div className="h-2 w-2 rounded-full bg-white" />
                Complete
              </div>
            </div>

            <Link href="/package-info">
              <Button className="text-white">View</Button>
            </Link>
          </div>
          <div className="grid grid-cols-[auto_auto_auto] items-center gap-2 md:gap-3 lg:gap-4 rounded-lg bg-background p-4 text-sm md:p-6 lg:text-base border-b border-muted">
            <div>xyz.eth</div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-3 py-1 text-xs font-medium text-white">
                <div className="h-2 w-2 rounded-full bg-white" />
                Delivering
              </div>
            </div>
            <Link href="/package-info">
              <Button className="text-white">View</Button>
            </Link>
          </div>
          <div className="grid grid-cols-[auto_auto_auto] items-center gap-2 md:gap-3 lg:gap-4 rounded-lg bg-background p-4 text-sm md:p-6 lg:text-base border-b border-muted">
            <div>lmn.eth</div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-400 px-3 py-1 text-xs font-medium text-white">
                <div className="h-2 w-2 rounded-full bg-white" />
                Waiting
              </div>
            </div>
            <Link href="/package-info">
              <Button className="text-white">View</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesDelivering;
