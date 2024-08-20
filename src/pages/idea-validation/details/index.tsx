import { IdeaValidationProblem, IdeaValidationSolution } from "@/assets/svgs";
import { Button } from "@/components/ui";
import { X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IdeaClarityDetailsPage = () => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const handleDetailsNext = () => {
    if (!showDetails) {
      setShowDetails(true);
    } else {
      navigate("/idea-validation/startup");
    }
  };
  const handleDetailsBack = () => {
    if (showDetails) {
      setShowDetails(false);
    } else {
      navigate("/idea-validation/start");
    }
  };
  return (
    <div className="bg-secondary rounded-lg py-8 px-[52px] flex justify-between items-center gap-2 relative">
      <div className="absolute top-10 left-10">
        {!showDetails ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-warning"></div>
            <div className="w-4 h-4 rounded-full bg-background"></div>
            <div className="w-4 h-4 rounded-full bg-background"></div>
            <div className="w-4 h-4 rounded-full bg-background"></div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-warning"></div>
            <div className="w-4 h-4 rounded-full bg-warning"></div>
            <div className="w-4 h-4 rounded-full bg-background"></div>
            <div className="w-4 h-4 rounded-full bg-background"></div>
          </div>
        )}
      </div>
      <div className="w-[454px]">
        <div className="flex flex-col gap-8 pl-10">
          <h2 className="text-[44px] font-semibold">Idea Validation</h2>
          <p className="text-2xl leading-7">
            Write your idea in problem and solution format. It is the safest way
            to analyze your idea.
          </p>
        </div>
        <figure className="mt-[50px]">
          {!showDetails ? (
            <img
              src={IdeaValidationProblem}
              className="w-[242px]"
              alt="Idea Validation Problem"
            />
          ) : (
            <img
              src={IdeaValidationSolution}
              className="w-[242px]"
              alt="Idea Validation Problem"
            />
          )}
        </figure>
      </div>
      <div className="w-[554px] bg-background rounded p-[52px]  relative overflow-hidden">
        <button
          type="button"
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
        >
          <X />
        </button>
        <div className="rounded bg-secondary h-40 w-40 absolute -top-[105px] -right-[105px]"></div>
        {!showDetails ? (
          <div className="flex flex-col gap-7">
            <h6 className="text-[32px] font-semibold">The Problem</h6>
            <textarea
              className="h-[300px] outline-none border-b pb-2 text-muted-foreground text-[28px] leading-[32px] w-full"
              placeholder="Example: Short-term caravans rental to domestic transit travelers accessible at airport car parking. The sun set beautifully over the calm ocean, painting the sky with shades of pink and orange. The sun set beautifull. The sun set beautifully"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-7">
            <h6 className="text-[32px] font-semibold">The Solution</h6>
            <textarea
              className="h-[300px] outline-none border-b pb-2 text-muted-foreground text-[28px] leading-[32px] w-full"
              placeholder="Example: Short-term caravans rental to domestic transit travelers accessible at airport car parking. The sun set beautifully over the calm ocean, painting the sky with shades of pink and orange. The sun set beautifull. The sun set beautifully"
            />
          </div>
        )}
        <div className="mt-[60px] flex items-center gap-8">
          <Button
            variant="outline"
            className="w-full"
            onClick={handleDetailsBack}
          >
            Go Back
          </Button>
          <Button className="w-full" onClick={handleDetailsNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IdeaClarityDetailsPage;
