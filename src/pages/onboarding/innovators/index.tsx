import { MainHeading } from "@/pages/components/common";

import { Button } from "@/components/ui/button";
import { onboardingInnovatorsInitialValues } from "@/utils/initial-values";

import FileUpload from "@/components/ui/fileupload";
import {
  CommunityInfo,
  ProfessionalInfo,
} from "@/pages/components/onboarding/innovators";
import {
  EntrepreneurialInfo,
  PersonalInfo,
} from "@/pages/components/onboarding/common";
import { useForm } from "react-hook-form";
import { InnovatorsOnboardingValuesType } from "@/definitions/types/onboarding";
import { onboardingInnovatorsSchema } from "@/utils/validation-schemas/onboarding";
import { yupResolver } from "@hookform/resolvers/yup";
import { useOnboardingInnovatorsMutation } from "@/api/hooks/onboarding";
import { errorToast, successToast } from "@/utils";
import { useNavigate } from "react-router-dom";

function InnovatorsOnboardingPage() {
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: onboardingInnovatorsInitialValues,
    resolver: yupResolver(onboardingInnovatorsSchema as any),
  });
  console.log("🚀 ~ InnovatorsOnboardingPage ~ errors:", errors)

  const { mutateAsync } = useOnboardingInnovatorsMutation();

  const onSubmitHandler = async (values: InnovatorsOnboardingValuesType) => {
    try {
      const response = await mutateAsync(values);
      successToast(response.message);
      navigate("/dashboard/overview", {
        replace: true,
      });
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  const commonProps = {
    control,
    register,
    errors,
  };

  return (
    <div className="bg-background rounded-lg px-2 lg:px-10 py-6 flex flex-col gap-8">
      <MainHeading
        heading="Lets create your innovator profile"
        paragraph="Please tell us about your expertise to help us set up your profile message. It will help innovators learn about your expertise and experience."
      />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex  flex-col lg:flex-row items-start">
          <FileUpload />
          <div className="divide divide-y divide-border w-full flex flex-col items-end gap-5">
            <PersonalInfo {...commonProps} />
            <ProfessionalInfo {...commonProps} />
            <CommunityInfo {...commonProps} />
            <EntrepreneurialInfo {...commonProps} />
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default InnovatorsOnboardingPage;
