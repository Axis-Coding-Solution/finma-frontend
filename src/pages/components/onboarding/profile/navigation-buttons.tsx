import { Button } from "@/components/ui";
import { UseFormTrigger } from "react-hook-form";

type PropsTypes = {
  step: number;
  triggerValidation: UseFormTrigger<any>;
  nextStep: () => void;
  prevStep: () => void;
  isSubmitting: boolean;
};

export const OnboardingProfileNavigationButtons = (props: PropsTypes) => {
  const { step, nextStep, prevStep, triggerValidation, isSubmitting } = props;

  const handleNext = async () => {
    const isValid = await triggerValidation();
    if (isValid) nextStep();
  };
  return (
    <div className="flex items-center sm:gap-5 gap-2">
      {step > 0 && (
        <Button
          type="button"
          disabled={isSubmitting}
          variant="outline"
          onClick={prevStep}
        >
          Back
        </Button>
      )}
      {step === 2 ? (
        <Button type="submit" disabled={isSubmitting}>
          Start
        </Button>
      ) : (
        <Button type="button" onClick={handleNext}>
          Next
        </Button>
      )}
    </div>
  );
};
