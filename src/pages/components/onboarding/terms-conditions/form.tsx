import { useOnboardingInnovatorsMutation } from "@/api/hooks/onboarding";
import { InputError } from "@/components/ui/input-error";
import { useOnboardingForm } from "@/store/hooks";
import { createFormData, errorToast, successToast } from "@/utils";
import { FORM_MODE } from "@/utils/constants";
import { useAuth } from "@/utils/hooks";
import { termsAndConditionsInitialValues } from "@/utils/initial-values";
import { termsAndConditionsSchema } from "@/utils/validation-schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, Checkbox, Label } from "@/components/ui";

export const TermsAndConditionsForm = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { getFormData, clearFormData } = useOnboardingForm();

  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");
  const handleCancel = () => navigate(`/onboarding/${role}?redirectedFrom=t&c`);
  const { mutateAsync } = useOnboardingInnovatorsMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: FORM_MODE,
    defaultValues: termsAndConditionsInitialValues,
    resolver: yupResolver(termsAndConditionsSchema as any),
  });

  const onSubmitHandler = async (
    data: typeof termsAndConditionsInitialValues
  ) => {
    if (!data.isAgreedForTerms || !data.isAgreedForPrivacyPolicy) return null;
    const form = getFormData();
    const navigateRole = role ?? "innovators";
    // if (!form) navigate(`/onboarding/${navigateRole}`);
    if (!form) navigate("/dashboard/community");

    try {
      const formData = createFormData(form);
      await mutateAsync({ role: navigateRole, formData });
      clearFormData();
      successToast("Onboarding Completed!");
      auth?.updateUser({ ...auth?.user, onboarding: true });
      navigate("/dashboard/community", {
        replace: true,
      });
    } catch (error: any) {
      errorToast(error?.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col 2xl:gap-4 gap-0"
    >
      <div>
        <div className="flex gap-4 items-start ">
          <Controller
            name="isAgreedForTerms"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="servicesTerms"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />
          <Label htmlFor="servicesTerms" className="2xl:text-base text-sm" >
            By clicking "I Agree" and signing up for the Services, you
            acknowledge that you have read, understood, and agree to be bound by
            these Service Terms.
          </Label>
        </div>
        <InputError error={errors.isAgreedForTerms} />
      </div>
      <div>
        <div className="flex gap-4 items-start mb-1">
          <Controller
            name="isAgreedForPrivacyPolicy"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="servicesPolicy"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />
          <Label className="2xl:text-base text-sm" htmlFor="servicesPolicy">By clicking "I Agree" and signing up for the Services, you By using
            the Services, you acknowledge that you have read and understood this
            Privacy Policy and agree to our collection, use, and disclosure of
            your personal information as described herein.</Label>
        </div>
        <InputError error={errors.isAgreedForPrivacyPolicy} />
      </div>
      <div className=" flex flex-col md:flex-row gap-2 justify-between">
        <Button variant="outline"  className="rounded-[8px] 2xl:text-2xl text-base 2xl:h-12 h-10 2xl:px-10 px-6" onClick={handleCancel}>
          Cancel
        </Button>
        <Button   className="rounded-[8px] 2xl:text-2xl text-base 2xl:h-12 h-10 2xl:px-10 px-6" type="submit">
          Done
        </Button>
      </div>
    </form>
  );
};
