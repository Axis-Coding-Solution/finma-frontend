import { IdeaValidationStart } from "@/assets/svgs";
import { Button } from "@/components/ui";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const IdeaClarityStartPage = () => {
  return (
    <div className="xl:w-[1084px] w-auto xl:mx-0 mx-5">
      <div className="bg-secondary rounded-lg 2xl:p-[52px] p-8  flex flex-col justify-between items-center  relative">
        <Link to="/auth/select-role">
          <button
            type="button"
            className="absolute rounded-full size-12 inline-flex justify-center items-center top-8 right-8 self-end bg-background z-10 "
          >
            <X />
          </button>
        </Link>
        <div className="flex items-end ">
          <div className="min-w-[561px] flex flex-col 2xl:gap-8 gap-4 text-foreground 2xl:pb-10 pb-0">
            <h4 className="2xl:text-[44px] text-4xl font-bold 2xl:leading-[48px] leading-[40px]">
              Welcome to idea validation module{" "}
            </h4>
            <p className="2xl:text-xl text-base 2xl:leading-[27px] ">
              Our first two modules are{" "}
              <span className="font-bold">validation modules. </span>They’re
              designed to exponentially speed up your startup building process
              and boost your success rate.
            </p>
            <p className="2xl:text-xl text-base 2xl:leading-[27px] ">
              After completing the validation modules you’ll be up to speed to
              start building your startup with and idea that is both vetted and
              data-driven.
            </p>
            <p className="2xl:text-xl text-base 2xl:leading-[27px] ">
              Our community will help you get:
            </p>
            <ul className="2xl:text-xl text-base 2xl:leading-[27px]  list-disc ml-8">
              <li>
                <span className="font-bold">Idea validation: </span>
                40 words Elevator Pitch
              </li>
              <li>
                <span className="font-bold">Market validation: </span>A website
                with 3 USP tests
              </li>
            </ul>
            <p className="2xl:text-xl text-base 2xl:leading-[27px] ">
              Our AI, Market Analysts and Copywriters are all you need to
              validate your idea
            </p>
            <p className="2xl:text-xl text-base 2xl:leading-[27px] ">
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
