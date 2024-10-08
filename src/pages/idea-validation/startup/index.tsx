import { IdeaValidationStartup, StartupLoader } from "@/assets/svgs";
import {
  Button,
  FloatingInput,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { MainHeading } from "@/pages/components/common";
import { Check, ChevronLeft, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const IdeaClarityStartupPage = () => {
  const [showScore, setShowScore] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScore(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const industryOptions = [
    { value: "1", label: "IT & Technology" },
    { value: "2", label: "Software Company" },
    { value: "3", label: "Electrical" },
    { value: "4", label: "Medical" },
    { value: "5", label: "Mechanical" },
    { value: "6", label: "Farming" },
  ];
  return (
    <div className="bg-secondary rounded-lg 2xl:p-8 p-6 flex  gap-12 items-stretch  relative">
      {/* Left Section  */}
      <div className="w-[439px] flex flex-col justify-between">
        <div className="flex flex-col 2xl:gap-8 gap-6">
          <Link to="/idea-validation/details">
            <div className="flex items-center  text-lg font-medium">
              <ChevronLeft />
              Go back
            </div>
          </Link>
          {!showScore ? (
            <MainHeading
              title="AI is checking idea"
              subtitle="Create your startup and continue!"
            />
          ) : (
            <MainHeading
              title="Well done"
              subtitle=" Start with validation module, its free!"
            />
          )}
          <div>
            {showScore ? (
              <div className="bg-secondary-dark rounded p-2 2xl:text-2xl text-lg font-medium w-[306px]">
                <h6 className="flex items-center justify-between">
                  Overall idea score:{" "}
                  <span className="font-semibold">8/10</span>
                </h6>
              </div>
            ) : (
              <div className="flex gap-20">
                <img src={StartupLoader} className="w-20 animate-spin" />
                <img src={StartupLoader} className="w-20 animate-spin" />
              </div>
            )}
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col 2xl:gap-6 gap-4 capitalize">
              <h6 className="uppercase  font-medium">The Problem</h6>
              <span className="2xl:text-xl text-base flex items-center gap-3">
                <Check className="2xl:w-5 2xl:h-5 w-4 h-4 text-background bg-secondary-dark rounded-full " />
                Urgency
              </span>
              <span className="2xl:text-xl text-base flex items-center gap-3">
                <Check className="2xl:w-5 2xl:h-5 w-4 h-4 text-background bg-secondary-dark rounded-full " />
                Relevance
              </span>
              <span className="2xl:text-xl text-base flex items-center gap-3">
                <Check className="2xl:w-5 2xl:h-5 w-4 h-4 text-background bg-secondary-dark rounded-full " />
                Evidence
              </span>
            </div>
            <div className="flex flex-col 2xl:gap-6 gap-4 capitalize">
              <h6 className="uppercase font-medium">The Solution</h6>
              <span className="2xl:text-xl text-base flex items-center gap-3">
                <Check className="2xl:w-5 2xl:h-5 w-4 h-4 text-background bg-secondary-dark rounded-full " />
                Effectiveness
              </span>
              <span className="2xl:text-xl text-base flex items-center gap-3">
                <Check className="2xl:w-5 2xl:h-5 w-4 h-4 text-background bg-secondary-dark rounded-full " />
                Innovation
              </span>
              <span className="2xl:text-xl text-base flex items-center gap-3">
                <Check className="2xl:w-5 2xl:h-5 w-4 h-4 text-background bg-secondary-dark rounded-full " />
                Feasibility
              </span>
            </div>
          </div>
        </div>
        <div className="px-2 py-1 rounded-full bg-background">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-warning"></div>
            <div className="w-4 h-4 rounded-full bg-warning"></div>
            <div className="w-4 h-4 rounded-full bg-warning"></div>
            <div className="w-4 h-4 rounded-full bg-slate-200"></div>
          </div>
        </div>
      </div>
      {/* Right Section  */}
      <div className="w-[532px] bg-background rounded 2xl:p-[52px] p-8 pb-8  relative overflow-hidden">
        <button
          type="button"
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
        >
          <X />
        </button>
        <div className="rounded bg-secondary h-40 w-40 absolute -top-[105px] -right-[105px]"></div>
        <div className="">
          <h2 className="2xl:text-[44px] text-4xl font-semibold">Well done</h2>
          <div className="flex flex-col 2xl:gap-8 gap-6 2xl:mt-8 mt-4">
            <FloatingInput
              type="text"
              name="startupName"
              label="Name of your startup"
            />
            <Select>
              <SelectTrigger id="industry">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                {industryOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-center -mt-5">
            <img src={IdeaValidationStartup} />
          </div>
          <div className="flex flex-1 items-center gap-8 mt-5">
            <Button variant="outline" className="w-full">
              Need time
            </Button>
            <Link to="/auth/sign-up" className="w-full">
              <Button className="w-full">Built it!</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaClarityStartupPage;
