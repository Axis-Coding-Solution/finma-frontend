import { MainHeading } from "@/pages/components/common";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@/utils/constants";
import { onboardingExpertsInitialValues } from "@/utils/initial-values";
import { onboardingExpertsSchema } from "@/utils/validation-schemas/onboarding";
import { InputError } from "@/components/ui/input-error";
import { cities, countries } from "@/data/dashboard/innovators";
import {
  areaOfExpertise,
  compensationOptions,
  currency,
  currentPosition,
  projectEngagementPreference,
  projectIntakeProcess,
  selectionProcess,
  whatICanDo,
} from "@/data/dashboard/experts";
import FileUpload from "@/components/ui/fileupload";
import { PersonalInfo } from "@/pages/components/onboarding/common";
// import ProfessionalInfo from "@/pages/components/onboarding/experts/professional-info";
import {
  CommunityServiceOffer,
  ProfessionalInfo,
  ProjectPreference,
  Rate,
} from "@/pages/components/onboarding/experts";
// import CommunityServiceOffer from "@/pages/components/onboarding/experts/community-service-offer";

function ExpertsOnboardingPage() {
  const selectDefault = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: onboardingExpertsInitialValues,

    // resolver: yupResolver(onboardingExpertsSchema),
  });
  const onSubmitHandler = async (
    values: typeof onboardingExpertsInitialValues
  ) => {
    console.log(values);
  };

  return (
    <div className="bg-background rounded-lg px-2 lg:px-10 py-6">
      <MainHeading
        heading="Lets create your expert profile"
        paragraph="Please tell us about your expertise to help us set up your profile message. It will help innovators learn about your expertise and experience."
      />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex   flex-col lg:flex-row items-start">
          {/* Upload Photo  */}

          <FileUpload />

          {/* Personal Information  */}
          <div>

          <PersonalInfo />
          <hr className="border-secondary my-4" />
          {/* Professional Information  */}

          <ProfessionalInfo />
          <hr className="border-secondary my-4" />
          {/* Community Service Offer  */}

          <CommunityServiceOffer />
          <hr className="border-secondary my-4" />
          {/* Project Preference */}
          <ProjectPreference />
          <hr className="border-secondary my-4" />
          {/* Rate  */}

          <Rate />

          <div className="flex justify-end mt-6">
            <Button type="submit">Save</Button>
          </div>
          <hr className="border-secondary my-4" />
          </div>
        </div>
      </form>
    </div>
  );
}
export default ExpertsOnboardingPage;
