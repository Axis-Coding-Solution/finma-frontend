import { Button } from "@/components/ui";

type PropsTypes = {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
};

export const OnboardingProfileNavigationButtons = (props: PropsTypes) => {
  const { step, nextStep, prevStep } = props;
  return (
    <div className="flex items-center gap-5">
      {step > 0 && (
        <Button variant="outline" type="button" onClick={prevStep}>
          Back
        </Button>
      )}
      <Button
        type={step === 2 ? "submit" : "button"}
        onClick={() => (step === 2 ? null : nextStep())}
      >
        {step === 2 ? "Start" : "Next"}
      </Button>
    </div>
  );
};
