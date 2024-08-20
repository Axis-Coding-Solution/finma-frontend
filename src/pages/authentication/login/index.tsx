import { Button, FloatingInput } from "@/components/ui";
import { FloatingInputPassword } from "@/components/ui/floating-input-password";
import { MainHeading } from "@/pages/components/common";
import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const handleLoginForm = () => {
    setShowLoginForm(true);
  };
  const handleCloseForm = () => {
    setShowLoginForm(false);
  };

  return (
    <>
      <div className="bg-secondary rounded-lg py-8 px-[52px] flex justify-between items-center gap-20">
        <div className="w-full flex flex-col gap-10 justify-between">
            <div className="flex flex-col gap-8">
              <h2 className="text-[44px] font-semibold leading-[50px]">
                Welcome Back!
              </h2>
              <p className="text-2xl leading-7">
                Join our community of entrepreneurs, and let's make your startup
                dreams a reality!
              </p>
            </div>
          <figure>
            <img
              src="/assets/images/login-main.png"
              className="w-full"
              alt="Main Login Image"
            />
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
          <div className="rounded bg-secondary h-40 w-40 absolute -top-[100px] -right-[100px]"></div>
          <MainHeading
            title="Log in"
            subtitle="Please log in in the system."
          />
          {!showLoginForm ? (
            <div className="flex flex-col gap-8">
              <Button onClick={handleLoginForm}>Log in with email</Button>
              <Button variant="outline">Log in with Google</Button>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              <FloatingInput type="email" name="email" label="Enter Email" />
              <FloatingInputPassword
                type="password"
                name="password"
                label="Enter existing password"
              />
              <h6 className="-mt-6 text-end">
                <Link to="/auth/forget-password">Forgot password?</Link>
              </h6>
              <Button type="submit">Log in</Button>
            </div>
          )}
          <h6 className="flex items-center gap-1 justify-center">
            Don`t have an account?
            <Link to="/auth/sign-up">
              <span className="font-semibold"> Sign up</span>
            </Link>
          </h6>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
