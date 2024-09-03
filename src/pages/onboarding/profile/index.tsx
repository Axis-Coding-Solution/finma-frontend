import { MainHeading, StepsIndicator } from "@/pages/components/common";
import {
  OnboardingCommunityGoalsStep,
  OnboardingProfileEntrepreneurialTypeStep,
  OnboardingProfileNavigationButtons,
  OnboardingProfilePersonalInfoStep,
} from "@/pages/components/onboarding";
import { FORM_MODE } from "@/utils/constants";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
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

const ProfilePage = () => {
  const [step, setStep] = useState(0);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    mode: FORM_MODE,
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      entrepreneurType: "",
      communityGoals: [],
    },
  });

  const role = searchParams.get("role");

  useEffect(() => {
    if (!role)
      navigate(
        "/onboarding/select-role?infoMessage=Continue by selecting role!",
        { replace: true }
      );
  }, [role]);

  const onSubmitHandler = (values: any) => {
    console.log(values);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const Steps = useMemo(
    () => [
      <OnboardingProfilePersonalInfoStep
        register={register}
        errors={errors}
        control={control}
      />,
      <OnboardingProfileEntrepreneurialTypeStep />,
      <OnboardingCommunityGoalsStep />,
    ],
    [step]
  );

  return (
    <div className="w-[1084px] bg-secondary rounded-lg p-7">
      <div className="min-w-[532px] bg-background rounded 2xl:p-[52px] p-10  flex flex-col 2xl:gap-[52px] gap-10 relative overflow-hidden">
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
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
