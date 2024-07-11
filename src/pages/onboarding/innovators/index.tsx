import { MainHeading } from "@/pages/components/common";
import { Button } from "@/components/ui/button";
import { onboardingInnovatorsInitialValues } from "@/utils/initial-values";
import FileUpload from "@/components/ui/file-upload";
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
import { useNavigate, useSearchParams } from "react-router-dom";
import { useOnboardingForm } from "@/store/hooks";
import { useEffect } from "react";
import { useAuth } from "@/utils/hooks";

function InnovatorsOnboardingPage() {
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    setValue,
    resetField,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: onboardingInnovatorsInitialValues,
    resolver: yupResolver(onboardingInnovatorsSchema as any),
  });

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
    if (role !== "innovator") navigate(`/onboarding/${role}s`, { replace: true });
  }, []);

  const onSubmitHandler = async (values: InnovatorsOnboardingValuesType) => {
    setFormData(values);
    navigate("/onboarding/terms-conditions?role=innovators");
  };

  const commonProps = {
    control,
    register,
    errors,
  };

  const country = watch("personalInfo.country");
  const image = watch("profilePicture");

  return (
    <div className="bg-background rounded-lg px-2 lg:px-10 py-6 flex flex-col gap-8">
      <MainHeading
        heading="Lets create your innovator profile"
        paragraph="Please tell us about your expertise to help us set up your profile message. It will help innovators learn about your expertise and experience."
      />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-[25%]">
            <FileUpload
              image={image}
              control={control}
              register={register}
              errors={errors}
            />
          </div>
          <div className=" w-full md:w-[50%] divide divide-y divide-border flex flex-col items-end gap-5">
            <PersonalInfo
              country={country}
              setValue={setValue}
              resetField={resetField}
              {...commonProps}
            />
            <ProfessionalInfo {...commonProps} />
            <CommunityInfo {...commonProps} />
            <EntrepreneurialInfo {...commonProps} />
            <Button type="submit">Next</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default InnovatorsOnboardingPage;
