import { IdeaValidationStartup, StartupLoader } from "@/assets/svgs";
import { Button, FloatingInput } from "@/components/ui";
import { ChevronLeft, CircleCheck, X } from "lucide-react";
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
  return (
    <div className="bg-secondary rounded-lg p-8 flex  gap-12 items-stretch  relative">
      {/* Left Section  */}
      <div className="w-[439px] flex flex-col justify-between">
        <div className="flex flex-col gap-8 ">
          <Link to="/idea-validation/details">
            <div className="flex items-center  text-lg font-medium">
              <ChevronLeft />
              Go back
            </div>
          </Link>
          {!showScore ? (
            <div className="flex flex-col gap-6">
              <h2 className="text-[44px] font-semibold">AI is checking idea</h2>
              <p className="text-2xl leading-7">
                Create your startup and continue!
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <h2 className="text-[44px] font-semibold">Well done</h2>
              <p className="text-2xl leading-7">
                Start with validation module, its free!
              </p>
            </div>
          )}
          <div>
            {showScore ? (
              <div className="bg-secondary-dark rounded p-2 text-2xl font-medium w-[306px]">
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
            <div className="flex flex-col gap-6 capitalize">
              <h6 className="uppercase font-medium">The Problem</h6>
              <span className="text-xl flex items-center gap-3">
                <CircleCheck className="text-secondary-dark" />
                Urgency
              </span>
              <span className="text-xl flex items-center gap-3">
                <CircleCheck className="text-secondary-dark" />
                Relevance
              </span>
              <span className="text-xl flex items-center gap-3">
                <CircleCheck className="text-secondary-dark" />
                Evidence
              </span>
            </div>
            <div className="flex flex-col gap-6 capitalize">
              <h6 className="uppercase font-medium">The Solution</h6>
              <span className="text-xl flex items-center gap-3">
                <CircleCheck className="text-secondary-dark" />
                Effectiveness
              </span>
              <span className="text-xl flex items-center gap-3">
                <CircleCheck className="text-secondary-dark" />
                Innovation
              </span>
              <span className="text-xl flex items-center gap-3">
                <CircleCheck className="text-secondary-dark" />
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
      <div className="w-[532px] bg-background rounded p-[52px] pb-8  relative overflow-hidden">
        <button
          type="button"
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
        >
          <X />
        </button>
        <div className="rounded bg-secondary h-40 w-40 absolute -top-[105px] -right-[105px]"></div>
        <div className="">
          <h2 className="text-[44px] font-semibold">Well done</h2>
          <div className="flex flex-col gap-8 mt-8">
            <FloatingInput
              type="text"
              name="startupName"
              label="Name of your startup"
            />
            <FloatingInput type="text" name="industry" label="Industry" />
          </div>
          <div className="flex justify-center -mt-5">
            <img src={IdeaValidationStartup} />
          </div>
          <div className="flex items-center gap-8 mt-5">
            <Button variant="outline" className="w-full">
              Need time
            </Button>
            <Button className="w-full">
              <Link to="/auth/sign-up">Built it!</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaClarityStartupPage;
