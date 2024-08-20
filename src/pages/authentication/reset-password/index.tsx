import { SuccessThumb } from "@/assets/svgs";
import { Button } from "@/components/ui";
import { FloatingInputPassword } from "@/components/ui/floating-input-password";
import { MainHeading } from "@/pages/components/common";
import { X } from "lucide-react";
import { useState } from "react";
import Lottie from "react-lottie";
import { Star1Lottie } from "@/assets/lottie";
import { Link } from "react-router-dom";

const ResetPasswordPage = () => {
  const [showChanged, setShowChanged] = useState(false);
  const handlePasswordChanged = () => {
    setShowChanged(true);
  };
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: Star1Lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      {!showChanged ? (
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
              title="Change password"
              subtitle="Enter your new password below"
            />
            <div className="flex flex-col gap-8 pb-2">
              <FloatingInputPassword
                type="password"
                name="newPassword"
                label="Create a password"
              />
              <FloatingInputPassword
                type="password"
                name="repeatPassword"
                label="Repeat created password"
              />
              <Button
                onClick={handlePasswordChanged}
                type="submit"
                className="mt-5"
              >
                Set new password
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[596px] bg-secondary rounded-lg p-8">
          <div className="bg-background rounded p-[52px] flex flex-col gap-[52px] relative overflow-hidden">
            <button
              type="button"
              className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
            >
              <X />
            </button>
            <div className="rounded bg-secondary h-40 w-40 absolute -top-[100px] -right-[100px]"></div>
            <MainHeading
              title="Password changed"
              subtitle="Your password has been successfully changed!"
            />
            <div className="relative">
              <Link to="/auth/login">
              <Button type="submit" className="w-full">
                Log in
              </Button>
              </Link>
              <div className="absolute -top-5 right-5">
                <Lottie width={50} options={lottieOptions} />
              </div>
              <img
                src={SuccessThumb}
                className="absolute top-4 right-0 w-[92px]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPasswordPage;
