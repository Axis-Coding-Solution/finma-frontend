import { Textarea } from "@/components/ui/textarea";
import { MainHeading } from "../components/common";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import { InputError } from "@/components/ui/input-error";

const IdeaClarity = () => {
  return (
    <div className="">
      <MainHeading heading="Idea validation" />

      
      <div className="relative   p-1 w-full z-10">
        <div className="absolute top-0 left-2 z-40  text-black pointer-events-none p-5">
          <span className="font-bold text-3xl">The Problem</span>
          <br />
          <span className="text-lg">Describe the problem you’re going to solve.. </span>
        </div>
        <Textarea placeholder="" className="w-full" showIcon />
      </div>
      <div className="relative mt-10   p-1 w-full z-10">
        <div className="absolute top-0 left-2 z-40  text-black pointer-events-none p-5">
          <span className="font-bold text-3xl">The Solution</span>
          <br />
          <span className="text-lg">Describe the solution you’re going to build..  </span>
        </div>
        <Textarea placeholder="" className="w-full" showIcon />
      </div>

      <div className="flex justify-end items-end gap-5 mt-5">
        <Link to="/start-startup">
          <Button className="flex gap-4 " variant="outline">
            Start building your startup.
          </Button>
        </Link>
        <Button className="flex gap-4 " variant="outline">
          Validate with AI.
        </Button>
      </div>
    </div>
  );
};

export default IdeaClarity;
