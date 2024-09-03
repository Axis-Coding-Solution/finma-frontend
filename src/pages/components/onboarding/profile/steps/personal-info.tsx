import { FloatingInput, InputError } from "@/components/ui";
import { UploadProfilePhoto } from "@/pages/components/common";

export const OnboardingProfilePersonalInfoStep = ({
  control,
  errors,
  register,
}: any) => {
  return (
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
  );
};
