import { FloatingInput, InputError } from "@/components/ui";
import { MainHeading, UploadProfilePhoto } from "@/pages/components/common";
import { FORM_MODE } from "@/utils/constants";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

const ProfilePage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: FORM_MODE,
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      entrepreneurType: "",
      communityGoals: [],
    },
  });

  const role = searchParams.get("role");

  useEffect(() => {
    if (!role)
      navigate(
        "/onboarding/select-role?infoMessage=Continue by selecting role!",
        { replace: true }
      );
  }, [role]);

  const onSubmitHandler = (values: any) => {
    console.log(values);
  };

  return (
    <div className="w-[1084px] bg-secondary rounded-lg p-7">
      <div className="min-w-[532px] bg-background rounded 2xl:p-[52px] p-10  flex flex-col 2xl:gap-[52px] gap-10 relative overflow-hidden">
        <MainHeading
          title="Let's create your profile"
          subtitle="Enter your personal information"
        />
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-2">
              <UploadProfilePhoto
                control={control}
                errors={errors}
                image={null}
                register={register}
                name="profilePhoto"
                text="Upload Phot"
              />
            </div>
            <div className="col-span-1">
              <FloatingInput label="First Name" />
              <InputError error={errors.firstName} />
            </div>
            <div className="col-span-1">
              <FloatingInput label="Last Name" />
              <InputError error={errors.lastName} />
            </div>
            <div className="col-span-1">
              <FloatingInput label="Country" />
              <InputError error={errors.country} />
            </div>
            <div className="col-span-1">
              <FloatingInput label="City" />
              <InputError error={errors.city} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
