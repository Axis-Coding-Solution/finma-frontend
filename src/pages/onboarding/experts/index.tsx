import { MainHeading } from "@/pages/components/common";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { onboardingExpertsInitialValues } from "@/utils/initial-values";
import FileUpload from "@/components/ui/fileupload";
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

function ExpertsOnboardingPage() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors},
  } = useForm({
    defaultValues: onboardingExpertsInitialValues,
    resolver: yupResolver(onboardingExpertsSchema),

  });

  const onSubmitHandler = async (
    values: typeof onboardingExpertsInitialValues
  ) => console.log(values);

  const commonProps = {
    control,
    errors,
    register,
  };
  return (
    <div className="bg-background rounded-lg px-2 lg:px-10 py-6 flex flex-col gap-8">
      <MainHeading
        heading="Lets create your expert profile"
        paragraph="Please tell us about your expertise to help us set up your profile message. It will help innovators learn about your expertise and experience."
      />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex flex-col lg:flex-row items-start">
          <FileUpload />
          <div className="divide divide-y divide-border w-full flex flex-col gap-5 items-end">
            <PersonalInfo {...commonProps} />
            <ProfessionalInfo {...commonProps} />
            <CommunityServiceOffer {...commonProps} />
            <ProjectPreference {...commonProps} />
            <Rate {...commonProps} />
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ExpertsOnboardingPage;
