import { ColorLoader, PlainLoader } from "@/assets/svgs";
import { Button, GradientButton } from "@/components/ui";
import { MainHeading } from "@/pages/components/common";
import { Check, CircleAlert, RefreshCcw, X } from "lucide-react";
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
    <div className="w-[1084px] bg-secondary rounded-lg 2xl:p-8 p-6  relative">
      <div className="w-full bg-background rounded 2xl:p-8 p-6  relative overflow-hidden">
        <button
          type="button"
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
        >
          <X />
        </button>
        <div className="rounded bg-secondary h-40 w-40 absolute -top-[100px] -right-[100px]"></div>
        {!showDetails ? (
          <div>
            <div className="flex justify-between 2xl:gap-0 gap-10">
              <div className="2xl:w-[600px] w-auto">
                <MainHeading
                  title=" Describe the problem your
                  startup is going to solve"
                  subtitle="It is the safest way to analyze your idea."
                />
              </div>
              <div className="w-[184px] rounded shadow-lg py-7 px-5 mr-10 2xl:mt-10 mt-0 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <h6 className="uppercase text-[8px] font-bold">
                    The Problem
                  </h6>
                  <RefreshCcw />
                </div>
                <div className="flex items-center gap-2">
                  <img src={PlainLoader} className="w-10" />
                  <span className="text-[9px] flex flex-col gap-1">
                    The Problem score{" "}
                    <span className="text-[12px] font-bold">--/--</span>
                  </span>
                </div>
                <ul className="flex flex-col gap-4">
                  <li className="text-[12px] flex items-center gap-2">
                    <Check className="w-3 h-3 text-background bg-muted-foreground rounded-full " />
                    Urgency
                  </li>
                  <li className="text-[12px] flex items-center gap-2">
                    <Check className="w-3 h-3 text-background bg-muted-foreground rounded-full " />
                    Relevance
                  </li>
                  <li className="text-[12px] flex items-center gap-2">
                    <Check className="w-3 h-3 text-background bg-muted-foreground rounded-full " />
                    Evidence
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <textarea className="h-20 outline-none border-b border-muted p-2 text-secondary-foreground text-[28px] leading-[32px] w-full" />
              <span className="text-lg text-muted-foreground">
                120 letter max
              </span>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between 2xl:gap-0 gap-10">
              <div className="2xl:w-[600px] w-auto">
                <MainHeading
                  title=" Describe the solution"
                  subtitle="  It is the safest way to analyze your idea."
                />
              </div>
              <div className="w-[184px] rounded shadow-lg py-7 px-5 mr-10 2xl:mt-10 mt-0 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <h6 className="uppercase text-[8px] font-bold">
                    The Solution
                  </h6>
                  <RefreshCcw />
                </div>
                <div className="flex items-center gap-2">
                  <img src={ColorLoader} className="w-10 animate-spin" />
                  <span className="text-[9px] flex flex-col gap-1">
                    The Solution score{" "}
                    <span className="text-[12px] font-bold">--/--</span>
                  </span>
                </div>
                <ul className="flex flex-col gap-4">
                  <li className="text-[12px] flex items-center gap-2">
                    <Check className="w-3 h-3 text-background bg-secondary-dark rounded-full " />
                    Urgency
                    <CircleAlert className="w-3" />
                  </li>
                  <li className="text-[12px] flex items-center gap-2">
                    <Check className="w-3 h-3 text-background bg-secondary-dark rounded-full " />
                    Relevance
                    <CircleAlert className="w-3" />
                  </li>
                  <li className="text-[12px] flex items-center gap-2">
                    <Check className="w-3 h-3 text-background bg-secondary-dark rounded-full " />
                    Evidence
                    <CircleAlert className="w-3" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="2xl:mt-10 mt-6">
              <textarea className="h-20 outline-none border-b border-muted p-2 text-secondary-foreground text-[28px] leading-[32px] w-full" />
              <span className="text-lg text-muted-foreground">
                120 letter max
              </span>
            </div>
          </div>
        )}
        <div className="flex justify-between gap-4 items-end">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-warning"></div>
            <div className="w-4 h-4 rounded-full bg-warning"></div>
            <div className="w-4 h-4 rounded-full bg-slate-200"></div>
            <div className="w-4 h-4 rounded-full bg-slate-200"></div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="px-10"
              onClick={handleDetailsBack}
            >
              Back
            </Button>
            <GradientButton variant="gradient" className="px-10 rounded">
              Validate
            </GradientButton>
            <Button className="px-14" onClick={handleDetailsNext}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaClarityDetailsPage;
