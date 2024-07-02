import { MainHeading, SectionHeading } from "@/pages/components/common";

import { Button } from "@/components/ui/button";
import { onboardingInnovatorsInitialValues } from "@/utils/initial-values";

import FileUpload from "@/components/ui/fileupload";
import { useMutation } from "@tanstack/react-query";
import { errorToast, successToast } from "@/utils";
import { useNavigate } from "react-router-dom";
import {
  CommunityInfo,
  ProfessionalInfo,
} from "@/pages/components/onboarding/innovators";
import {
  EntrepreneurialInfo,
  PersonalInfo,
} from "@/pages/components/onboarding/common";
import { useForm } from "react-hook-form";

function InnovatorsOnboardingPage() {
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: onboardingInnovatorsInitialValues,
  });

  const mutation = useMutation({
    // mutationFn: startOnboardingInnovators,
  });

  const onSubmitHandler = async (
    values: typeof onboardingInnovatorsInitialValues
  ) => {
    try {
      const res = await mutation.mutateAsync(values);
      successToast(res.message);
      navigate("/dashboard/overview", {
        replace: true,
      });
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  return (
    <div className="bg-background rounded-lg px-2 lg:px-10 py-6 flex flex-col gap-8">
      <MainHeading
        heading="Lets create your innovator profile"
        paragraph="Please tell us about your expertise to help us set up your profile message. It will help innovators learn about your expertise and experience."
      />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex flex-col lg:flex-row items-start">
          <FileUpload />
          <div className="divide divide-y divide-border flex flex-col items-end gap-5">
            <PersonalInfo />
            <ProfessionalInfo />
            <CommunityInfo />
            <EntrepreneurialInfo />
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default InnovatorsOnboardingPage;
