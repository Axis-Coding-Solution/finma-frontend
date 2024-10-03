import { MainHeading, StepsIndicator } from "@/pages/components/common";
import {
  OnboardingCommunityGoalsStep,
  OnboardingProfileEntrepreneurialTypeStep,
  OnboardingProfileNavigationButtons,
  OnboardingProfilePersonalInfoStep,
} from "@/pages/components/onboarding";
import { useOnboardingForm } from "@/store/hooks";
import { errorToast } from "@/utils";
import {
  array,
  FORM_MODE,
  mixed,
  object,
  string,
  yupResolver,
} from "@/utils/constants";
import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

const titleOnRole = {
  innovator: "What type of entrepreneur are you",
  expert: "What type of service offer are you",
  mentor: "What type of investment profile are you",
};

const headings = (role: "innovator" | "expert" | "mentor") => [
  {
    title: "Lets create your profile",
    subTitle: "Enter your personal information.",
  },
  {
    title: titleOnRole[role],
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
    profilePhoto: mixed().label("Profile Photo").required(),
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

const ProfilePage = () => {
  const [step, setStep] = useState(0);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const onboardingForm = useOnboardingForm();
  const formValues = onboardingForm.getFormData();

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

  useEffect(() => {
    if (formValues) {
      reset(formValues);
    }
  }, []);

  const onSubmitHandler = async (values: DefaultValuesTypes) => {
    try {
      onboardingForm.setFormData(values);
      navigate("/onboarding/terms-conditions");
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
        watch={watch}
        resetField={resetField}
      />,
      <OnboardingProfileEntrepreneurialTypeStep
        errors={errors.entrepreneurType}
        control={control}
        Controller={Controller}
        role={role}
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
    <div className="w-[1084px] bg-secondary rounded-lg 2xl:p-8 p-6">
      <div className="min-w-[532px] bg-background rounded 2xl:p-[52px] p-6  flex flex-col 2xl:gap-[52px] gap-6  relative">
        <MainHeading
          title={
            headings(role as "innovator" | "expert" | "mentor")[step].title
          }
          subtitle={
            headings(role as "innovator" | "expert" | "mentor")[step].subTitle
          }
        />
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col 2xl:gap-10 gap-6"
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
