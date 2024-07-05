import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import { InputError } from "@/components/ui/input-error";
import { SectionHeading } from "../../common";
import { ExpertsOnboardingPropTypes } from "@/definitions/types/onboarding";
import { ReactCreatableSelect } from "@/components/ui/creatable-select";
import {
  projectIntakeStepsOptions,
  projectSelectionCriteriaOptions,
  workCompensationOptions,
} from "@/data/onboarding";

export const ProjectPreference = ({
  control,
  errors,
}: ExpertsOnboardingPropTypes) => {
  return (
    <div className="w-full pt-5 flex flex-col gap-4">
      <SectionHeading heading="Project Preferences" />
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label htmlFor="projectPreferences.compensationOptions">
            Work compensation options
          </Label>
          <Controller
            name="projectPreferences.compensationOptions"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect
                options={workCompensationOptions}
                {...field}
              />
            )}
          ></Controller>
          <InputError error={errors.projectPreferences?.compensationOptions} />
        </div>
        <div>
          <Label htmlFor="projectPreferences.projSelectionCriteria">
            Project selection criteria
          </Label>
          <Controller
            name="projectPreferences.projSelectionCriteria"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect
                options={projectSelectionCriteriaOptions}
                {...field}
              />
            )}
          ></Controller>
          <InputError
            error={errors.projectPreferences?.projSelectionCriteria}
          />
        </div>
        <div>
          <Label htmlFor="projectPreferences.projIntakeSteps">
            Project intake steps
          </Label>
          <Controller
            name="projectPreferences.projIntakeSteps"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect
                isMulti
                options={projectIntakeStepsOptions}
                {...field}
              />
            )}
          ></Controller>
          <InputError error={errors.projectPreferences?.projIntakeSteps} />
        </div>
      </div>
    </div>
  );
};
