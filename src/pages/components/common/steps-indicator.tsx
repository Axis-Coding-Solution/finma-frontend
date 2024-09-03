import { cn } from "@/utils";

type PropsTypes = {
  totalSteps: number;
  activeStep: number;
};

const StepsIndicator = ({ totalSteps, activeStep }: PropsTypes) => {
  return (
    <div className="px-2 py-1 rounded-full bg-background flex items-center gap-2">
      {Array.from({ length: totalSteps }).map((_, idx) => (
        <div
          className={cn(
            "w-4 h-4 rounded-full",
            activeStep >= idx ? "bg-info" : "bg-light-gray"
          )}
          key={idx}
        />
      ))}
    </div>
  );
};

export { StepsIndicator };
