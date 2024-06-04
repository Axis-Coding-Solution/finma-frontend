import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MainHeading } from "@/pages/components/common";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <>
      <MainHeading
        heading="Forgot password ?"
        paragraph="Enter your email address and we'll send you a link to reset your
        password"
      />
      <div>
        <Label  htmlFor="emailAddress">
          Email Address
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Enter your Email"
          className="mt-2"
        />
      </div>
      <div>
        <Link to="/auth/forget-password/completed">
          <Button variant="secondary" size="lg">
            Continue
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ForgetPassword;
