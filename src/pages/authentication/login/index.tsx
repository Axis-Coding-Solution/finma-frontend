import { useLoginMutation } from "@/api/hooks";
import { Button, FloatingInput, InputError } from "@/components/ui";
import { FloatingInputPassword } from "@/components/ui/floating-input-password";
import { ContinueWithGoogle } from "@/pages/components/auth";
import { MainHeading } from "@/pages/components/common";
import { errorToast, successToast } from "@/utils";
import { useAuth } from "@/utils/hooks";
import { loginInitialValues } from "@/utils/initial-values";
import { loginSchema } from "@/utils/validation-schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { Mail, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLoginForm = () => {
    setShowLoginForm(true);
  };
  const handleCloseForm = () => {
    setShowLoginForm(false);
  };

  const { mutateAsync } = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: loginInitialValues,
    resolver: yupResolver(loginSchema),
  });

  const onSubmitHandler = async (data: typeof loginInitialValues) => {
    try {
      const response = await mutateAsync(data);
      const { token, user, redirectUrl } = response.data;
      auth?.handleLogin({ token, user });
      successToast(response.message);
      navigate(redirectUrl, { replace: true });
    } catch (error: any) {
      if (error.data?.redirectUrl)
        navigate(error.data.redirectUrl, { replace: true });
      errorToast(error.message);
    }
  };

  return (
    <>
      <div className="bg-secondary  rounded-lg 2xl:p-7 md:p-5 p-4">
        {/* <div className="w-full flex flex-col gap-10 justify-between">
          <MainHeading
            title="Welcome Back!"
            subtitle="Join our community of entrepreneurs, and let's make your startup
                dreams a reality!"
          />
          <figure>
            <img
              src="/assets/images/login-main.png"
              className="xl:w-full w-60"
              alt="Main Login Image"
            />
          </figure>
        </div> */}
        <div className="2xl:w-[532px] sm:w-[432px] bg-background rounded 2xl:p-[52px] md:p-6  p-4  flex flex-col  2xl:gap-[52px] sm:gap-10 gap-6 relative overflow-hidden">
          <button
            type="button"
            onClick={handleCloseForm}
            className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
          >
            <X />
          </button>
          <div className="rounded bg-secondary h-40 w-40 absolute -top-[100px] -right-[100px]"></div>
          <div className="sm:mt-0 mt-4">
            <MainHeading
              title="Log in"
              subtitle="Please log in in the system."
            />
          </div>
          <div className="flex flex-col 2xl:gap-8 sm:gap-6 gap-4">
            {!showLoginForm ? (
              <>
                <Button icon={<Mail />} onClick={handleLoginForm}>
                  Log in with email
                </Button>
                <ContinueWithGoogle text="Login with Google" />
              </>
            ) : (
              <form
                className="flex flex-col gap-6"
                onSubmit={handleSubmit(onSubmitHandler)}
              >
                <div className="flex flex-col 2xl:gap-14 sm:gap-10 gap-4">
                  <div className="relative">
                    <FloatingInput
                      type="email"
                      label="Enter Email"
                      {...register("email")}
                    />
                    <InputError error={errors.email} />
                  </div>
                  <div className="relative">
                    <FloatingInputPassword
                      type="password"
                      label="Enter existing password"
                      {...register("password")}
                    />
                    <InputError error={errors.password} />
                  </div>
                </div>
                <div className="flex flex-col 2xl:gap-12 md:gap-6 gap-4">
                  <h6 className="text-end">
                    <Link to="/auth/forget-password">Forgot password?</Link>
                  </h6>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full"
                  >
                    Log in
                  </Button>
                </div>
              </form>
            )}
          </div>
          <h6 className="flex items-center gap-1 justify-center 2xl:text-base text-sm">
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
