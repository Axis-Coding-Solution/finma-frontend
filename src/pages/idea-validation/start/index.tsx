import { IdeaValidationStart } from "@/assets/svgs";
import { Button } from "@/components/ui";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const IdeaClarityStartPage = () => {
  return (
    <div className="xl:w-[1084px] w-auto xl:mx-0 mx-5">
      <div className="bg-secondary rounded-lg p-[52px] lg:px-20 md:px-10 px-5 flex flex-col justify-between items-center  relative">
        <Link to="/auth/select-role">
          <button
            type="button"
            className="absolute rounded-full size-12 inline-flex justify-center items-center top-8 right-8 self-end bg-background z-10 "
          >
            <X />
          </button>
        </Link>
        <div className="flex items-end ">
          <div className="min-w-[561px] flex flex-col gap-8 text-foreground pb-10">
            <h4 className="text-[44px] font-bold leading-[48px] ">
              Welcome to idea validation module{" "}
            </h4>
            <p className="text-xl leading-[27px]">
              Our first two modules are{" "}
              <span className="font-bold">validation modules. </span>They’re
              designed to exponentially speed up your startup building process
              and boost your success rate.
            </p>
            <p className="text-xl leading-[27px]">
              After completing the validation modules you’ll be up to speed to
              start building your startup with and idea that is both vetted and
              data-driven.
            </p>
            <p className="text-xl leading-[27px]">
              Our community will help you get:
            </p>
            <ul className="text-xl leading-[27px] list-disc ml-8">
              <li>
                <span className="font-bold">Idea validation: </span>
                40 words Elevator Pitch
              </li>
              <li>
                <span className="font-bold">Market validation: </span>A website
                with 3 USP tests
              </li>
            </ul>
            <p className="text-xl leading-[27px]">
              Our AI, Market Analysts and Copywriters are all you need to
              validate your idea
            </p>
            <p className="text-xl leading-[27px]">
              Impressive entrepreneurial journey ahead.
              <br />
              Your friends @finma.ai
            </p>
          </div>
          <div className="min-w-[421px]">
            <img src={IdeaValidationStart} />
            <Link to="/idea-validation/details">
              <Button className="w-full">Start Idea Validation</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaClarityStartPage;
