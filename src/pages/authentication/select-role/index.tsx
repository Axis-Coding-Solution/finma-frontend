import { SignUpBuilder, SignUpInnovator, SignUpLauncher } from "@/assets/svgs";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const SelectRolePage = () => {
  return (
    <div className="xl:w-[1084px] w-auto xl:mx-0 mx-5">
      <div className="bg-info-light rounded-lg py-[52px]  lg:px-20 md:px-10 px-5 flex flex-col justify-between items-center  relative">
        <button
          type="button"
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-8 right-8 self-end bg-background z-10 "
        >
          <X />
        </button>
        <div className="w-full flex flex-col gap-10 justify-between">
          <div className="text-center">
            <h2 className="text-[44px] font-semibold">Sign up</h2>
            <p className="mt-5 text-2xl">
              Choose the community role you want to continue with
            </p>
          </div>
        </div>
        <div className="w-full grid md:grid-cols-3 grid-cols-1 lg:gap-10 gap-6 mt-20">
          <Link to="/idea-validation/start">
            <div className="rounded bg-background p-4 flex flex-col items-center text-center shadow-card-outer">
              <h4 className="text-2xl font-medium">Innovator</h4>
              <p className="text-xl mt-3">I have a startup idea</p>
              <img className="mt-6 md:w-full w-1/2" src={SignUpInnovator} />
            </div>
          </Link>
          <Link to="/auth/login">
            <div className="rounded bg-background p-4 flex flex-col items-center text-center shadow-card-outer">
              <h4 className="text-2xl font-medium">Builder</h4>
              <p className="text-xl mt-3">I want to help Innovators</p>
              <img className="mt-6 md:w-full w-1/2" src={SignUpBuilder} />
            </div>
          </Link>
          <Link to="/auth/login">
            <div className="rounded bg-background p-4 flex flex-col items-center text-center shadow-card-outer">
              <h4 className="text-2xl font-medium">Launcher</h4>
              <p className="text-xl mt-3">I am a Mentor/VC</p>
              <img className="mt-6 md:w-full w-1/2" src={SignUpLauncher} />
            </div>
          </Link>
        </div>
        <h6 className="flex items-center gap-1 justify-center text-[22px] mt-9">
          Have an account?{" "}
          <Link to="/auth/login">
            <span className="font-semibold">Log in</span>
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default SelectRolePage;
