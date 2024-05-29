import { Textarea } from "@/components/ui/textarea";
import { MainHeading } from "@/pages/components/common";
import { StepNavigationBtn } from "@/pages/components/common/Step-navigation-btn";

function IdeaClarityTargetedAudiencePage() {
  return <div>
  <MainHeading
    heading='Targeted audience' paragraph='Who is the specific group of people who are currently struggling with the problem your startup aims to solve?' />
  <div className="mt-5">
    <div>
      <Textarea showIcon={true} rows={10} />
    </div>
    <div className="mt-5">
     <StepNavigationBtn prevStep="/onboarding/idea-clarity/solution" nextStep="/onboarding/idea-clarity/competitors"/>
    </div>
  </div>
</div>;
}

export default IdeaClarityTargetedAudiencePage;
