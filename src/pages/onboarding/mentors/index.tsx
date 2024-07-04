import { MainHeading } from "@/pages/components/common";
import {
  MentorsCommunityServiceOffer,
  MentorsProfessionalInfo,
} from "@/pages/components/onboarding/mentors";
import { FORM_MODE } from "@/utils/constants";
import { useForm } from "react-hook-form";
import InvestmentInterest from "@/pages/components/onboarding/mentors/investment-interest";
import { onboardingMentorsInitialValues } from "@/utils/initial-values";
import { MentorsOnboardingValuesType } from "@/definitions/types/onboarding";
import {
  EntrepreneurialInfo,
  PersonalInfo,
} from "@/pages/components/onboarding/common";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/ui/file-upload";

function MentorsOnboardingPage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: FORM_MODE,
    defaultValues: onboardingMentorsInitialValues,
  });

  const onSubmitHandler = (values: MentorsOnboardingValuesType) =>
    console.log("values: ", values);

  const commonProps = {
    register,
    control,
    errors,
  };
  return (
    <div className="bg-background rounded-lg px-2 lg:px-10 py-6 flex flex-col gap-8">
      <MainHeading
        heading="Lets create your mentor profile"
        paragraph="Please tell us about your expertise to help us set up your profile."
      />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="w-[25%]">
            <FileUpload register={register} errors={errors}/>
          </div>
          <div className="lg:w-8/12 divide divide-y divide-border w-full flex flex-col gap-5 items-end">
            <PersonalInfo {...commonProps} />
            <MentorsProfessionalInfo {...commonProps} />
            <MentorsCommunityServiceOffer {...commonProps} />
            <EntrepreneurialInfo {...commonProps} />
            <InvestmentInterest {...commonProps} />
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MentorsOnboardingPage;
