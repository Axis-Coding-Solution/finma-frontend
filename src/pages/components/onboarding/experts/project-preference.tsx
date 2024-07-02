
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";
import { onboardingExpertsInitialValues } from "@/utils/initial-values";
import {
  compensationOptions,
} from "@/data/dashboard/experts";
import { InputError } from "@/components/ui/input-error";

export const ProjectPreference = () => {
  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: onboardingExpertsInitialValues,

    // resolver: yupResolver(onboardingExpertsSchema),
  });
  return (
    <div>
      <div className="">
        <h4 className="text-success uppercase font-medium">
          Project Preferences{" "}
        </h4>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div>
            <Label htmlFor="projectPreference.workCompensationsOptions">
              Work compensation options{" "}
            </Label>
            <Controller
              name="projectPreference.workCompensationsOptions"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(e) => field.onChange(e)}
                >
                  <SelectTrigger id="projectPreference.workCompensationsOptions">
                    <SelectValue  />
                  </SelectTrigger>
                  <SelectContent>
                    {compensationOptions.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            ></Controller>
            <InputError error={errors.projectPreference?.workCompensationsOptions}
            />
          </div>
          <div>
            <Label htmlFor="projectPreference.projectSelectionCriteria">
              Project selection criteria
            </Label>
            <Controller
              name="projectPreference.projectSelectionCriteria"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(e) => field.onChange(e)}
                >
                  <SelectTrigger id="projectPreference.projectSelectionCriteria">
                    <SelectValue  />
                  </SelectTrigger>
                  <SelectContent>
                    {compensationOptions.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            ></Controller>
            <InputError
              error={errors.projectPreference?.projectSelectionCriteria}
            />
          </div>
          <div>
            <Label htmlFor="projectPreference.projectIntakeSteps">
              Project intake steps
            </Label>
            <Controller
              name="projectPreference.projectIntakeSteps"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(e) => field.onChange(e)}
                >
                  <SelectTrigger id="projectPreference.projectIntakeSteps">
                    <SelectValue  />
                  </SelectTrigger>
                  <SelectContent>
                    {compensationOptions.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            ></Controller>
            <InputError error={errors.projectPreference?.projectIntakeSteps} />
          </div>
        </div>
      </div>
    </div>
  );
};
