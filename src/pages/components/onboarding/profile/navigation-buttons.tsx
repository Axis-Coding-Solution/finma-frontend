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
    role: string;
  }>;
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
    <div className="flex items-center gap-5">
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
