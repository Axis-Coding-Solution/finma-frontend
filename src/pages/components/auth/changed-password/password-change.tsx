import { Button } from "@/components/ui/button";
import { MainHeading } from "../../common";
import { Link } from "react-router-dom";

export const PasswordChange = () => {
  return (
    <>
      <MainHeading
        heading="Password Changed"
        paragraph="Your password has been changed successfully"
      />
      <Link title="Go to Login" to="/auth/login">
        <Button>Log In </Button>
      </Link>
    </>
  );
};
