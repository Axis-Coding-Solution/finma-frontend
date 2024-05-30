import { MainHeading } from "@/pages/components/common";
import IdeaClarityCard from "@/pages/components/dashboard/idea-clarity";
import lockImg from "@/assets/svgs/locked.svg";

function OverviewPage() {
  return (
    <div>
      <MainHeading heading="Overview" paragraph="" />
      <div className="mt-5 rounded-2xl bg-muted p-5">
        <div className="flex justify-between items-center text-foreground font-medium">
          <h6 className="text-xl">Idea Clarity</h6>
          <span className="text-lg">Score 1</span>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-5">
          <IdeaClarityCard
            badge="Good"
            title="Problem"
            description="Strong evidence from multiple sources"
          />
          <IdeaClarityCard
            badge="Weak"
            title="Solution"
            description="Strong is untested or has shown poor results"
          />
          <IdeaClarityCard
            badge="Good"
            title="Audience"
            description="Broadly defined target audience with some details"
          />
          <IdeaClarityCard
            badge="Moderate"
            title="Competitors"
            description="Some direct competitors, moderate differentiation."
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="p-4 bg-background rounded-xl border border-border text-foreground">
          <div className="font-semibold flex items-center justify-between gap-2">
            <h6 className="text-xl  ">Scalability Analysis</h6>
            <span className="bg-yellow-500 rounded-full px-2 py-1 text-sm">
              Beta
            </span>
          </div>
          <div className="flex items-end justify-between gap-2 mt-8">
            <span className=" font-medium text-lg mb-4">
              Score is locked
            </span>
            <img src={lockImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;
