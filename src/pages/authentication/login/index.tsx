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
    formState: { errors },
  } = useForm({
    defaultValues: loginInitialValues,
    resolver: yupResolver(loginSchema),
  });

  const onSubmitHandler = async (data: typeof loginInitialValues) => {
    try {
      const response = await mutateAsync(data);
      console.log(response.data, response);
      const { token, user, redirectUrl } = response.data;
      auth?.handleLogin({ token, user });
      successToast(response.message);
      navigate(redirectUrl, { replace: true });
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  return (
    <>
      <div className="bg-secondary rounded-lg 2xl:py-8 py-6 2xl:px-[52px] px-8 flex justify-between items-center gap-20">
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
                <ContinueWithGoogle text="Login with Google" />
              </>
            ) : (
              <form
                className="flex flex-col 2xl:gap-8 gap-6"
                onSubmit={handleSubmit(onSubmitHandler)}
              >
                <div>
                  <FloatingInput
                    type="email"
                    label="Enter Email"
                    {...register("email")}
                  />
                  <InputError error={errors.email} />
                </div>
                <div>
                  <FloatingInputPassword
                    type="password"
                    label="Enter existing password"
                    {...register("password")}
                  />
                  <InputError error={errors.password} />
                </div>
                <h6 className="-mt-6 text-end">
                  <Link to="/auth/forget-password">Forgot password?</Link>
                </h6>

                <Button type="submit" className="w-full">
                  Log in
                </Button>
              </form>
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
