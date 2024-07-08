import { Label } from "@/components/ui/label";
import { SectionHeading } from "../../common";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MentorsOnboardingPropTypes } from "@/definitions/types/onboarding";
import { Controller } from "react-hook-form";
import { ReactCreatableSelect } from "@/components/ui/creatable-select";
import { InputError } from "@/components/ui/input-error";
import { MultiLevelSelect } from "@/components/ui/multi-level-select";
import { StartupModulesOptions, communityGoalsOptions } from "@/data/onboarding";

export const MentorsCommunityServiceOffer = ({
  control,
  register,
  errors,
}: MentorsOnboardingPropTypes) => {
  return (
    <div className="w-full pt-4 flex flex-col gap-4">
      <SectionHeading heading="community-service Information" />
      <div>
        <Label
          type="required"
          htmlFor="mentors-community-service-startup-dev-modules"
        >
          I am willing to support founders in these startup development modules
        </Label>
        <Controller
          name="communityServiceOffer.startUpDevModules"
          control={control}
          render={({ field }) => {
            return (
              <MultiLevelSelect options={StartupModulesOptions} {...field} />
            );
          }}
        />
        <InputError error={errors.communityServiceOffer?.startUpDevModules} />
      </div>
      <div>
        <Label type="required" htmlFor="mentors-community-service-goals">
          My community goals are
        </Label>
        <Controller
          name="communityServiceOffer.communityGoals"
          control={control}
          render={({ field }) => (
            <ReactCreatableSelect
              isMulti
              options={communityGoalsOptions}
              {...field}
            />
          )}
        />
        <InputError error={errors.communityServiceOffer?.communityGoals} />
      </div>
      <div>
        <Label htmlFor="mentors-community-service-hours-week">
          How many hours per weeks can you dedicate to mentoring?
        </Label>
        <Input
          id="mentors-community-service-hours-week"
          type="number"
          placeholder="Enter your hours of availability..."
          {...register("communityServiceOffer.hoursPerWeek")}
        />
        <InputError error={errors.communityServiceOffer?.hoursPerWeek} />
      </div>
      <div>
        <Label htmlFor="mentors-community-service-personal-bio">
          Personal bio (150 character only)
        </Label>
        <Textarea
          id="mentors-community-service-personal-bio"
          className="h-24"
          placeholder="Type your personal bio..."
          {...register("communityServiceOffer.personalBio")}
        />
        <InputError error={errors.communityServiceOffer?.personalBio} />
      </div>
    </div>
  );
};
