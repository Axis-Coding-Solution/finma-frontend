import { Label } from "@/components/ui/label";
import { SectionHeading } from "../../common";
import { Input } from "@/components/ui/input";
import { InputError } from "@/components/ui/input-error";
import { Controller } from "react-hook-form";
import { DatePicker } from "@/components/ui/date-picker";
import { cityOptions, countryOptions } from "@/data/dashboard/innovators";
import { ReactSelect } from "@/components/ui/react-select";
import { ReactCreatableSelect } from "@/components/ui/creatable-select";

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
            render={({ field }) => (
              <ReactSelect {...field} options={countryOptions} />
            )}
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
            render={({ field }) => <ReactCreatableSelect {...field} />}
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
