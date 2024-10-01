import { Button, FloatingInput, InputError } from "@/components/ui";
import { FloatingInputPassword } from "@/components/ui/floating-input-password";
import { MainHeading } from "@/pages/components/common";
import { Mail, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/utils/hooks";
import { useForm } from "react-hook-form";
import { signUpInitialValues } from "@/utils/initial-values";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "@/utils/validation-schemas";
import { errorToast, successToast } from "@/utils";
import { useSignUpMutation } from "@/api/hooks";
import { ContinueWithGoogle } from "@/pages/components/auth";

const SignUpPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLoginForm = () => {
    setShowLoginForm(true);
  };
  const handleCloseForm = () => {
    setShowLoginForm(false);
  };

  const { mutateAsync } = useSignUpMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: signUpInitialValues,
    resolver: yupResolver(signUpSchema),
  });

  const onsubmitHandler = async (data: typeof signUpInitialValues) => {
    try {
      const response = await mutateAsync(data);
      const { token, user } = response.data;
      auth?.handleLoginToSession({ token, user });
      navigate("/onboarding/select-role", { replace: true });
      successToast(response.message);
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  // const lottieOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: RocketLottie,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <div className="bg-secondary rounded-lg 2xl:p-7 md:p-5 p-4">
      {/* <div className="w-full flex flex-col gap-4 justify-between">
        <div className="flex flex-col gap-8">
          <Link to="/auth/select-role">
            <div className="flex items-center  text-lg font-medium">
              <ChevronLeft />
              Go back
            </div>
          </Link>
          <MainHeading
            title="Build your startup with FinmaAI"
            subtitle="Join our community of entrepreneurs, and let's make your startup
              dreams a reality!"
          />
        </div>
        <figure className="2xl:mt-14 mt-10">
          <Lottie options={lottieOptions} />
        </figure>
      </div> */}
      <div className="2xl:w-[532px] sm:w-[432px]  w-full  bg-background rounded 2xl:p-[52px] md:p-6 p-4  flex flex-col 2xl:gap-[52px] sm:gap-10 gap-6 relative overflow-hidden">
        <button
          type="button"
          onClick={handleCloseForm}
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
        >
          <X />
        </button>
        <div className="rounded bg-secondary h-40 w-40 absolute -top-[100px] -right-[100px]"></div>
        <MainHeading title="Sign up" subtitle="Please sign up in the system." />
        <div className="flex flex-col 2xl:gap-8 gap-6">
          {!showLoginForm ? (
            <>
              <Button icon={<Mail />} onClick={handleLoginForm}>
                Sign up with email
              </Button>
              <ContinueWithGoogle />
            </>
          ) : (
            <form
              onSubmit={handleSubmit(onsubmitHandler)}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col 2xl:gap-14 gap-10">
                <div className="relative">
                  <FloatingInput
                    type="email"
                    label="Enter email"
                    {...register("email")}
                  />
                  <InputError error={errors.email} />
                </div>
                <div className="relative">
                  <FloatingInputPassword
                    type="password"
                    label="Create a password"
                    {...register("password")}
                  />
                  <InputError error={errors.password} />
                </div>
              </div>
              <Button
                disabled={isSubmitting}
                type="submit"
                className="w-full mt-4"
              >
                Sign up
              </Button>
            </form>
          )}
        </div>
        <h6 className="flex items-center gap-1 justify-center 2xl:text-base text-sm">
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
