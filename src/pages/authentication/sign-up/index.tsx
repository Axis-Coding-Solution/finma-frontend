import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MainHeading } from "@/pages/components/common";
import { GoogleIcon, MessageIcon } from "@/assets/images/index";

const SignUp = () => {
  return (
    <>
      <MainHeading
        heading="Sign Up"
        paragraph="Join our community of entrepreneurs, and let's make your startup dreams
        a reality!"
      />
      <div className=" w-full lg:w-1/2 flex flex-col gap-4">
        <div className="">
          <Link to="/auth/sign-up/google">
            <Button variant="default" size="lg" className="w-full">
              <img src={GoogleIcon} className="w-5 h-5" />
              <span>Sign Up With Google</span>
            </Button>
          </Link>
        </div>
        <Link to="/auth/sign-up/email">
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
    // <div>Sign UP With Google</div>
  );
};

export default SignUp;
