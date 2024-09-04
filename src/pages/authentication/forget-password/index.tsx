import { useForgetPasswordMutation } from "@/api/hooks";
import { Button, FloatingInput, InputError } from "@/components/ui";
import { MainHeading } from "@/pages/components/common";
import { errorToast, successToast } from "@/utils";
import { FORM_MODE, yupResolver } from "@/utils/constants";
import { forgetPasswordInitialValues } from "@/utils/initial-values";
import { forgetPasswordSchema } from "@/utils/validation-schemas";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ForgetPasswordPage = () => {
  const navigate = useNavigate();

  const { mutateAsync } = useForgetPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: FORM_MODE,
    defaultValues: forgetPasswordInitialValues,
    resolver: yupResolver(forgetPasswordSchema),
  });

  const onSubmitHandler = async (
    values: typeof forgetPasswordInitialValues
  ) => {
    try {
      const response = await mutateAsync(values);
      successToast(response.message);
      navigate("/auth/login", { replace: true });
    } catch (error: any) {
      errorToast(error.message);
    }
  };
  return (
    <div className="2xl:w-[596px] w-[500px] bg-secondary rounded-lg 2xl:p-8 p-5">
      <div className="bg-background rounded 2xl:p-[52px] p-5 flex flex-col 2xl:gap-[52px] gap-8 relative overflow-hidden">
        <button
          type="button"
          className="absolute rounded-full size-12 inline-flex justify-center items-center top-0 right-0 self-end bg-background z-10"
        >
          <X />
        </button>
        <div className="rounded bg-secondary h-40 w-40 absolute -top-[100px] -right-[100px]"></div>
        <MainHeading
          title="Forgot password?"
          subtitle="Enter your email address and we’ll send you a link to reset your password"
        />
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col 2xl:gap-8 gap-6 pb-2"
        >
          <div>
            <FloatingInput
              type="email"
              label="Enter Email"
              {...register("email")}
            />
            <InputError error={errors.email} />
          </div>
          <Button disabled={isSubmitting} type="submit" className="mt-5 w-full">
            Reset
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
