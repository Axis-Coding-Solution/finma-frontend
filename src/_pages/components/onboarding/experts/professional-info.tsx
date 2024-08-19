import { Label } from "@/components/_ui/label";

import { Input } from "@/components/_ui/input";
import { Controller } from "react-hook-form";
import { InputError } from "@/components/_ui/input-error";
import { SectionHeading } from "../../common";
import { ExpertsOnboardingPropTypes } from "@/definitions/types/onboarding";
import { ReactCreatableSelect } from "@/components/_ui/creatable-select";
import { currentEmploymentTypeOptions, skillsOptions } from "@/data/onboarding";
export const ProfessionalInfo = ({
  control,
  errors,
  register,
}: ExpertsOnboardingPropTypes) => {
  return (
    <div className="w-full pt-5 flex flex-col gap-4">
      <SectionHeading heading="Professional Information" />
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label type="required" htmlFor="professionalInfo.currEmpType">
            Current employment type
          </Label>
          <Controller
            name="professionalInfo.currEmpType"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect
                options={currentEmploymentTypeOptions}
                {...field}
              />
            )}
          ></Controller>
          <InputError error={errors.professionalInfo?.currEmpType} />
        </div>

        <div>
          <Label type="required" htmlFor="professionalInfo.currJobTitle">
            Current job title (This will appear on your community card)
          </Label>
          <Input
            type="text"
            id="professionalInfo.currJobTitle"
            {...register("professionalInfo.currJobTitle")}
          />
          <InputError error={errors.professionalInfo?.currJobTitle} />
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
                options={skillsOptions}
                isMulti
                {...field}
              />
            )}
          />
          <InputError error={errors.professionalInfo?.skills} />
        </div>
      </div>
      <div>
        <Label htmlFor="professionalInfo.companyName">
          Company name, if applicable (This will appear on your community card)
        </Label>
        <Input
          type="text"
          id="professionalInfo.companyName"
          {...register("professionalInfo.companyName")}
        />
        <InputError error={errors.professionalInfo?.companyName} />
      </div>
    </div>
  );
};
