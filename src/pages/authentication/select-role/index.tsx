import { SignUpBuilder, SignUpInnovator, SignUpLauncher } from "@/assets/svgs";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const SelectRolePage = () => {
  return (
    <div>
      <div className="bg-info-light rounded-lg py-8 px-[52px] flex flex-col justify-between items-center gap-[80px] relative">
        <button
          type="button"
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-8 right-8 self-end bg-background z-10 "
        >
          <X />
        </button>
        <div className="w-full flex flex-col gap-10 justify-between">
          <div className="text-center">
            <h2 className="text-4xl font-semibold">Sign up</h2>
            <p className="mt-5">
              Choose the community role you want to continue with
            </p>
          </div>
        </div>
        <div className="max-w-[584px]rounded flex flex-col gap-10">
          <div className="grid grid-cols-3 gap-12">
            <div className="rounded bg-background p-5 text-center">
              <h4 className="text-2xl font-medium">Innovator</h4>
              <p className="text-xl mt-3">I have a startup idea</p>
              <img className="mt-6 w-full" src={SignUpInnovator}/>
            </div>
            <div className="rounded bg-background p-5 text-center">
              <h4 className="text-2xl font-medium">Builder</h4>
              <p className="text-xl mt-3">I have a startup idea</p>
              <img className="mt-6 w-full" src={SignUpBuilder}/>
            </div>
            <div className="rounded bg-background p-5 text-center">
              <h4 className="text-2xl font-medium">Innovator</h4>
              <p className="text-xl mt-3">I have a startup idea</p>
              <img className="mt-6 w-full" src={SignUpLauncher}/>
            </div>
          </div>
          <h6 className="flex items-center gap-1 justify-center text-[22px] pb-4">
          Have an account?{" "}
          <Link to="/auth/login">
            <span className="font-semibold">Log in</span>
          </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SelectRolePage;
