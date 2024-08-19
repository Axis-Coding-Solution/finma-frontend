import { Label } from "@/components/_ui/label";
import { SectionHeading } from "../../common";
import { InputError } from "@/components/_ui/input-error";
import { Controller } from "react-hook-form";
import { ReactCreatableSelect } from "@/components/_ui/creatable-select";
import { InnovatorsOnboardingPropTypes } from "@/definitions/types/onboarding";
import { careerBackgroundOptions, currentEmploymentStatusOptions, skillsOptions } from "@/data/onboarding";

export const ProfessionalInfo = ({
  control,
  errors,
}: InnovatorsOnboardingPropTypes) => {
  return (
    <div className="w-full pt-5 flex flex-col gap-4">
      <SectionHeading heading="Professional Information" />
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label type="required" htmlFor="professionalInfo.currEmpStatus">
            Current employment status
          </Label>
          <Controller
            name="professionalInfo.currEmpStatus"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect options={currentEmploymentStatusOptions} {...field} />
            )}
          ></Controller>
          <InputError error={errors.professionalInfo?.currEmpStatus} />
        </div>
        <div>
          <Label type="required" htmlFor="professionalInfo.careerBackground">
            Career background
          </Label>
          <Controller
            name="professionalInfo.careerBackground"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect
                {...field}
                isMulti
                options={careerBackgroundOptions}
              />
            )}
          />
          <InputError error={errors.professionalInfo?.careerBackground} />
        </div>
        <div>
          <Label type="required" htmlFor="professionalInfo.skills">
            Skills
          </Label>
          <Controller
            name="professionalInfo.skills"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect
                isMulti
                options={skillsOptions}
                {...field}
              />
            )}
          ></Controller>
          <InputError error={errors.professionalInfo?.skills} />
        </div>
      </div>
    </div>
  );
};
