import { cn } from "@/utils";

import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/_ui/dialog";
import { ArrowRight, CornerDownRight } from "lucide-react";
const ProductModal = ({
  title,
  badgeText,
  badgeSettings,
}: {
  title: string;
  badgeText: string;
  badgeSettings: any;
}) => {
  return (
    <div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <span role="button">
              <div className="flex justify-end  md:mt-0 mt-2 gap-1">
                <span className="flex justify-end items-end  text-sm underline ">
                  Details
                </span>
                <CornerDownRight size={12} className="mt-[5px]" />
              </div>
            </span>
          </DialogTrigger>
          {title == "Problem" && (
            <DialogContent className="">
              <DialogHeader className="flex">
                <DialogTitle className="text-left ">
                  <div className="flex gap-3">
                    <div>Problem.</div>
                    <div className="flex items-center gap-1">
                      <span
                        className={cn(
                          "text-background text-sm px-2 py-1 rounded-full",
                          badgeSettings.default
                        )}
                      >
                        {badgeText}
                      </span>
                      <div
                        className={cn("rounded-full p-1", badgeSettings.light)}
                      >
                        <ArrowRight
                          className={cn(
                            "text-xs",
                            badgeSettings.text,
                            badgeSettings.direction
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div>
                <h1 className="font-bold">Evaluation:</h1>
                <span>
                  The problem your startup aims to solve is crucial for its
                  success. We evaluated the problem statement based on its
                  relevance, urgency, and evidence supporting its existence.
                </span>
                <h1 className="font-bold">Justification:</h1>
                <span>
                  <ul className="ml-5" style={{ listStyleType: "disc" }}>
                    <li>
                      <span className="font-bold">Relevance:</span> The problem
                      you identified is highly relevant in today's market,
                      affecting a significant number of potential users.
                    </li>
                    <li>
                      <span className="font-bold"> Urgency:</span> Addressing
                      this problem is urgent for your target audience, as it
                      impacts their efficiency and overall success.
                    </li>
                    <li>
                      <span className="font-bold"> Evidence:</span> You provided
                      strong evidence from multiple sources (surveys, studies,
                      interviews) validating the existence and importance of the
                      problem.
                    </li>
                  </ul>
                </span>
              </div>
            </DialogContent>
          )}
          {title == "Solution" && (
            <DialogContent className=" w-[200rem]">
              <DialogHeader className="flex">
                <DialogTitle className="text-left ">
                  <div className="flex gap-3">
                    <div>Solution.</div>
                    <div className="flex items-center gap-1">
                      <span
                        className={cn(
                          "text-background text-sm px-2 py-1 rounded-full",
                          badgeSettings.default
                        )}
                      >
                        {badgeText}
                      </span>
                      <div
                        className={cn("rounded-full p-1", badgeSettings.light)}
                      >
                        <ArrowRight
                          className={cn(
                            "text-xs",
                            badgeSettings.text,
                            badgeSettings.direction
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div>
                <h1 className="font-bold">Evaluation:</h1>
                <span>
                  Your proposed solution's effectiveness, innovation, and
                  feasibility were assessed to determine its potential in
                  solving the identified problem.
                </span>
                <h1 className="font-bold">Justification:</h1>
                <span>
                  <ul className="ml-5" style={{ listStyleType: "disc" }}>
                    <li>
                      <span className="font-bold"> Effectiveness:</span> The
                      solution has been tested and shown to effectively address
                      the problem, with measurable improvements.
                    </li>
                    <li>
                      <span className="font-bold"> Innovation:</span> Your
                      solution stands out due to its innovative approach,
                      offering unique features that are not commonly available.
                    </li>
                    <li>
                      <span className="font-bold"> Feasibility:</span> The
                      solution is realistic and achievable with your current
                      resources and expertise.
                    </li>
                  </ul>
                </span>
              </div>
            </DialogContent>
          )}
          {title == "Audience" && (
            <DialogContent className=" w-[200rem]">
              <DialogHeader className="flex">
                <DialogTitle className="text-left ">
                  <div className="flex gap-3">
                    <div>Audience</div>
                    <div className="flex items-center gap-1">
                      <span
                        className={cn(
                          "text-background text-sm px-2 py-1 rounded-full",
                          badgeSettings.default
                        )}
                      >
                        {badgeText}
                      </span>
                      <div
                        className={cn("rounded-full p-1", badgeSettings.light)}
                      >
                        <ArrowRight
                          className={cn(
                            "text-xs",
                            badgeSettings.text,
                            badgeSettings.direction
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div>
                <h1 className="font-bold">Evaluation:</h1>
                <span>
                  Understanding the size and characteristics of your target
                  audience is vital. We assessed the clarity and precision of
                  your audience definition, including demographics and
                  psychographics.
                </span>
                <h1 className="font-bold">Justification:</h1>
                <span>
                  <ul className="ml-5" style={{ listStyleType: "disc" }}>
                    <li>
                      <span className="font-bold"> Clarity:</span> Your target
                      audience is clearly defined, with detailed insights into
                      their demographics and psychographics.
                    </li>
                    <li>
                      <span className="font-bold"> Size:</span> There is a
                      substantial and growing audience for your solution,
                      indicating strong market potential.
                    </li>
                    <li>
                      <span className="font-bold"> Engagement: </span>The target
                      audience has shown a high level of interest and engagement
                      with similar solutions.
                    </li>
                  </ul>
                </span>
              </div>
            </DialogContent>
          )}
          {title == "Competitors" && (
            <DialogContent className=" w-[200rem]">
              <DialogHeader className="flex">
                <DialogTitle className="text-left ">
                  <div className="flex gap-3">
                    <div>Problem.</div>
                    <div className="flex items-center gap-1">
                      <span
                        className={cn(
                          "text-background text-sm px-2 py-1 rounded-full",
                          badgeSettings.default
                        )}
                      >
                        {badgeText}
                      </span>
                      <div
                        className={cn("rounded-full p-1", badgeSettings.light)}
                      >
                        <ArrowRight
                          className={cn(
                            "text-xs",
                            badgeSettings.text,
                            badgeSettings.direction
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-5">
                <h1 className="font-bold">Evaluation:</h1>
                <span>
                  We analyzed the competitive landscape to understand your
                  solution’s uniqueness and differentiation from existing
                  alternatives.
                </span>
                <h1 className="font-bold">Justification:</h1>
                <span>
                  <ul className="ml-5" style={{ listStyleType: "disc" }}>
                    <li>
                      <span className="font-bold">
                        {" "}
                        Few Direct Competitors:
                      </span>{" "}
                      There are few or no direct competitors, which reduces
                      market saturation risk.
                    </li>
                    <li>
                      <span className="font-bold">Strong Differentiation:</span>{" "}
                      Your solution has strong differentiators that set it apart
                      from existing offerings, giving you a competitive edge.
                    </li>
                    <li>
                      <span className="font-bold">Market Position:</span> Your
                      unique value proposition positions you well in the market,
                      attracting the target audience effectively.
                    </li>
                  </ul>
                </span>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </div>
  );
};

export default ProductModal;
