import { GoogleIcon } from "@/assets/svgs";
import { Button, FloatingInput } from "@/components/ui";
import { FloatingInputPassword } from "@/components/ui/floating-input-password";
import { MainHeading } from "@/pages/components/common";
import { Mail, X } from "lucide-react";
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
          <MainHeading
            title="Welcome Back!"
            subtitle="Join our community of entrepreneurs, and let's make your startup
                dreams a reality!"
          />
          <figure>
            <img
              src="/assets/images/login-main.png"
              className="w-full"
              alt="Main Login Image"
            />
          </figure>
        </div>
        <div className="min-w-[532px] bg-background rounded 2xl:p-[52px] p-10 flex flex-col 2xl:gap-[52px] gap-10 relative overflow-hidden">
          <button
            type="button"
            onClick={handleCloseForm}
            className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
          >
            <X />
          </button>
          <div className="rounded bg-secondary h-40 w-40 absolute -top-[100px] -right-[100px]"></div>
          <MainHeading title="Log in" subtitle="Please log in in the system." />
          <div className="flex flex-col 2xl:gap-8 gap-6">
            {!showLoginForm ? (
              <>
                <Button icon={<Mail />} onClick={handleLoginForm}>
                  Log in with email
                </Button>
                <Button icon={<img src={GoogleIcon} />} variant="outline">
                  Log in with Google
                </Button>
              </>
            ) : (
              <>
                <FloatingInput type="email" name="email" label="Enter Email" />
                <FloatingInputPassword
                  type="password"
                  name="password"
                  label="Enter existing password"
                />
                <h6 className="-mt-6 text-end">
                  <Link to="/auth/forget-password">Forgot password?</Link>
                </h6>
                <Link to="/dashboard/my-projects">
                  <Button type="submit" className="w-full">Log in</Button>
                </Link>
              </>
            )}
          </div>
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
