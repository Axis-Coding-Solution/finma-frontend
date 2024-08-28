import { Button, FloatingInput, InputError } from "@/components/ui";
import { FloatingInputPassword } from "@/components/ui/floating-input-password";
import { MainHeading } from "@/pages/components/common";
import { ChevronLeft, Mail, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import { RocketLottie } from "@/assets/lottie";
import { GoogleIcon } from "@/assets/svgs";
import { useAuth } from "@/utils/hooks";
import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "@/api/http";
import { useForm } from "react-hook-form";
import { signUpInitialValues } from "@/utils/initial-values";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "@/utils/validation-schemas";
import { errorToast, successToast } from "@/utils";

const routes = {
  innovator: "/lead-magnet/start",
  expert: "/onboarding/experts",
  mentor: "/onboarding/mentors",
};

const getRouteOnRole = (role: "innovator" | "expert" | "mentor") => {
  return routes[role];
};

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

  const signUpMutate = useMutation({
    mutationFn: signUpApi,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: signUpInitialValues,
    resolver: yupResolver(signUpSchema as any),
  });

  const onsubmitHandler = async (data: typeof signUpInitialValues) => {
    try {
      const response = await signUpMutate.mutateAsync(data);
      successToast(response.message);
      const { token, user } = response.data;
      auth?.handleLoginToSession({ token, user });
      const role = user.role;
      const url = getRouteOnRole(role);
      navigate(url, { replace: true });
    } catch (error: any) {
      if (error?.data?.redirectUrl)
        navigate(error.role.redirectUrl, { replace: true });
      errorToast(error.message);
    }
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
          <MainHeading
            title="Build your startup with FinmaAI"
            subtitle="Join our community of entrepreneurs, and let's make your startup
              dreams a reality!"
          />
        </div>
        <figure className="2xl:mt-14 mt-10">
          <Lottie options={lottieOptions} />
        </figure>
      </div>
      <div className="min-w-[532px] bg-background rounded 2xl:p-[52px] p-10  flex flex-col 2xl:gap-[52px] gap-10 relative overflow-hidden">
        <button
          type="button"
          onClick={handleCloseForm}
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
        >
          <X />
        </button>
        <div className="rounded bg-secondary-dark h-40 w-40 absolute -top-[100px] -right-[100px]"></div>
        <MainHeading title="Sign up" subtitle="Please sign up in the system." />
        <div className="flex flex-col 2xl:gap-8 gap-6">
          {!showLoginForm ? (
            <>
              <Button icon={<Mail />} onClick={handleLoginForm}>
                Sign up with email
              </Button>
              <Button icon={<img src={GoogleIcon} />} variant="outline">
                Sign up with Google
              </Button>
            </>
          ) : (
            <form
              onSubmit={handleSubmit(onsubmitHandler)}
              className="flex flex-col 2xl:gap-8 gap-6"
            >
              <div>
                <FloatingInput
                  type="email"
                  label="Enter email"
                  {...register("email")}
                />
                <InputError error={errors.email} />
              </div>
              <div>
                <FloatingInputPassword
                  type="password"
                  label="Create a password"
                  {...register("password")}
                />
                <InputError error={errors.password} />
              </div>
              <Button type="submit" className="w-full">
                Sign up
              </Button>
            </form>
          )}
        </div>
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
