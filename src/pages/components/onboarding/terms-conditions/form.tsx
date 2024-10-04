import { InputError } from "@/components/ui/input-error";
import { useOnboardingForm } from "@/store/hooks";
import {
  createFormData,
  errorToast,
  getAuthFromStorage,
  removeUserFromLocalStorage,
  saveUserToLocalStorage,
  successToast,
} from "@/utils";
import { FORM_MODE } from "@/utils/constants";
import { useAuth } from "@/utils/hooks";
import { termsAndConditionsInitialValues } from "@/utils/initial-values";
import { termsAndConditionsSchema } from "@/utils/validation-schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Label } from "@/components/ui";
import { useCreateProfileMutation } from "@/api/hooks";
import { useEffect } from "react";

type VALUES_TYPE = {
  firstName: string;
  lastName: string;
  profilePicture: string;
  role: string;
};

const updateStorage = (
  values: VALUES_TYPE,
  updateUser?: (user: any) => void
) => {
  let authStatus = getAuthFromStorage();

  if (authStatus?.user && authStatus?.token) {
    const user = JSON.parse(JSON.stringify(authStatus.user));
    user.firstName = values.firstName;
    user.lastName = values.lastName;
    user.profilePicture = values.profilePicture;
    user.role = values.role;
    // remove from any storage
    removeUserFromLocalStorage();
    // add to local storage
    saveUserToLocalStorage({ user, token: authStatus.token });
    // update into application
    if (updateUser) updateUser(user);
  }
};

export const TermsAndConditionsForm = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { getFormData, clearFormData } = useOnboardingForm();
  const form: any = getFormData();

  const { mutateAsync } = useCreateProfileMutation();

  const handleCancel = () =>
    navigate(`/onboarding/profile?redirectedFrom=t&c&role=${form.role}`);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: FORM_MODE,
    defaultValues: termsAndConditionsInitialValues,
    resolver: yupResolver(termsAndConditionsSchema as any),
  });

  useEffect(() => {
    if (!form) navigate("/onboarding/select-role");
  }, [form]);

  const onSubmitHandler = async (
    data: typeof termsAndConditionsInitialValues
  ) => {
    if (!data.isAgreedForTerms || !data.isAgreedForPrivacyPolicy) return null;
    if (!form) return navigate("/onboarding/select-role");
    try {
      const formData = createFormData(form);
      const res = await mutateAsync(formData);
      successToast(res.message);

      console.log(res.data);

      // updated to storage, move from session to local storage.
      updateStorage(
        {
          firstName: res.data?.firstName,
          lastName: res.data?.lastName,
          role: res.data?.role,
          profilePicture: res.data?.profilePicture,
        },
        auth?.updateUser
      );
      navigate("/dashboard/my-startups?showWizard=true", {
        replace: true,
      });
      setTimeout(clearFormData, 200);
    } catch (error: any) {
      errorToast(error?.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col 2xl:gap-4 gap-2"
    >
      <div>
        <div className="flex gap-4 items-start">
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
          <Label
            htmlFor="servicesTerms"
            className="2xl:text-base md:text-sm text-xs !mb-0"
          >
            By clicking "I Agree" and signing up for the Services, you
            acknowledge that you have read, understood, and agree to be bound by
            these Service Terms.
          </Label>
        </div>
        <InputError error={errors.isAgreedForTerms} noPopOut />
      </div>
      <div>
        <div className="flex gap-4 items-start">
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
          <Label
            className="2xl:text-base md:text-sm text-xs !mb-0"
            htmlFor="servicesPolicy"
          >
            By clicking "I Agree" and signing up for the Services, you By using
            the Services, you acknowledge that you have read and understood this
            Privacy Policy and agree to our collection, use, and disclosure of
            your personal information as described herein.
          </Label>
        </div>
        <InputError error={errors.isAgreedForPrivacyPolicy} noPopOut />
      </div>
      <div className="mt-2 flex flex-col md:flex-row gap-2 justify-between">
        <Button
          variant="outline"
          className="rounded-[8px] 2xl:text-2xl text-base 2xl:h-12 h-10 2xl:px-10 px-6"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          className="rounded-[8px] 2xl:text-2xl text-base 2xl:h-12 h-10 2xl:px-10 px-6"
          type="submit"
        >
          Done
        </Button>
      </div>
    </form>
  );
};
