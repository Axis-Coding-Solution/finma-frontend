import { CgSpinner } from "@/assets/icons";
import React from "react";
import arrowDown from "@/assets/svgs/arrow-down.svg";
import { Button } from "@/components/ui/button";
import {  NavLink } from "react-router-dom";
import GaugeChart from "@/pages/components/charts/gauge-chart";

function RiskScorePage() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-background">
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
            <img src={arrowDown} alt="arrow-down-img" className="w-20" />
          </div>
          <div className="grid grid-cols-12 gap-5 mt-10">
            <div className="col-span-4 text-center">
              <h6 className="font-semibold text-foreground text-lg">
                Idea clarity score
              </h6>
            </div>
            <div className="col-span-8">
              <div className="bg-muted p-10 rounded-xl">
                <p>
                  Your startup idea has been evaluated based on four key
                  validation points: Proof of the Problem, Solution
                  Effectiveness, Identification of Targeted Audience, and Direct
                  Competitors. Each validation point was scored on a scale from
                  1 (Low Risk) to 4 (High Risk). The total score determines the
                  overall risk level of your idea.
                </p>
                <div className="flex justify-between items-center mt-10">
                  <Button variant="default" className="">
                    See Why
                  </Button>
                  <NavLink className="flex items-end gap-2 underline"   to="/">
                    Talk to an Expert
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 30 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.875 0.9375C2.59987 0.9375 3.1875 1.52513 3.1875 2.25C3.1875 5.32223 4.4382 7.11569 5.92315 8.18486C7.47503 9.30221 9.3767 9.6875 10.625 9.6875L24.9563 9.6875L18.4469 3.17808C17.9344 2.66551 17.9344 1.83449 18.4469 1.32192C18.9595 0.809359 19.7905 0.809359 20.3031 1.32192L29.0531 10.0719C29.5656 10.5845 29.5656 11.4155 29.0531 11.9281L20.3031 20.6781C19.7905 21.1906 18.9595 21.1906 18.4469 20.6781C17.9344 20.1655 17.9344 19.3345 18.4469 18.8219L24.9563 12.3125L10.625 12.3125C8.95664 12.3125 6.48331 11.8228 4.38935 10.3151C2.22847 8.75931 0.5625 6.17777 0.5625 2.25C0.5625 1.52513 1.15013 0.9375 1.875 0.9375Z"
                        fill="#1C274C"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <GaugeChart value={70} maxValue={100} />

        </div>
      )}
    </div>
  );
}

export default RiskScorePage;
