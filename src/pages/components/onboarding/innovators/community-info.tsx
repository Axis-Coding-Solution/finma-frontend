import {
  communityGoals,
  communityGoalsOptions,
  startUpFounder,
} from "@/data/dashboard/innovators";

import { SectionHeading } from "@/pages/components/common";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { onboardingInnovatorsInitialValues } from "@/utils/initial-values";
import { InputError } from "@/components/ui/input-error";
import { useNavigate } from "react-router-dom";
import { ReactSelect } from "@/components/ui/react-select";

export const CommunityInfo = () => {
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
    <div className="w-full pt-5 flex flex-col gap-4">
      <SectionHeading heading="COMMUNITY INFORMATION" />
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label htmlFor="communityInfo.entrepStage">
            What best describes your entrepreneurial stage?
          </Label>
          <Controller
            name="communityInfo.entrepStage"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(e) => field.onChange(e)}
              >
                <SelectTrigger id="communityInfo.entrepStage">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {startUpFounder.map((item) => (
                    <SelectItem key={item.heading} value={item.heading}>
                      <div className="flex flex-col">
                        <div className="font-bold">{item.heading}</div>
                        <div>{item.subheading}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          ></Controller>
          <InputError
            error={errors.communityInfo?.entrepStage}
          />
        </div>

        <div>
          <Label htmlFor="communityInfo.communityGoals">
            My community goals are
          </Label>
          <Controller
            name="communityInfo.communityGoals"
            control={control}
            render={({ field }) => (
              // <Select
              //   value={field.value}
              //   onValueChange={(e) => field.onChange(e)}
              // >
              //   <SelectTrigger id="communityInfo.communityGoals">
              //     <SelectValue />
              //   </SelectTrigger>
              //   <SelectContent>
              //     {communityGoals.map((item) => (
              //       <SelectItem key={item.label} value={item.label}>
              //         {item.checkbox} {item.label}
              //       </SelectItem>
              //     ))}
              //   </SelectContent>
              // </Select>

              <ReactSelect
                {...field}
                isMulti
                options={communityGoalsOptions}
                isClearable
              />
            )}
          ></Controller>
          <InputError error={errors.communityInfo?.communityGoals} />
        </div>

        <div>
          <Label htmlFor="communityInfo.personalBio">
            Personal bio (150 character only){" "}
          </Label>
          <Input
            type="text"
            id="communityInfo.personalBio"
            {...register("communityInfo.personalBio")}
            // placeholder="Enter first name"
          />
          <InputError error={errors.communityInfo?.personalBio} />
        </div>
        <div>
          <Label htmlFor="communityInfo.dedicatedHoursPerWeek">
            How many hours per weeks can you dedicate to your venture(s)?
          </Label>
          <Input
            type="text"
            id="communityInfo.dedicatedHoursPerWeek"
            {...register("communityInfo.dedicatedHoursPerWeek")}
          />
          <InputError
            error={errors.communityInfo?.dedicatedHoursPerWeek}
          />
        </div>
      </div>
    </div>
  );
};
