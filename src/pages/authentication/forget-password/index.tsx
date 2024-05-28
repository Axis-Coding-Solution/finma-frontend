import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainHeading } from "@/pages/components/common";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div>
      <MainHeading
        heading="Forgot password?"
        paragraph="Enter your email address and we'll send you a link to reset your
        password"
      />
      <div className="mt-3">
        <Input type="email" id="email" placeholder="Enter your Email" />
      </div>

      <div className="flex justify-between gap-10 mt-10">
        <Button variant="secondary" size="lg" className="">
          <Link to="/auth/reset-password">
            <span>Continue</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ForgetPassword;
