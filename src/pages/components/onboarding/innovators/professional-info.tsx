import { Label } from "@/components/ui/label";
import { SectionHeading } from "../../common";
import { InputError } from "@/components/ui/input-error";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReactSelect } from "@/components/ui/react-select";
import { currentEmploymentStatus } from "@/data/dashboard/experts";
import {
  careerBackgroundOptions,
  skillsOptions,
} from "@/data/dashboard/innovators";
import { ReactCreatableSelect } from "@/components/ui/creatable-select";
import { InnovatorsOnboardingPropTypes } from "@/definitions/types/onboarding";

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
              <Select
                value={field.value}
                onValueChange={(e) => field.onChange(e)}
              >
                <SelectTrigger id="professionalInfo.currEmpStatus">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currentEmploymentStatus.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
              <ReactSelect
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
