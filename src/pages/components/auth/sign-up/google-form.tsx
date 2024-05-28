import { Input } from "@/components/ui/input";
import { MainHeading } from "../../common";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const GoogleForm = () => {
  return (
    <>
      <MainHeading
        heading="Sign Up"
        paragraph="Join our community of entrepreneurs, and let's make your startup dreams"
      />
      <Input type="email" id="email" placeholder="Enter your Email" />
      <Input type="password" id="password" placeholder="Enter your Password" />
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">
          By continuing, you agree too Finma's
          <span className="underline ms-1 font-bold cursor-pointer">
            Terms of Use
          </span>
          and
          <span className="underline ms-1 font-bold cursor-pointer">
            Privacy Policy
          </span>
        </Label>
      </div>
      <div className="flex justify-between">
        <Button variant="default" className="font-bold">
          Create an Account
        </Button>
        <span className="flex items-center">
          Have an account?
          <Link to="/auth/login" className="ms-1 underline font-bold">
            Log In
          </Link>
        </span>
      </div>
    </>
  );
};
