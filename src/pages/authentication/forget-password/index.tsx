import { Button, FloatingInput } from "@/components/ui";
import { MainHeading } from "@/pages/components/common";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const ForgetPasswordPage = () => {
  return (
    <div className="w-[596px] bg-secondary rounded-lg p-8">
      <div className="bg-background rounded p-[52px] flex flex-col gap-[52px] relative overflow-hidden">
        <button
          type="button"
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
        >
          <X />
        </button>
        <div className="rounded bg-secondary h-40 w-40 absolute -top-[105px] -right-[105px]"></div>
        <MainHeading
          title="Forgot password?"
          subtitle="Enter your email address and we’ll send you a link to reset your password"
        />
        <div className="flex flex-col gap-8 pb-2">
          <FloatingInput type="email" name="email" label="Enter Email" />
          <Link to="/auth/reset-password">
            <Button type="submit" className="mt-5 w-full">
              Reset
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
