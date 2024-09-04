import { ColorLoader } from "@/assets/svgs";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  GradientButton,
} from "@/components/ui";
import { Check, Plus, RefreshCcw, SquarePen, X } from "lucide-react";

export const IdeaValidationCardEditModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <span role="button">
            <div className="flex gap-2 items-center  bg-foreground 2xl:px-6 px-4 2xl:py-2 py-1 text-background 2xl:rounded rounded-md 2xl:text-2xl text-base ">
              <SquarePen size={20} className="2xl:text-2xl text-base" />
              <span className="">Edit</span>
            </div>
          </span>
        </DialogTrigger>
        <DialogContent className="bg-info-light min-w-[1084px] 2xl:py-[52px] py-8 2xl:px-8 px-6">
          <div className="flex flex-col 2xl:gap-8 gap-6">
            {/* Team member & Card Status */}
            <div className="flex items-start 2xl:gap-10 gap-6">
              {/* Team Members  */}
              <div className="flex flex-col 2xl:gap-2 gap-1">
                <h6 className="text-foreground 2xl:text-base text-sm font-medium">
                  Team members
                </h6>
                <div className="flex items-center relative">
                  <div className="bg-[#FEA946] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
                    AG
                  </div>
                  <div className="bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
                    VH
                  </div>
                  <div className="bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
                    VH
                  </div>
                  <div className="bg-background 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
                    <Plus className="text-foreground" />
                  </div>
                </div>
              </div>
              {/* Card status  */}
              <div className="flex flex-col 2xl:gap-2 gap-1">
                <h6 className="text-foreground 2xl:text-base text-sm font-medium">
                  Team members
                </h6>
                <div className="px-3 py-1 2xl:text-base text-sm rounded-full max-w-max bg-secondary-dark">
                  Delivered by Adam on Sep 20, 2024
                </div>
              </div>
            </div>
            {/* Edit Content  */}
            <div className="bg-background rounded 2xl:p-8 p-6 flex items-stretch justify-between  2xl:gap-24 gap-20 ">
              <div className="flex flex-col justify-between h-full">
                <div>
                <h4 className="2xl:text-[32px] text-2xl font-semibold text-foreground capitalize">
                  Describe the problem your startup is going to solve
                </h4>
                <span className="2xl:text-2xl text-base 2xl:mt-4 mt-2">120 Letter max</span>
                </div>
                <div>
                  <p className="2xl:text-[28px] text-lg 2xl:leading-8 leading-6 text-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse ultrices interdum orci, at sagittis elit
                    porttitor. Suspendisse ultrices interdum orci, at sagittis
                    elit porttitor.
                  </p>
                  <div className="flex items-center 2xl:gap-8 gap-6 2xl:mt-8 mt-6">
                    <GradientButton variant="gradient" className="rounded w-full">
                      Validate
                    </GradientButton>
                    <Button variant="outline" className="rounded w-full">Discard</Button>
                    <Button className="rounded w-full">Save</Button>
                  </div>
                </div>
              </div>
              <div className="bg-background 2xl:min-w-[305px] md:min-w-[255px] rounded shadow-lg 2xl:p-6 p-4  flex flex-col 2xl:gap-8 gap-6">
                <div className="flex items-center justify-between 2xl:gap-4 gap-2">
                  <h6 className="uppercase 2xl:text-base text-sm font-medium ">
                    The Problem Validation
                  </h6>
                  <RefreshCcw size={20} className="text-info" />
                </div>
                <div className="flex items-center 2xl:gap-4 gap-2">
                  <img src={ColorLoader} className="2xl:w-20 w-14" />
                  <span className="2xl:text-base text-sm flex flex-col gap-1 font-medium leading-[18px]">
                    The Problem score{" "}
                    <span className="2xl:text-xl text-lg font-bold">7/10</span>
                  </span>
                </div>
                <ul className="flex flex-col 2xl:gap-7 gap-4">
                  <li className="2xl:text-xl text-base flex items-center gap-2">
                    <Check className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-success-dark rounded-full " />
                    Urgency
                  </li>
                  <li className="2xl:text-xl text-base flex items-center gap-2">
                    <Check className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-success-dark rounded-full " />
                    Relevance
                  </li>
                  <li className="2xl:text-xl text-base flex items-center gap-2">
                    <X className="2xl:w-4 w-3 2xl:h-4 h-3 text-background bg-danger rounded-full " />
                    Relevance
                  </li>
                </ul>
              </div>
            </div>
            {/* Community & Tasks action  */}
            <div className="flex items-start 2xl:gap-10 gap-6">
            <div className="flex flex-col 2xl:gap-2 gap-1">
                <h6 className="text-foreground 2xl:text-base text-sm font-medium">
                  Community interaction
                </h6>
                <div className="flex items-center relative">
                  <div className="bg-[#FEA946] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
                    AG
                  </div>
                  <div className="bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
                    VH
                  </div>
                  <div className="bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
                    VH
                  </div>
                  <div className="bg-background 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
                    <Plus className="text-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
