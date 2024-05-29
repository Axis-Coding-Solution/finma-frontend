import { Textarea } from "@/components/ui/textarea";
import { MainHeading } from "@/pages/components/common";
import { StepNavigationBtn } from "@/pages/components/common/Step-navigation-btn";

function IdeaClaritySolutionPage() {
  return <div>
    <div>
        <div className="flex justify-end items-end text-secondary">
          <span className="text-foreground font-semibold text-2xl">2</span>
          / <span>4</span>
        </div>
        <div className="flex items-center gap-2 mt-2 mb-5">
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-secondary"></div>
          <div className="h-2 w-full rounded-full bg-secondary"></div>
        </div>
      </div>
    <MainHeading
      heading='The Solution' paragraph='Has your solution been tested, and does it show clear evidence of effectively solving the problem?' />
    <div className="mt-5">
      <div>
        <Textarea showIcon={true} rows={10} />
      </div>
      <div className="mt-5">
        <StepNavigationBtn prevStep="/onboarding/idea-clarity/problem" nextStep="/onboarding/idea-clarity/targeted-audience" />
      </div>
    </div>
  </div>;
}

export default IdeaClaritySolutionPage;
