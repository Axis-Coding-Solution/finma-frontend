import { Textarea } from "@/components/ui/textarea";
import { MainHeading } from "@/pages/components/common";
import { StepNavigationBtn } from "@/pages/components/common/Step-navigation-btn";

function IdeaClaritySolutionPage() {
  return <div>
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
