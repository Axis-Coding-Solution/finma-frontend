import { Button, FloatingInput } from "@/components/ui";
import { MainHeading } from "@/pages/components/common";
import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e :any ) => {
    setEmail(e.target.value);
  };
  return (
    <div className="2xl:w-[596px] w-[500px] bg-secondary rounded-lg 2xl:p-8 p-5">
      <div className="bg-background rounded 2xl:p-[52px] p-5 flex flex-col 2xl:gap-[52px] gap-8 relative overflow-hidden">
        <button
          type="button"
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
        >
          <X />
        </button>
        <div className="rounded bg-secondary h-40 w-40 absolute -top-[100px] -right-[100px]"></div>
        <MainHeading
          title="Forgot password?"
          subtitle="Enter your email address and we’ll send you a link to reset your password"
        />
        <div className="flex flex-col 2xl:gap-8 gap-6 pb-2">
          <FloatingInput type="email" name="email" label="Enter Email" value={email} onChange={handleEmailChange} />
          <Link to={email? "/auth/reset-password" :"#"}>
            <Button disabled={!email} type="submit" className="mt-5 w-full">
              Reset
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
