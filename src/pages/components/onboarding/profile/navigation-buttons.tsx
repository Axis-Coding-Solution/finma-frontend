import { Button } from "@/components/ui";
import { UseFormTrigger } from "react-hook-form";

type PropsTypes = {
  step: number;
  triggerValidation: UseFormTrigger<{
    firstName: string;
    lastName: string;
    country: null;
    city: null;
    entrepreneurType: string;
    communityGoals: never[];
  }>;
  nextStep: () => void;
  prevStep: () => void;
};

export const OnboardingProfileNavigationButtons = (props: PropsTypes) => {
  const { step, nextStep, prevStep, triggerValidation } = props;

  const handleNext = async () => {
    if (step === 2) return;
    const isValid = await triggerValidation();
    if (isValid) nextStep();
  };
  return (
    <div className="flex items-center gap-5">
      {step > 0 && (
        <Button type="button" variant="outline" onClick={prevStep}>
          Back
        </Button>
      )}
      <Button type={step === 2 ? "submit" : "button"} onClick={handleNext}>
        {step === 2 ? "Start" : "Next"}
      </Button>
    </div>
  );
};
