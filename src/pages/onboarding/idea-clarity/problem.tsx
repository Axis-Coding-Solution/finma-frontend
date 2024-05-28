import { MainHeading } from "@/pages/components/common";
import { Textarea } from "@/components/ui/textarea";
import { StepNavigationBtn } from "@/pages/components/common/Step-navigation-btn";


function IdeaClarityProblemPage() {
  return <div>
    <MainHeading
      heading='The Problem' paragraph='Do you have strong, credible evidence that the problem you are addressing exists and is significant?' />
    <div className="mt-5">
      <div>
        <Textarea showIcon={true} rows={10} />
      </div>
      <div className="mt-5">
       <StepNavigationBtn/>
      </div>
    </div>
  </div>;
}

export default IdeaClarityProblemPage;
