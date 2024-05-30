import { MainHeading } from "@/pages/components/common";
import IdeaClarityCard from "@/pages/components/dashboard/idea-clarity";
import LockedCard from "@/pages/components/dashboard/locked-card";

function OverviewPage() {
  return (
    <div>
      <MainHeading heading="Overview" paragraph="" />
      <div className="mt-5 rounded-2xl bg-muted p-5">
        <div className="flex justify-between items-center text-foreground font-medium">
          <h6 className="text-xl">Idea Clarity</h6>
          <span className="text-lg">Score 1</span>
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
