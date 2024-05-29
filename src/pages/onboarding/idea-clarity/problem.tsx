import { MainHeading } from "@/pages/components/common";
import { Textarea } from "@/components/ui/textarea";
import { StepNavigationBtn } from "@/pages/components/common/Step-navigation-btn";


function IdeaClarityProblemPage() {
  return <div>
    <div>
      <div className="flex justify-end items-end text-secondary">
        <span className="text-foreground font-semibold text-2xl">1</span>
        / <span>4</span>
      </div>
      <div className="flex items-center gap-2 mt-2 mb-5">
        <div className="h-2 w-full rounded-full bg-primary"></div>
        <div className="h-2 w-full rounded-full bg-secondary"></div>
        <div className="h-2 w-full rounded-full bg-secondary"></div>
        <div className="h-2 w-full rounded-full bg-secondary"></div>
      </div>
    </div>
    <MainHeading
      heading='The Problem' paragraph='Do you have strong, credible evidence that the problem you are addressing exists and is significant?' />
    <div className="mt-5">
      <div>
        <Textarea showIcon={true} rows={10} />
      </div>
      <div className="mt-5">
        <StepNavigationBtn nextStep='/onboarding/idea-clarity/solution' showPrevStep={false} />
      </div>
    </div>
  </div>;
}

export default IdeaClarityProblemPage;
