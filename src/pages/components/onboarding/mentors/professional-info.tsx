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
import { MentorsOnboardingPropTypes } from "@/definitions/types/onboarding";
import { InputError } from "@/components/ui/input-error";
import { ReactCreatableSelect } from "@/components/ui/creatable-select";
import { Controller } from "react-hook-form";

export const MentorsProfessionalInfo = ({
  control,
  register,
  errors,
}: MentorsOnboardingPropTypes) => {
  return (
    <div className="w-full pt-5 flex flex-col gap-4">
      <SectionHeading heading="Professional Information" />
      <div>
        <Label htmlFor="mentors-prof-info-job-title">
          Job title (This will appear on your community card)
        </Label>
        <Input
          id="mentors-prof-info-job-title"
          type="text"
          placeholder="Enter your job title..."
          {...register("professionalInfo.jobTitle")}
        />
        <InputError error={errors.professionalInfo?.jobTitle} />
      </div>
      <div>
        <Label htmlFor="mentors-prof-info-company-name">
          Company name (This will appear on your community card)
        </Label>
        <Input
          id="mentors-prof-info-company-name"
          type="text"
          placeholder="Enter your company name..."
          {...register("professionalInfo.companyName")}
        />
        <InputError error={errors.professionalInfo?.companyName} />
      </div>
      <div>
        <Label htmlFor="mentors-prof-info-industry">Industry</Label>
        <Controller
          name="professionalInfo.industry"
          control={control}
          render={({ field }) => (
            <ReactCreatableSelect options={mentorsIndustryOptions} {...field} />
          )}
        />
        <InputError error={errors.professionalInfo?.industry} />
        {/* <Select>
          <SelectTrigger id="mentors-prof-info-industry">
            <SelectValue placeholder="Select Industry" />
          </SelectTrigger>
          <SelectContent>
            {mentorsIndustryOptions.map((industry) => (
              <SelectItem value={industry.value}>{industry.label}</SelectItem>
            ))}
          </SelectContent>
        </Select> */}
      </div>
    </div>
  );
};
