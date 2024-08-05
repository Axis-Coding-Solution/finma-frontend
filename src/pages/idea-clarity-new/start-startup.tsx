import icon from "@/assets/svgs/shine-star.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MainHeading } from "../components/common";
import validationIcon from "@/assets/images/validation-icon.png";

const StartStartup = () => {
  return (
    <div className="flex flex-col gap-5">
      <MainHeading heading="Idea validation" />

      <div className="border border-border bg-white border-1 rounded-xl p-5 w-full ">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">The Problem</h1>
          <img src={icon} alt="Text area icon" />
        </div>
        <p>
          Transit travelers spend many hours at airports without access to
          comfort and leisure
        </p>
        <div className="bg-red-600/10 font-bold w-36 item-end mt-10 text-[#E34446] px-1 rounded-sm">
          <p className="">Needs Validation</p>
        </div>
      </div>
      <span className="flex items-start gap-1 ">
        <img src={validationIcon} />

        <h1 className="text-[#E34446]">
          Hard luck! The Problem statement you entered is missing either one or
          more of the validation criteria. Relevancy, Urgency or Evidence.
          Sing-in to review the complete validation report.
        </h1>
      </span>

      <div className="border border-border bg-white border-1 rounded-xl p-5 w-full ">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">The Solution</h1>
          <img src={icon} alt="Text area icon" />
        </div>
        <p>
          We rented 5 caravans and reached out to 100 transit travelers in Paris
          airport (CDG) who had over 6 hours layover time. 26 people have booked
          and paid to use our caravans.
        </p>
        <div className="bg-green-600/10 font-bold w-[112px] px-2  mt-10 text-[#5EB650]  rounded-sm">
          <p className="">Ready to go</p>
        </div>
      </div>
      <span className="flex items-start gap-1 ">
        <img src={validationIcon} />

        <h1 className="text-[#E34446]">
          Hard luck! The Solution you considered to solve the problem didn’t
          meet either one or more of the validation criteria. Effectiveness,
          Innovation or Feasibility. Sing-in to review the complete validation
          report.
        </h1>
      </span>
   <div className="flex justify-end items-end gap-5 mt-5">
        <Link to="/start-startup">
          <Button className="flex gap-4 " variant="outline">
            Start building your startup.
          </Button>
        </Link>
        <Button className="flex gap-4 " variant="default">
          Validate with AI.
        </Button>
      </div>
    </div>
  );
};

export default StartStartup;
