import { Button } from "@/components/ui/button";
import { MainHeading } from "../../common";
import { Link } from "react-router-dom";

export const PasswordChange = () => {
  return (
    <div className="flex flex-col gap-3">
      <MainHeading
        heading="Password Changed"
        paragraph="Your password has been changed successfully"
      />
    <div>
        <Link title="Go to Login" to="/auth/login">
          <Button>Log In </Button>
        </Link>
      </div>
    </div>
  );
};
