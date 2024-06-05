import { SeeEye } from "@/assets/svgs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { MainHeading } from "@/pages/components/common";
import IdeaClarityCard from "@/pages/components/dashboard/idea-clarity";
import LockedCard from "@/pages/components/dashboard/locked-card";
import { IdeaClarityModal } from "@/pages/components/dashboard/overview/idea-clarity-modal";
import { X } from "lucide-react";

function OverviewPage() {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:items-center items-start justify-between">
        <MainHeading heading="Overview" paragraph="" />
        <Alert className="w-auto ">
          <AlertDescription>
            <div className="flex items-center gap-2 text-md font-semibold">
              <img src={SeeEye} alt="" />
              <span>
                <span className="text-info">Sam </span>
                is reviewing your scorecard
              </span>
              <Button variant="ghost" className="p-2 md:ml-8 ml-2 group">
              <X className="text-secondary group-hover:text-info" />
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </div>
      <div className="mt-5 rounded-2xl bg-muted p-5">
        <div className="flex md:flex-row flex-col justify-between md:items-center items-start text-foreground font-medium">
          <h6 className="text-xl">Idea Clarity</h6>
          <div className="flex justify-end w-full md:mt-0 mt-2">
          <IdeaClarityModal />
          </div>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          <IdeaClarityCard
            badgeText="Good"
            badgeColor="success"
            title="Problem"
            description="Strong evidence from multiple sources"
          />
          <IdeaClarityCard
            badgeText="Weak"
            badgeColor="destructive"
            title="Solution"
            description="Strong is untested or has shown poor results"
          />
          <IdeaClarityCard
            badgeText="Good"
            badgeColor="success"
            title="Audience"
            description="Broadly defined target audience with some details"
          />
          <IdeaClarityCard
            badgeText="Moderate"
            badgeColor="info"
            title="Competitors"
            description="Some direct competitors, moderate differentiation."
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <LockedCard title="Scalability Analysis" />
        <LockedCard title="Product singularity" />
        <LockedCard title="Customer validation " />
        <LockedCard title="Founders’ ability" />
        <LockedCard title="Launch support" />
      </div>
    </div>
  );
}

export default OverviewPage;
