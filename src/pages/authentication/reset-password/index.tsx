import { EyeClose, EyeOpen } from "@/assets/svgs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MainHeading } from "@/pages/components/common";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ShowPasswordState {
  newPassword: boolean;
  confirmPassword: boolean;
}

const ResetPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState<ShowPasswordState>({
    newPassword: false,
    confirmPassword: false,
  });

  const toggleShowPassword = (field: keyof ShowPasswordState) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <>
      <MainHeading
        heading="Change password"
        paragraph="Enter your new password below"
      />
      <div className="relative">
        <Label className="text-base text-foreground" htmlFor="new-password">
          Password
        </Label>
        <Input
          type={showPassword.newPassword ? "text" : "password"}
          id="new-password"
          className="mt-2"
        />
        <span
          className="absolute inset-y-0 right-4 top-8 flex items-center cursor-pointer"
          onClick={() => toggleShowPassword("newPassword")}
          aria-label="Toggle password visibility"
        >
          {showPassword.newPassword ? (
            <img src={EyeOpen} alt="Show password" key="eye-open" />
          ) : (
            <img src={EyeClose} alt="Hide password" key="eye-close" />
          )}
        </span>
      </div>
      <div className="relative mt-4">
        <Label className="text-base text-foreground" htmlFor="confirm-password">
          Confirm password
        </Label>
        <Input
          type={showPassword.confirmPassword ? "text" : "password"}
          id="confirm-password"
          className="mt-2"
        />
        <span
          className="absolute inset-y-0 right-4 top-8 flex items-center cursor-pointer"
          onClick={() => toggleShowPassword("confirmPassword")}
          aria-label="Toggle password visibility"
        >
          {showPassword.confirmPassword ? (
            <img src={EyeOpen} alt="Show password" key="eye-open-confirm" />
          ) : (
            <img src={EyeClose} alt="Hide password" key="eye-close-confirm" />
          )}
        </span>
      </div>
      <div className="mt-6">
        <Link to="/auth/reset-password/completed" title="Go to changed password">
          <Button variant="secondary">Set New Password</Button>
        </Link>
      </div>
    </>
  );
};

export default ResetPassword;
