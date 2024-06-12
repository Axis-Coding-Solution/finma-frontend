import { CgSpinner } from "@/assets/icons";
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowConnerRight, VectorArrowDown } from "@/assets/svgs";
import { Chart } from "@/assets/images";

function RiskScorePage() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="rounded-lg bg-background">
      {isLoading ? (
        <div className=" flex flex-col justify-center items-center py-40">
          <CgSpinner className="animate-spin" />
          <div className="text-center text-foreground mt-4 ">
            <h4 className="text-2xl font-medium mb-2">
              Preparing your Risk Score...
            </h4>
            <p>
              Setting up your Risk Score and analyzing <br /> your business
              idea...
            </p>
          </div>
        </div>
      ) : (
        <div className="md:py-10 py-3 md:px-5 px-3">
          <div className="grid grid-cols-12 gap-5">
            <div className="md:col-span-6 col-span-12">
              <div className="md:mt-20 mt-0  items-center">
                <div className="flex  gap-4 relative">
                  <h4 className="text-foreground font-bold text-4xl">
                    Your report
                    <br />
                    is ready!
                  </h4>
                  <img
                    src={VectorArrowDown}
                    alt="arrow-down-img"
                    className="md:w-24 sm:w-20 w-16 sm:static absolute top-6 right-0 rotate-45 mt-6"
                  />
                </div>
                <div className="flex flex-col gap-4 mt-6">
                  <Link to="/auth/personal-info">
                    <Button className="sm:w-60 w-full" variant="default">
                      See Why
                    </Button>
                  </Link>
                  <Button className="sm:w-60 w-full" variant="outline">
                    Talk to an Expert
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="bg-muted lg:p-10 md:p-6 p-4 rounded-xl">
                <h6 className="font-semibold text-foreground text-lg text-center">
                  Idea clarity score
                </h6>
                <div className="flex justify-center">
                  <img
                    src={Chart}
                    className="lg:w-[90%] w-full object-contain mt-6"
                    alt=""
                  />
                </div>
                <p className="mt-6 lg:text-base text-sm">
                  Your startup idea has been evaluated based on four key
                  validation points: Proof of the Problem, Solution
                  Effectiveness, Identification of Targeted Audience, and Direct
                  Competitors.
                  <br />
                  <br />
                  Each validation point was scored on a scale from 1 (Low Risk)
                  to 4 (High Risk). The total score determines the overall risk
                  level of your idea.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RiskScorePage;
