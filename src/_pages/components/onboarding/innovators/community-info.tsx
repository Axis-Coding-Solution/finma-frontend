import { SectionHeading } from "@/pages/components/common";
import { Label } from "@/components/_ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/_ui/select";
import { Input } from "@/components/_ui/input";
import { Controller } from "react-hook-form";
import { InputError } from "@/components/_ui/input-error";
import { InnovatorsOnboardingPropTypes } from "@/definitions/types/onboarding";
import { Textarea } from "@/components/_ui/textarea";
import { ReactCreatableSelect } from "@/components/_ui/creatable-select";
import {
  communityGoalsOptions,
  entrepreneurialStageOptions,
} from "@/data/onboarding";

export const CommunityInfo = ({
  control,
  errors,
  register,
}: InnovatorsOnboardingPropTypes) => {
  return (
    <div className="w-full pt-5 flex flex-col gap-4">
      <SectionHeading heading="COMMUNITY INFORMATION" />
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label type="required" htmlFor="communityInfo.entrepStage">
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
                  {entrepreneurialStageOptions.map((item) => (
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
          <InputError error={errors.communityInfo?.entrepStage} />
        </div>

        <div>
          <Label type="required" htmlFor="communityInfo.communityGoals">
            My community goals are
          </Label>
          <Controller
            name="communityInfo.communityGoals"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect
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
          <Label htmlFor="communityInfo.dedicatedHoursPerWeek">
            How many hours per weeks can you dedicate to your venture(s)?
          </Label>
          <Input
            type="number"
            id="communityInfo.dedicatedHoursPerWeek"
            {...register("communityInfo.dedicatedHoursPerWeek")}
          />
          <InputError error={errors.communityInfo?.dedicatedHoursPerWeek} />
        </div>
        <div>
          <Label htmlFor="communityInfo.personalBio">
            Personal bio (150 character only)
          </Label>

          <Textarea
            {...register("communityInfo.personalBio")}
            id="communityInfo.personalBio"
          />
          <InputError error={errors.communityInfo?.personalBio} />
        </div>
      </div>
    </div>
  );
};
