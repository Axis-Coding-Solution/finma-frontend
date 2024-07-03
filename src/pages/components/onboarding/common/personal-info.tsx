import { Label } from "@/components/ui/label";
import { SectionHeading } from "../../common";
import { Input } from "@/components/ui/input";
import { InputError } from "@/components/ui/input-error";
import { Controller } from "react-hook-form";
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
import { ReactSelect } from "@/components/ui/react-select";

export const PersonalInfo = ({ control, errors, register }: any) => {
  return (
    <div className="w-full pt-5 flex flex-col gap-4">
      <SectionHeading heading="PERSONAL INFORMATION" />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <Label
            type="required"
            title="First Name"
            htmlFor="personalInfo.firstName"
          >
            First Name
          </Label>
          <Input
            type="text"
            id="personalInfo.firstName"
            {...register("personalInfo.firstName")}
          />
          <InputError error={errors.personalInfo?.firstName} />
        </div>
        <div>
          <Label type="required" htmlFor="personalInfo.lastName">
            Last Name
          </Label>
          <Input
            type="text"
            id="personalInfo.lastName"
            {...register("personalInfo.lastName")}
          />
          <InputError error={errors.personalInfo?.lastName} />
        </div>
        <div>
          <Label type="required" htmlFor="personalInfo.country">
            Country
          </Label>
          <Controller
            name="personalInfo.country"
            control={control}
            render={({ field }) => {
              console.log(field);
              return <ReactSelect {...field} options={countryOptions} />;
            }}
          />
          <InputError error={errors.personalInfo?.country} />
        </div>

        <div>
          <Label type="required" htmlFor="personalInfo.city">
            City
          </Label>
          <Controller
            name="personalInfo.city"
            control={control}
            render={({ field }) => (
              <ReactSelect {...field} options={cityOptions} />
            )}
          />
          <InputError error={errors.personalInfo?.city} />
        </div>

        <div>
          <Label type="required" htmlFor="personalInfo.dateOfBirth">
            Date of Birth
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
          <InputError error={errors.personalInfo?.dateOfBirth} />
        </div>

        <div className="w-full">
          <Label type="required" htmlFor="personalInfo.gender">
            Gender
          </Label>
          <Controller
            name="personalInfo.gender"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(e) => field.onChange(e)}
              >
                <SelectTrigger id="personalInfo.gender">
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
          <InputError error={errors.personalInfo?.gender} />
        </div>
      </div>
      <div>
        <Label type="required" htmlFor="personalInfo.linkedInProfile">
          LinkedIn profile
        </Label>
        <Input
          type="text"
          id="personalInfo.linkedInProfile"
          {...register("personalInfo.linkedInProfile")}
        />
        <InputError error={errors.personalInfo?.linkedInProfile} />
      </div>
    </div>
  );
};
