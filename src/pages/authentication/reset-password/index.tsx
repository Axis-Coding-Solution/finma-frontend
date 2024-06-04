import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
import { MainHeading } from "@/pages/components/common";
import { Link } from "react-router-dom";

const ResetPassword: React.FC = () => {
  return (
    <>
      <MainHeading
        heading="Change password"
        paragraph="Enter your new password below"
      />
      <PasswordInput
        id="reset-password-new"
        label="New Password"
        placeholder="Enter new password..."
      />
      <PasswordInput
        id="reset-password-confirm-new"
        label="Confirm Password"
        placeholder="Re-enter new password..."
      />
      <div className="mt-6">
        <Link
          to="/auth/reset-password/completed"
          title="Go to changed password"
        >
          <Button variant="secondary">Set New Password</Button>
        </Link>
      </div>
    </>
  );
};

export default ResetPassword;
