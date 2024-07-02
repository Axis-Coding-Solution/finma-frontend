import React from "react";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "../../common";
import { InputError } from "@/components/ui/input-error";
import { Controller, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReactSelect } from "@/components/ui/react-select";
import {
  areaOfExpertise,
  currentEmploymentStatus,
} from "@/data/dashboard/experts";
import { careerBackgroundOptions } from "@/data/dashboard/innovators";

import { onboardingInnovatorsInitialValues } from "@/utils/initial-values";
import { useNavigate } from "react-router-dom";

export const ProfessionalInfo = () => {
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: onboardingInnovatorsInitialValues,
  });
  return (
    <div>
      <div className="">
        {/* <h4 className="text-success uppercase font-medium">
                Professional Information
              </h4> */}
        <SectionHeading heading="Professional Information" />

        <div className="grid grid-cols-1 gap-4 mt-4">
          <div>
            <Label htmlFor="professionalInfo.areaOfExpertise">
              Current employment status
            </Label>
            <Controller
              name="professionalInfo.currentEmploymentStatus"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(e) => field.onChange(e)}
                >
                  <SelectTrigger id="professionalInfo.currentEmploymentStatus">
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
            <InputError
              error={errors.professionalInfo?.currentEmploymentStatus}
            />
          </div>
          <div>
            <Label htmlFor="professionalInfo.careerBackground">
              Career background
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
            <Label htmlFor="professionalInfo.skills">Skills</Label>
            <Controller
              name="professionalInfo.skills"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(e) => field.onChange(e)}
                >
                  <SelectTrigger id="professionalInfo.skills">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {areaOfExpertise.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            ></Controller>
            <InputError error={errors.professionalInfo?.skills} />
          </div>
        </div>
      </div>
    </div>
  );
};
