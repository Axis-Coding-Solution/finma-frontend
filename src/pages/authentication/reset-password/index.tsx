import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainHeading } from "@/pages/components/common";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <MainHeading
        heading="Reset Password"
        paragraph="Enter your new password below"
      />
      <Input
        type="password"
        id="password"
        placeholder="Enter your new password"
      />
      <Input
        type="password"
        id="password"
        placeholder="Re-enter your new password"
      />
      <div>
        <Link title="Go to changed password" to="/auth/changed-password">
          <Button variant="secondary">Reset Password</Button>
        </Link>
      </div>
    </>
  );
};

export default ResetPassword;
