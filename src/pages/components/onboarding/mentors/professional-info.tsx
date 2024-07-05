import { Label } from "@/components/ui/label";
import { SectionHeading } from "../../common";
import { Input } from "@/components/ui/input";
import { MentorsOnboardingPropTypes } from "@/definitions/types/onboarding";
import { InputError } from "@/components/ui/input-error";
import { ReactCreatableSelect } from "@/components/ui/creatable-select";
import { Controller } from "react-hook-form";
import { IndustryOptions } from "@/data/onboarding";

export const MentorsProfessionalInfo = ({
  control,
  register,
  errors,
}: MentorsOnboardingPropTypes) => {
  return (
    <div className="w-full pt-5 flex flex-col gap-4">
      <SectionHeading heading="Professional Information" />
      <div>
        <Label type="required" htmlFor="mentors-prof-info-job-title">
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
        <Label type="required" htmlFor="mentors-prof-info-company-name">
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
        <Label type="required" htmlFor="mentors-prof-info-industry">
          Industry
        </Label>
        <Controller
          name="professionalInfo.industry"
          control={control}
          render={({ field }) => (
            <ReactCreatableSelect options={IndustryOptions} {...field} />
          )}
        />
        <InputError error={errors.professionalInfo?.industry} />
      </div>
    </div>
  );
};
