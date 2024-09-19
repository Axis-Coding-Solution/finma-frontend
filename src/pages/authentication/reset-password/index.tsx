import { SuccessThumb } from "@/assets/svgs";
import { Button, InputError } from "@/components/ui";
import { FloatingInputPassword } from "@/components/ui/floating-input-password";
import { MainHeading } from "@/pages/components/common";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { Star1Lottie } from "@/assets/lottie";
import { Link, useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { resetPasswordApi } from "@/api/http";
import { errorToast, successToast } from "@/utils";
import { resetPasswordInitialValues } from "@/utils/initial-values";
import { resetPasswordSchema } from "@/utils/validation-schemas";
import { useForm } from "react-hook-form";
import { FORM_MODE, yupResolver } from "@/utils/constants";

const ResetPasswordPage = () => {
  const [showChanged, setShowChanged] = useState(false);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const token = searchParams.get("token");
  const handlePasswordChanged = () => {
    setShowChanged(true);
  };

  const resetPasswordMutation = useMutation({
    mutationFn: resetPasswordApi,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: FORM_MODE,
    defaultValues: resetPasswordInitialValues,
    resolver: yupResolver(resetPasswordSchema),
  });

  useEffect(() => {
    if (id && token) reset((prev) => ({ ...prev, id, token }));
  }, [id, token]);

  const onSubmitHandler = async (values: typeof resetPasswordInitialValues) => {
    try {
      const response = await resetPasswordMutation.mutateAsync(values);
      successToast(response.message);
      handlePasswordChanged();
    } catch (error: any) {
      errorToast(error.message);
    }
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
    <div className="2xl:w-[596px] w-[500px] bg-secondary rounded-lg 2xl:p-8 p-5">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="bg-background rounded 2xl:p-[52px] p-5 flex flex-col 2xl:gap-[52px] gap-8 relative overflow-hidden"
      >
        <button
          type="button"
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
        >
          <X />
        </button>
        <div className="rounded bg-secondary h-40 w-40 absolute -top-[100px] -right-[100px]"></div>
        <MainHeading
          title={showChanged ? "Password changed" : "Change password"}
          subtitle={
            showChanged
              ? "Your password has been successfully changed!"
              : "Enter your new password below"
          }
        />
        {!showChanged ? (
          <div className="flex flex-col 2xl:gap-8 gap-6 pb-2">
            <div>
              <FloatingInputPassword
                type="password"
                label="Create a password"
                {...register("password")}
              />
              <InputError error={errors.password} />
            </div>
            <div>
              <FloatingInputPassword
                type="password"
                label="Repeat created password"
                {...register("confirmPassword")}
              />
              <InputError error={errors.confirmPassword} />
            </div>
            <Button type="submit" disabled={isSubmitting} className="mt-5">
              Set new password
            </Button>
          </div>
        ) : (
          <div className="relative 2xl:mt-0 mt-5 2xl:pb-0 pb-5">
            <Button
              tag={Link}
              to="/auth/login"
              type="button"
              className="w-full"
            >
              Log in
            </Button>
            <div className="absolute -top-5 right-5">
              <Lottie width={40} options={lottieOptions} />
            </div>
            <img
              src={SuccessThumb}
              className="absolute top-4 right-0 2xl:w-[92px] w-[70px]"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default ResetPasswordPage;
