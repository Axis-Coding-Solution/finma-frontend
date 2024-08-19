import { forgetPasswordApi } from "@/api/http";
import { Button } from "@/components/_ui/button";
import { Input } from "@/components/_ui/input";
import { InputError } from "@/components/_ui/input-error";
import { Label } from "@/components/_ui/label";
import { MainHeading } from "@/pages/components/common";
import { errorToast, successToast } from "@/utils";
import { FORM_MODE, yupResolver } from "@/utils/constants";
import { forgetPasswordInitialValues } from "@/utils/initial-values";
import { forgetPasswordSchema } from "@/utils/validation-schemas";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const forgetPasswordMutation = useMutation({
    mutationFn: forgetPasswordApi,
  });
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
      const response = await forgetPasswordMutation.mutateAsync(values);
      successToast(response.message);
      navigate("completed", { replace: true });
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  return (
    <>
      <MainHeading
        heading="Forgot password ?"
        paragraph="Enter your email address and we'll send you a link to reset your
        password"
      />
      <div>
        <Label htmlFor="emailAddress">Email Address</Label>
        <Input
          {...register("email")}
          type="email"
          id="email"
          placeholder="Enter your Email"
          className="mt-2"
        />
        <InputError error={errors.email} />
      </div>
      <div>
        <Button
          variant="secondary"
          size="lg"
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmitHandler)}
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default ForgetPassword;
