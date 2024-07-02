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
import { onboardingExpertsInitialValues } from "@/utils/initial-values";
import { InputError } from "@/components/ui/input-error";
import {
  areaOfExpertise,
} from "@/data/dashboard/experts";
export const ProfessionalInfo = () => {
  

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
          Professional Information
        </h4>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div>
            <Label htmlFor="professionalInfo.employmentType">
              Current employment status <span className="text-destructive">*</span>
            </Label>
            <Controller
              name="professionalInfo.employmentType"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(e) => field.onChange(e)}
                >
                  <SelectTrigger id="professionalInfo.employmentType">
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
            <InputError error={errors.professionalInfo?.employmentType} />
          </div>

          <div>
            <Label htmlFor="professionalInfo.jobTitle">
              Career background <span className="text-destructive">*</span>
            </Label>
            <Input
              type="text"
              id="professionalInfo.jobTitle"
              {...register("professionalInfo.jobTitle")}
              // placeholder="Enter first name"
            />
            <InputError error={errors.professionalInfo?.jobTitle} />
          </div>
          <div>
            <Label htmlFor="professionalInfo.skills">Skills <span className="text-destructive">*</span></Label>
            <Input
              type="text"
              id="professionalInfo.skills"
              {...register("professionalInfo.skills")}
              // placeholder="Enter first name"
            />
            <InputError error={errors.professionalInfo?.skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

