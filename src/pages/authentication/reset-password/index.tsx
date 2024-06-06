import { resetPasswordApi } from "@/api/http";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
import { MainHeading } from "@/pages/components/common";
import { errorToast, successToast } from "@/utils";
import { FORM_MODE, yupResolver } from "@/utils/constants";
import { resetPasswordInitialValues } from "@/utils/initial-values";
import { resetPasswordSchema } from "@/utils/validation-schemas";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const token = searchParams.get("token");

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
      navigate("completed");
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  return (
    <>
      <MainHeading
        heading="Change password"
        paragraph="Enter your new password below"
      />
      <PasswordInput
        {...register("password")}
        id="reset-password-new"
        label="New Password"
        placeholder="Enter new password..."
        error={errors.password}
      />
      <PasswordInput
        {...register("confirmPassword")}
        id="reset-password-confirm-new"
        label="Confirm Password"
        placeholder="Re-enter new password..."
        error={errors.confirmPassword}
      />
      <div className="mt-6">
        <Button
          variant="secondary"
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmitHandler)}
        >
          Set New Password
        </Button>
      </div>
    </>
  );
};

export default ResetPassword;
