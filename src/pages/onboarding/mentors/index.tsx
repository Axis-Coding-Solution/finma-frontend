import { MainHeading } from "@/pages/components/common";
import {
  MentorsCommunityServiceOffer,
  MentorsProfessionalInfo,
} from "@/pages/components/onboarding/mentors";
import {
  EntrepreneurialInfo,
  PersonalInfo,
} from "@/pages/components/onboarding/common";
import { FORM_MODE } from "@/utils/constants";
import { useForm } from "react-hook-form";
import InvestmentInterest from "@/pages/components/onboarding/mentors/investment-interest";

function MentorsOnboardingPage() {
  const { handleSubmit } = useForm({
    mode: FORM_MODE,
  });

  const onSubmitHandler = (values: unknown) => console.log("values: ", values);
  return (
    <div className="bg-background rounded-lg px-2 lg:px-10 py-6 flex flex-col gap-8">
      <MainHeading
        heading="Lets create your mentor profile"
        paragraph="Please tell us about your expertise to help us set up your profile."
      />
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col gap-5"
      >
        <PersonalInfo />
        <MentorsProfessionalInfo />
        <MentorsCommunityServiceOffer />
        <EntrepreneurialInfo />
        <InvestmentInterest/>
      </form>
    </div>
  );
}

export default MentorsOnboardingPage;
