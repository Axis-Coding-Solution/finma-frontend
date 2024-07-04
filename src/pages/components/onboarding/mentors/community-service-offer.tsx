import { Label } from "@/components/ui/label";
import { SectionHeading } from "../../common";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mentorsIndustryOptions } from "@/data/dashboard/mentors";
import { Textarea } from "@/components/ui/textarea";
import { MentorsOnboardingPropTypes } from "@/definitions/types/onboarding";
import { Controller } from "react-hook-form";
import { ReactCreatableSelect } from "@/components/ui/creatable-select";
import { InputError } from "@/components/ui/input-error";

export const MentorsCommunityServiceOffer = ({
  control,
  register,
  errors,
}: MentorsOnboardingPropTypes) => {
  return (
    <div className="w-full pt-4 flex flex-col gap-4">
      <SectionHeading heading="community-service Information" />
      <div>
        <Label htmlFor="mentors-community-service-startup-dev-modules">
          I am willing to support founders in these startup development modules
        </Label>
        <Controller
          name="communityServiceOffer.startUpDerModules"
          control={control}
          render={({ field }) => (
            <ReactCreatableSelect options={mentorsIndustryOptions} {...field} />
          )}
        />
        <InputError error={errors.communityServiceOffer?.startUpDerModules} />
        {/* <Select>
          <SelectTrigger id="mentors-community-service-startup-dev-modules">
            <SelectValue placeholder="Select startup development modules" />
          </SelectTrigger>
          <SelectContent>
            {mentorsIndustryOptions.map((industry) => (
              <SelectItem value={industry.value}>{industry.label}</SelectItem>
            ))}
          </SelectContent>
        </Select> */}
      </div>
      <div>
        <Label htmlFor="mentors-community-service-goals">
          My community goals are
        </Label>
        <Controller
          name="communityServiceOffer.communityGoals"
          control={control}
          render={({ field }) => (
            <ReactCreatableSelect options={mentorsIndustryOptions} {...field} />
          )}
        />
        <InputError error={errors.communityServiceOffer?.communityGoals} />
        {/* <Select>
          <SelectTrigger id="mentors-community-service-goals">
            <SelectValue placeholder="Select Community Goals" />
          </SelectTrigger>
          <SelectContent>
            {mentorsIndustryOptions.map((industry) => (
              <SelectItem value={industry.value}>{industry.label}</SelectItem>
            ))}
          </SelectContent>
        </Select> */}
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
