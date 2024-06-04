import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MainHeading } from "@/pages/components/common";
import { TickShield } from "@/assets/svgs";

function ResetPasswordCompletedPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 py-20">
      <img src={TickShield} className="w-20" alt="Reset Password Done!" />
      <MainHeading
        heading="Password changed"
        paragraph="Your password has been changed successfully"
      />
      <Link title="Go to Login" to="/auth/login">
        <Button>Log In </Button>
      </Link>
    </div>
  );
}

export default ResetPasswordCompletedPage;
