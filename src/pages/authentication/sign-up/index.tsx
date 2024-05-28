// import { lazy } from 'react';

import { Button } from "@/components/ui/button";
import { GoogleIcon, MessageIcon } from "@/assets/images/index";
import { Link } from "react-router-dom";
import { MainHeading } from "@/pages/components/common";

// const ArrowPic = lazy(() => import("@/assets/images/arrow-pic.png"));

const SignUp = () => {
  return (
    <>
      <MainHeading
        heading="Sign Up"
        paragraph="Join our community of entrepreneurs, and let's make your startup dreams
        a reality!"
      />
      <div className="w-1/2 flex flex-col gap-2">
        <div className="w-full">
          <Button variant="default" size="lg" className="w-full">
            <img src={GoogleIcon} className="w-5 h-5" />
            <span>Sign Up With Google</span>
          </Button>
        </div>
        <Link to="/auth/sign-up/google-form" className="w-full">
          <Button variant="outline" size="lg" className="w-full">
            <img src={MessageIcon} className="w-5 h-5" />
            <span>Sign Up With email</span>
          </Button>
        </Link>
        <p className="text-center">
          Have an account?
          <Link to="/auth/login" className="ms-1 font-bold underline">
            Log in
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
