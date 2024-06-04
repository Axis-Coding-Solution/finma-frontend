import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MainHeading } from "@/pages/components/common";
import { PostBox } from "@/assets/svgs";

function ForgetPasswordCompleted() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 py-20">
      <img src={PostBox} className="w-20" alt="Email Sent" />
      <MainHeading
        heading="Change password"
        paragraph="An email has been sent. Please click the link when you get it"
      />
      <Link title="Go to Login" to="/auth/reset-password">
        <Button>Log In</Button>
      </Link>
    </div>
  );
}

export default ForgetPasswordCompleted;
