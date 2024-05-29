import { Textarea } from "@/components/ui/textarea";
import { MainHeading } from "@/pages/components/common";
import { StepNavigationBtn } from "@/pages/components/common/Step-navigation-btn";

function IdeaClarityCompetitorsPage() {
  return <div>
  <MainHeading
    heading='Competitors' paragraph='Who are your direct competitors, and what makes your solution stand out?' />
  <div className="mt-5">
    <div>
      <Textarea showIcon={true} rows={10} />
    </div>
    <div className="mt-5">
     <StepNavigationBtn prevStep="/onboarding/idea-clarity/targeted-audience" showNextStep={false}/>
    </div>
  </div>
</div>;
}

export default IdeaClarityCompetitorsPage;
