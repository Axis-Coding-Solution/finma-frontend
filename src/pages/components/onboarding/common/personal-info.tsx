import { Label } from "@/components/ui/label";
import { SectionHeading } from "../../common";
import { Input } from "@/components/ui/input";
import { InputError } from "@/components/ui/input-error";
import { Controller, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import {
  cityOptions,
  countryOptions,
  genderStatus,
} from "@/data/dashboard/innovators";
import { onboardingInnovatorsInitialValues } from "@/utils/initial-values";
import { ReactSelect } from "@/components/ui/react-select";

export const PersonalInfo = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: onboardingInnovatorsInitialValues,
  });
  return (
    <div>
      {/* Personal Information  */}
      <div className="mt-6">
        <SectionHeading heading="PERSONAL INFORMATION" />

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <div>
            <Label htmlFor="personalInfo.firstName">
              First Name <span className="text-destructive">*</span>
            </Label>
            <Input
              type="text"
              id="personalInfo.firstName"
              {...register("personalInfo.firstName")}
            />
            <InputError error={errors.personalInfo?.firstName} />
          </div>
          <div>
            <Label htmlFor="personalInfo.lastName">
              Last Name <span className="text-destructive">*</span>
            </Label>
            <Input
              type="text"
              id="personalInfo.lastName"
              {...register("personalInfo.lastName")}
            />
            <InputError error={errors.personalInfo?.lastName} />
          </div>
          <div>
            <Label htmlFor="personalInfo.country">
              Country <span className="text-destructive">*</span>
            </Label>
            <Controller
              name="personalInfo.country"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  options={countryOptions}
                  onChange={(value) => field.onChange(value)}
                  value={field.value}
                />
              )}
            />
            <InputError error={errors.personalInfo?.country} />
          </div>

          <div>
            <Label htmlFor="personalInfo.city">
              City <span className="text-destructive">*</span>
            </Label>
            <Controller
              name="personalInfo.city"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  options={cityOptions}
                  onChange={(value) => field.onChange(value)}
                  value={field.value}
                />
              )}
            />
            <InputError error={errors.personalInfo?.city} />
          </div>

          <div>
            {" "}
            <Label htmlFor="personalInfo.dateOfBirth">
              Date of Birth <span className="text-destructive">*</span>
            </Label>
            <Controller
              name="personalInfo.dateOfBirth"
              control={control}
              render={({ field }) => (
                <DatePicker
                  showOutsideDays={false}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                />
              )}
            />
          </div>

          <div className="w-full">
            <Label htmlFor="personalInfo.gender">
              Gender <span className="text-destructive">*</span>
            </Label>
            <Controller
              name="personalInfo.gender"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(e) => field.onChange(e)}
                >
                  <SelectTrigger id="personal-info-country">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {genderStatus.map((gender) => (
                      <SelectItem key={gender.value} value={gender.value}>
                        {gender.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="personalInfo.linkedInProfile">
            LinkedIn profile <span className="text-destructive">*</span>
          </Label>
          <Input
            type="text"
            id="personalInfo.linkedInProfile"
            {...register("personalInfo.linkedInProfile")}
          />
          <InputError error={errors.personalInfo?.linkedInProfile} />
        </div>
      </div>
    </div>
  );
};
