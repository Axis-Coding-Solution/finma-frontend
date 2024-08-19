import { MainHeading } from "@/pages/components/common";
import {
  MentorsCommunityServiceOffer,
  MentorsProfessionalInfo,
} from "@/pages/components/onboarding/mentors";
import { FORM_MODE, yupResolver } from "@/utils/constants";
import { useForm } from "react-hook-form";
import InvestmentInterest from "@/pages/components/onboarding/mentors/investment-interest";
import { onboardingMentorsInitialValues } from "@/utils/initial-values";
import { MentorsOnboardingValuesType } from "@/definitions/types/onboarding";
import {
  EntrepreneurialInfo,
  PersonalInfo,
} from "@/pages/components/onboarding/common";
import { Button } from "@/components/_ui/button";
import FileUpload from "@/components/_ui/file-upload";
import { useOnboardingForm } from "@/store/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { onboardingMentorsSchema } from "@/utils/validation-schemas";
import { useAuth } from "@/utils/hooks";

function MentorsOnboardingPage() {
  const {
    register,
    control,
    reset,
    resetField,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: FORM_MODE,
    defaultValues: onboardingMentorsInitialValues,
    resolver: yupResolver(onboardingMentorsSchema as any),
  });

  const navigate = useNavigate();
  const { setFormData, getFormData, clearFormData } = useOnboardingForm();
  const [searchParams] = useSearchParams();
  const auth = useAuth();
  const redirectedFrom = searchParams.get("redirectedFrom");

  useEffect(() => {
    const formData = getFormData();
    if (redirectedFrom && formData) {
      reset(formData);
    }
    if (formData && !redirectedFrom) clearFormData();
  }, [redirectedFrom]);

  useEffect(() => {
    const role = auth?.user?.role;
    const onboarding = auth?.user?.onboarding;
    if (onboarding) navigate("/dashboard/community", { replace: true });
    
    if (role !== "mentor" && !onboarding)
      navigate(`/onboarding/${role}s`, { replace: true });
  }, []);

  const onSubmitHandler = async (values: MentorsOnboardingValuesType) => {
    setFormData(values);
    navigate("/onboarding/terms-conditions?role=mentors");
  };

  const commonProps = {
    register,
    control,
    errors,
  };
  const country = watch("personalInfo.country");
  const image = watch("profilePicture");

  return (
    <div className="bg-background rounded-lg px-2 lg:px-10 py-6 flex flex-col gap-8">
      <MainHeading
        heading="Lets create your mentor profile"
        paragraph="Please tell us about your expertise to help us set up your profile."
      />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="w-full md:w-[25%]">
            <FileUpload
              image={image}
              control={control}
              register={register}
              errors={errors}
            />
          </div>
          <div className="lg:w-8/12 divide divide-y divide-border w-full flex flex-col gap-5 items-end">
            <PersonalInfo
              country={country}
              {...{ resetField, setValue }}
              {...commonProps}
            />
            <MentorsProfessionalInfo {...commonProps} />
            <MentorsCommunityServiceOffer {...commonProps} />
            <EntrepreneurialInfo {...commonProps} />
            <InvestmentInterest {...commonProps} />
            <Button type="submit">Next</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MentorsOnboardingPage;
