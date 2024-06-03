import { Button } from "@/components/ui/button";
import { MainHeading } from "../../common";
import { Link } from "react-router-dom";
import {  TickShield } from "@/assets/svgs";

export const PasswordChanged = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center gap-6 py-20">
        <img src={TickShield} className="w-20" alt="" />
        <MainHeading
          heading="Password changed"
          paragraph="Your password has been changed successfully"
        />
        <Link title="Go to Login" to="/auth/login">
          <Button>Log In </Button>
        </Link>
      </div>
    </>
  );
};
