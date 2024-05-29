import { Textarea } from "@/components/ui/textarea";
import { MainHeading } from "@/pages/components/common";
import { StepNavigationBtn } from "@/pages/components/common/Step-navigation-btn";

function IdeaClarityTargetedAudiencePage() {
  return <div>
    <div>
        <div className="flex justify-end items-end text-secondary">
          <span className="text-foreground font-semibold text-2xl">3</span>
          / <span>4</span>
        </div>
        <div className="flex items-center gap-2 mt-2 mb-5">
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-secondary"></div>
        </div>
      </div>
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
