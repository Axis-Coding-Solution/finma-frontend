import { CgSpinner } from "@/assets/icons";
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowConnerRight, GuageChart, VectorArrowDown } from "@/assets/svgs";


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
        <div className="py-10 px-5">
          <div className="flex gap-4">
            <h4 className="text-foreground font-bold text-4xl">
              Your report is ready!
            </h4>
            <img src={VectorArrowDown} alt="arrow-down-img" className="w-20" />
          </div>
          <div className="grid grid-cols-12 gap-5 mt-10">
            <div className="md:col-span-4 col-span-12 text-center">
              <h6 className="font-semibold text-foreground text-lg">
                Idea clarity score
              </h6>
              <div>
                <img src={GuageChart} alt="" />
              </div>
            </div>
            <div className="md:col-span-8 col-span-12">
              <div className="bg-muted p-10 rounded-xl">
                <p>
                  Your startup idea has been evaluated based on four key
                  validation points: Proof of the Problem, Solution
                  Effectiveness, Identification of Targeted Audience, and Direct
                  Competitors. Each validation point was scored on a scale from
                  1 (Low Risk) to 4 (High Risk). The total score determines the
                  overall risk level of your idea.
                </p>
                <div className="flex md:flex-row flex-col justify-between items-center mt-10">
                  <Link to="/auth/personal-info">
                    <Button variant="default">See Why</Button>
                  </Link>
                  <Button variant="link">
                    Talk to an Expert
                    <img src={ArrowConnerRight} alt="" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RiskScorePage;
