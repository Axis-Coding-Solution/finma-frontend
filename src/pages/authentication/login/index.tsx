import { EyeClose, EyeOpen } from "@/assets/svgs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MainHeading } from "@/pages/components/common";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <MainHeading heading="Login" paragraph="Welcome back to FimnaAI!" />
      <div>
        <Label className="text-base text-foreground" htmlFor="emailAddress">
          Email Address
        </Label>
        <Input type="email" id="email" placeholder="Enter your Email" className="mt-2" />
      </div>
      <div className="text-end">
        <div className="relative text-left">
          <Label className="text-base text-foreground" htmlFor="new-password">
            Password
          </Label>
          <Input
            type={showPassword ? "text" : "password"}
            id="new-password"
            className="mt-2"
          />
          <span
            className="absolute inset-y-0 right-4 top-8 flex items-center cursor-pointer"
            onClick={toggleShowPassword}
            aria-label="Toggle password visibility"
          >
            {showPassword ? (
              <img src={EyeOpen} alt="Show password" key="eye-open" />
            ) : (
              <img src={EyeClose} alt="Hide password" key="eye-close" />
            )}
          </span>
        </div>
        <Link to="/auth/forget-password">
          <Button variant="link" className="px-0 underline mt-2">Forget Password?</Button>
        </Link>
      </div>
      <div className="text-end "></div>
      <div className="flex flex-col md:flex-row justify-between gap-10 ">
        <Link to="/dashboard/overview">
          <Button variant="default" size="lg" >
            Log In
          </Button>
        </Link>
        <span className="items-center">
          Don’t have an account?
          <Link to="/auth/sign-up" className="ms-1 font-bold underline">
            Sign Up
          </Link>
        </span>
      </div>
    </>
  );
};

export default Login;
