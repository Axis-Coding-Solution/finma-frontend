import { RocketArrow } from "@/assets/svgs";
import { Button, FloatingInput } from "@/components/ui";
import { FloatingInputPassword } from "@/components/ui/floating-input-password";
import { MainHeading } from "@/pages/components/common";
import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const handleLoginForm = () => {
    setShowLoginForm(true);
  };
  const handleCloseForm = () => {
    setShowLoginForm(false);
  };
  return (
    <div className="bg-secondary-dark rounded-lg py-8 px-[52px] flex justify-between items-center gap-[104px]">
      <div className="w-full flex flex-col gap-10 justify-between">
        <div>
          <h2 className="text-4xl font-semibold">
            Build your startup with FinmaAI
          </h2>
          <p className="mt-4">
            Join our community of entrepreneurs, and let's make your startup
            dreams a reality!
          </p>
        </div>
        <figure>
          <img src={RocketArrow} className="w-full" alt="Main Login Image" />
        </figure>
      </div>
      <div className="min-w-[584px] bg-background rounded p-[52px] flex flex-col gap-10 relative overflow-hidden">
        <button
          type="button"
          onClick={handleCloseForm}
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
        >
          <X />
        </button>
        <div className="rounded bg-secondary-dark h-40 w-40 absolute -top-[105px] -right-[105px]"></div>
        <MainHeading title="Sign up" subtitle="Please sign up in the system." />
        {!showLoginForm ? (
          <div className="flex flex-col gap-8">
            <Button onClick={handleLoginForm}>Sign up with email</Button>
            <Button variant="outline">Sign up with email</Button>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            <FloatingInput type="email" name="email" label="Enter Email" />
            <FloatingInputPassword
              type="password"
              name="password"
              label="Enter existing password"
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
