import { MainHeading } from "@/pages/components/common";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { onboardingExpertsInitialValues } from "@/utils/initial-values";
import FileUpload from "@/components/ui/file-upload";
import { PersonalInfo } from "@/pages/components/onboarding/common";
// import ProfessionalInfo from "@/pages/components/onboarding/experts/professional-info";
import {
  CommunityServiceOffer,
  ProfessionalInfo,
  ProjectPreference,
  Rate,
} from "@/pages/components/onboarding/experts";
import { yupResolver } from "@hookform/resolvers/yup";
import { onboardingExpertsSchema } from "@/utils/validation-schemas/onboarding";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ExpertOnboardingValuesType } from "@/definitions/types/onboarding";
import { useOnboardingForm } from "@/store/hooks";
import { useEffect } from "react";

function ExpertsOnboardingPage() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    register,
    resetField,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: onboardingExpertsInitialValues,
    resolver: yupResolver(onboardingExpertsSchema as any),
  });

  const { setFormData, getFormData, clearFormData } = useOnboardingForm();
  const [searchParams] = useSearchParams();
  const redirectedFrom = searchParams.get("redirectedFrom");

  useEffect(() => {
    const formData = getFormData();
    if (redirectedFrom && formData) {
      reset(formData);
    }
    if (formData && !redirectedFrom) clearFormData();
  }, [redirectedFrom]);

  const onSubmitHandler = async (values: ExpertOnboardingValuesType) => {
    setFormData(values);
    navigate("/onboarding/terms-conditions?role=experts");
  };

  const commonProps = {
    control,
    errors,
    register,
  };

  const country = watch("personalInfo.country");
  const image = watch("profilePicture");

  return (
    <div className="bg-background rounded-lg px-2 lg:px-10 py-6 flex flex-col gap-8">
      <MainHeading
        heading="Lets create your expert profile"
        paragraph="Please tell us about your expertise to help us set up your profile message. It will help innovators learn about your expertise and experience."
      />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="w-[25%]">
            <FileUpload
              image={image}
              control={control}
              register={register}
              errors={errors}
            />
          </div>
          <div className="lg:w-8/12 divide divide-y divide-border w-full flex flex-col gap-5 items-end">
            <PersonalInfo
              resetField={resetField}
              country={country}
              setValue={setValue}
              {...commonProps}
            />
            <ProfessionalInfo {...commonProps} />
            <CommunityServiceOffer {...commonProps} />
            <ProjectPreference {...commonProps} />
            <Rate {...commonProps} />
            <Button type="submit">Next</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ExpertsOnboardingPage;
