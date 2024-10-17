import { MainHeading, StepsIndicator } from "@/pages/components/common";
import {
  OnboardingProfilePersonalInfoStep,
  OnboardingProfileEntrepreneurialTypeStep,
  OnboardingInnovatorsModulesStep,
  OnboardingTaskServiceStep,
  OnboardingCommunityGoalsStep,
  OnboardingProfileNavigationButtons,
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
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

const titleOnRole = {
  innovator: "What type of entrepreneur are you ?",
  expert: "Which Modules are you ready to help innovators with ?",
  mentor: "Which Modules do you plan to help innovators with ?",
};

const titleOnRole2 = {
  innovator: "What are your community goals ?",
  expert: "List the tasks you'll deliver",
  mentor: "List your investment interests",
};

const subTitleOnRole = {
  innovator: "This will help other members interact with you according to your entrepreneurial stage.",
  expert: "This will help other members interact with you based on your skills. ",
  mentor: "This will help other members interact with you based on your areas of expertise.",
};

const subTitleOnRole2 = {
  innovator: "This will help other members to know what you are looking for in your community.",
  expert: "This will allow other members to interact with you based on the tasks you help them complete. Be specific and focus on results.",
  mentor: "This will help other members interact with you based on your interests, such as growth stage, team skills, or industry.",
};

const headings = (role: RoleTypes) => [
  {
    title: "Lets create your profile",
    subTitle: "Enter your personal information.",
  },
  {
    title: titleOnRole[role],
    subTitle:subTitleOnRole[role],
  },
  {
    title: titleOnRole2[role],
    subTitle:subTitleOnRole2[role],
  },
];

const schemasForRole = {
  innovator: [
    object({
      entrepreneurType: string()
        .label("Entrepreneurial Type")
        .trim()
        .required(),
    }),
    object({
      communityGoals: array().label("Community Goals").required().min(1),
    }),
  ],
  expert: [
    object({
      modulesReadyToHelp: array()
        .label("Modules Ready To Help")
        .required()
        .min(1),
    }),
    object({
      deliverableTasks: array().label("Deliverable Tasks").required().min(1),
    }),
  ],
  mentor: [
    object({
      modulesPlanToHelp: array()
        .label("Modules Plan To Help")
        .required()
        .min(1),
    }),
    object({
      investmentInterests: array()
        .label("Investment Interests")
        .required()
        .min(1),
    }),
  ],
};

const validationSchemas = (role: RoleTypes) => [
  object({
    firstName: string().label("First Name").trim().required(),
    lastName: string().label("Last Name").trim().required(),
    country: object().label("Country").required(),
    city: object().label("City").required(),
    profilePhoto: mixed().label("Profile Photo").required(),
  }),
  ...schemasForRole[role],
];

const defaultValues = {
  firstName: "",
  lastName: "",
  country: null,
  city: null,
  role: "",
};

const roleBasedDefaultValues = {
  innovator: {
    entrepreneurType: "",
    communityGoals: [] as string[],
  },
  expert: {
    modulesReadyToHelp: [] as string[],
    deliverableTasks: [] as string[],
  },
  mentor: {
    modulesPlanToHelp: [] as string[],
    investmentInterests: [] as string[],
  },
};

type DefaultValuesTypes = typeof defaultValues &
  typeof roleBasedDefaultValues.innovator &
  typeof roleBasedDefaultValues.expert &
  typeof roleBasedDefaultValues.mentor;

type RoleTypes = "innovator" | "expert" | "mentor";

const RoleBasedSteps = {
  innovator: [
    OnboardingProfileEntrepreneurialTypeStep,
    OnboardingCommunityGoalsStep,
  ],
  expert: [OnboardingInnovatorsModulesStep, OnboardingTaskServiceStep],
  mentor: [OnboardingInnovatorsModulesStep, OnboardingTaskServiceStep],
};

const ProfilePage = () => {
  const [step, setStep] = useState(0);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const onboardingForm = useOnboardingForm();
  const formValues = onboardingForm.getFormData();
  const [steps, setSteps] = useState([OnboardingProfilePersonalInfoStep]);

  const role = searchParams.get("role") as RoleTypes;

  const validationSchema = validationSchemas(role)[step];


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

  useEffect(() => {
    if (!role)
      navigate(
        "/onboarding/select-role?infoMessage=Continue by selecting role!",
        { replace: true }
      );
    else
      reset(
        () =>
          ({
            ...defaultValues,
            ...roleBasedDefaultValues[role as RoleTypes],
            role,
          } as any)
      );
    setSteps([
      OnboardingProfilePersonalInfoStep,
      ...RoleBasedSteps[role as RoleTypes],
    ]);
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

  const propsOnStep = [
    {
      register: register,
      errors: errors,
      control: control,
      Controller: Controller,
      country: country,
      setValue: setValue,
      watch: watch,
      resetField: resetField,
    },
    {
      control: control,
      Controller: Controller,
      role: role,
      errors: errors,
      name: role === "expert" ? "modulesReadyToHelp" : "modulesPlanToHelp",
    },
    {
      control: control,
      Controller: Controller,
      errors: errors,
      name: role === "expert" ? "deliverableTasks" : "investmentInterests",
    },
  ];

  const CurrentStep = steps[step];

  return (
    <div className="w-[1084px] bg-secondary rounded-lg 2xl:p-8 md:p-6 p-4">
      <div className="md:min-w-[532px] w-full bg-background rounded 2xl:p-[52px] md:p-6 p-4  flex flex-col 2xl:gap-[52px] gap-6  relative">
        <div className="lg:w-1/2 w-full">
        <MainHeading
          title={headings(role as RoleTypes)[step].title}
          subtitle={headings(role as RoleTypes)[step].subTitle}
        />
        </div>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col 2xl:gap-10 sm:gap-6 gap-4"
        >
          <CurrentStep {...propsOnStep[step]} />
          <div className="flex items-center justify-between">
            <StepsIndicator totalSteps={steps.length} activeStep={step} />
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
