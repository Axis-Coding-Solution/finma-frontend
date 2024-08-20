import { Button, FloatingInput } from "@/components/ui";
import { FloatingInputPassword } from "@/components/ui/floating-input-password";
import { MainHeading } from "@/pages/components/common";
import { ChevronLeft, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { RocketLottie } from "@/assets/lottie";

const SignUpPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const handleLoginForm = () => {
    setShowLoginForm(true);
  };
  const handleCloseForm = () => {
    setShowLoginForm(false);
  };
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: RocketLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="bg-secondary-dark rounded-lg py-8 px-[52px] flex justify-between items-stretch gap-16">
      <div className="w-full flex flex-col gap-4 justify-between">
        <div className="flex flex-col gap-8">
          <Link to="/auth/select-role">
            <div className="flex items-center  text-lg font-medium">
              <ChevronLeft />
              Go back
            </div>
          </Link>
          <div className="flex flex-col gap-8">
            <h2 className="text-[44px] font-semibold leading-[50px]">
              Build your startup with FinmaAI
            </h2>
            <p className="text-2xl leading-7">
              Join our community of entrepreneurs, and let's make your startup
              dreams a reality!
            </p>
          </div>
        </div>
        <figure className="mt-14">
          <Lottie options={lottieOptions} />
        </figure>
      </div>
      <div className="min-w-[532px] bg-background rounded p-[52px] flex flex-col gap-[52px] relative overflow-hidden">
        <button
          type="button"
          onClick={handleCloseForm}
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
        >
          <X />
        </button>
        <div className="rounded bg-secondary-dark h-40 w-40 absolute -top-[100px] -right-[100px]"></div>
        <MainHeading title="Sign up" subtitle="Please sign up in the system." />
        {!showLoginForm ? (
          <div className="flex flex-col gap-8">
            <Button onClick={handleLoginForm}>Sign up with email</Button>
            <Button variant="outline">Sign up with email</Button>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            <FloatingInput type="email" name="email" label="Enter email" />
            <FloatingInputPassword
              type="password"
              name="password"
              label="Create a password"
            />
            <Button type="submit">Sign up</Button>
          </div>
        )}
        <h6 className="flex items-center gap-1 justify-center">
          Have an account?
          <Link to="/auth/login">
            <span className="font-semibold">Log in</span>
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default SignUpPage;
