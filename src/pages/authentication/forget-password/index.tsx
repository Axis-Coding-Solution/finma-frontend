import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainHeading } from "@/pages/components/common";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <>
      <MainHeading
        heading="Forgot password?"
        paragraph="Enter your email address and we'll send you a link to reset your
        password"
      />
      <Input type="email" id="email" placeholder="Enter your Email" />
      <div>
        <Link to="/auth/reset-password">
          <Button variant="secondary" size="lg">
            Continue
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ForgetPassword;
