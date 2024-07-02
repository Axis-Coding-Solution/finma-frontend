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
          <Label htmlFor="professionalInfo.curEmpStatus">
            Current employment status<span className="text-destructive">*</span>
          </Label>
          <Controller
            name="professionalInfo.curEmpStatus"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(e) => field.onChange(e)}
              >
                <SelectTrigger id="professionalInfo.curEmpStatus">
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
          <InputError error={errors.professionalInfo?.curEmpStatus} />
        </div>
        <div>
          <Label htmlFor="professionalInfo.careerBackground">
            Career background<span className="text-destructive">*</span>
          </Label>
          <Controller
            name="professionalInfo.careerBackground"
            control={control}
            render={({ field }) => (
              // <Select
              //   value={field.value}
              //   onValueChange={(e) => field.onChange(e)}
              // >
              //   <SelectTrigger id="professionalInfo.careerBackground">
              //     <SelectValue />
              //   </SelectTrigger>
              //   <SelectContent>
              //     {careerBackground.map((item) => (
              //       <SelectItem key={item.label} value={item.label}>
              //         {item.checkbox} {item.label}
              //       </SelectItem>
              //     ))}
              //   </SelectContent>
              // </Select>
              <ReactSelect
                {...field}
                isMulti
                options={careerBackgroundOptions}
                isClearable
              />
            )}
          />
          <InputError error={errors.professionalInfo?.careerBackground} />
        </div>
        <div>
          <Label htmlFor="professionalInfo.skills">Skills
          <span className="text-destructive">*</span>
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
