// import { lazy } from 'react';

import { Button } from "@/components/ui/button";
import { GoogleIcon, MessageIcon } from "@/assets/images/index";
import { Link } from "react-router-dom";

// const ArrowPic = lazy(() => import("@/assets/images/arrow-pic.png"));

const SignUp = () => {
  return (
    <div className="flex flex-col ">
      {/* <img src={ArrowPic} className="w-96 h-96"/> */}

      <h1 className="text-[70px] font-bold">Sign Up</h1>
      <p className="text-[16px]">
        Join our community of entrepreneurs, and let's make your startup dreams
        a reality!
      </p>
      <div className=" flex flex-col gap-3 mt-3">
        <Button variant="default" size="lg" className="">
          <img src={GoogleIcon} className="w-5 h-5" />
          <span>Sign Up With Google</span>
        </Button>
        <Button variant="outline" size="lg">
          <img src={MessageIcon} className="w-5 h-5" />
          <span>Sign Up With email</span>
        </Button>
      </div>
      <div className="flex justify-center mt-10">
        <span>  Have an account? 
          <Link to="auth/login">Log in</Link>
          </span>
      </div>
    </div>
  );
};

export default SignUp;
