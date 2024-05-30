import { Textarea } from "@/components/ui/textarea";
import { MainHeading } from "@/pages/components/common";
import { StepNavigationBtn } from "@/pages/components/common/Step-navigation-btn";

function IdeaClarityCompetitorsPage() {
  return <div>
    <div>
        <div className="flex justify-end items-end text-secondary">
          <span className="text-foreground font-semibold text-2xl">4</span>
          / <span>4</span>
        </div>
        <div className="flex items-center gap-2 mt-2 mb-5">
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-primary"></div>
          <div className="h-2 w-full rounded-full bg-primary"></div>
        </div>
      </div>
  <MainHeading
    heading='Competitors' paragraph='Who are your direct competitors, and what makes your solution stand out?' />
  <div className="mt-5">
    <div>
      <Textarea showIcon={true} rows={10} />
    </div>
    <div className="mt-5">
     <StepNavigationBtn prevStep="/onboarding/idea-clarity/targeted-audience" showNextStep={false} nextStep="/onboarding/idea-clarity/completed"/>
    </div>
  </div>
</div>;
}

export default IdeaClarityCompetitorsPage;
