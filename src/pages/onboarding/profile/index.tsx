import { useCreateProfileMutation } from "@/api/hooks";
import { MainHeading, StepsIndicator } from "@/pages/components/common";
import {
  OnboardingCommunityGoalsStep,
  OnboardingProfileEntrepreneurialTypeStep,
  OnboardingProfileNavigationButtons,
  OnboardingProfilePersonalInfoStep,
} from "@/pages/components/onboarding";
import {
  createFormData,
  errorToast,
  removeUserFromLocalStorage,
  saveUserToLocalStorage,
  successToast,
} from "@/utils";
import {
  array,
  FORM_MODE,
  object,
  string,
  yupResolver,
} from "@/utils/constants";
import { useAuth } from "@/utils/hooks";
import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

const headings = [
  {
    title: "Lets create your profile",
    subTitle: "Enter your personal information.",
  },
  {
    title: "What type of entrepreneur are you",
    subTitle:
      "This will help other members interact with you according to your entrepreneurial stage.",
  },
  {
    title: "What are your community goals",
    subTitle:
      "This will help other members to know what you are looking for in your community.",
  },
];

const validationSchemas = [
  object({
    firstName: string().label("First Name").trim().required(),
    lastName: string().label("Last Name").trim().required(),
    country: object().label("Country").required(),
    city: object().label("City").required(),
  }),
  object({
    entrepreneurType: string().label("Entrepreneurial Type").trim().required(),
  }),
  object({
    communityGoals: array().label("Community Goals").required().min(1),
  }),
];

const defaultValues = {
  firstName: "",
  lastName: "",
  country: null,
  city: null,
  entrepreneurType: "",
  communityGoals: [],
  role: "",
};

type DefaultValuesTypes = typeof defaultValues;
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
  let user: any = sessionStorage.getItem("user");
  let token: any = sessionStorage.getItem("token");
  if (user && token) {
    user = JSON.parse(user);
    user.firstName = values.firstName;
    user.lastName = values.lastName;
    user.profilePicture = values.profilePicture;
    user.role = values.role;
    // remove from any storage
    removeUserFromLocalStorage();
    // add to local storage
    saveUserToLocalStorage({ user, token });
    // update into application
    if (updateUser) updateUser(user);
  }
};

const ProfilePage = () => {
  const [step, setStep] = useState(0);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const auth = useAuth();

  const { mutateAsync } = useCreateProfileMutation();

  const validationSchema = validationSchemas[step];
  const {
    handleSubmit,
    register,
    control,
    setValue,
    resetField,
    watch,
    reset,
    trigger: triggerValidation,
    formState: { errors, isSubmitting },
  } = useForm<DefaultValuesTypes>({
    mode: FORM_MODE,
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema as any),
  });

  const country = watch("country");
  const role = searchParams.get("role");

  useEffect(() => {
    if (!role)
      navigate(
        "/onboarding/select-role?infoMessage=Continue by selecting role!",
        { replace: true }
      );
    else reset(() => ({ ...defaultValues, role }));
  }, [role]);

  const onSubmitHandler = async (values: DefaultValuesTypes) => {
    try {
      const formData = createFormData(values);
      const res = await mutateAsync(formData);
      successToast(res.message);
      // updated to storage, move from session to local storage.
      updateStorage(
        {
          firstName: values.firstName,
          lastName: values.lastName,
          role: values.role,
          profilePicture: res.data?.profilePicture,
        },
        auth?.updateUser
      );
      navigate("/dashboard/community");
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const Steps = useMemo(
    () => [
      <OnboardingProfilePersonalInfoStep
        register={register}
        errors={errors}
        control={control}
        Controller={Controller}
        country={country}
        setValue={setValue}
        resetField={resetField}
      />,
      <OnboardingProfileEntrepreneurialTypeStep
        errors={errors.entrepreneurType}
        control={control}
        Controller={Controller}
      />,
      <OnboardingCommunityGoalsStep
        errors={errors.communityGoals}
        control={control}
        Controller={Controller}
      />,
    ],
    [step, Object.keys(errors).length, country]
  );

  return (
    <div className="w-[1084px] bg-secondary rounded-lg p-7">
      <div className="min-w-[532px] bg-background rounded 2xl:p-[52px] p-10  flex flex-col 2xl:gap-[52px] gap-10 relative">
        <MainHeading
          title={headings[step].title}
          subtitle={headings[step].subTitle}
        />
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col gap-10"
        >
          {Steps[step]}
          <div className="flex items-center justify-between">
            <StepsIndicator totalSteps={Steps.length} activeStep={step} />
            <OnboardingProfileNavigationButtons
              step={step}
              triggerValidation={triggerValidation}
              nextStep={nextStep}
              prevStep={prevStep}
              key={step}
              isSubmitting={isSubmitting}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
