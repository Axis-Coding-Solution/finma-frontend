import { MainHeading, SectionHeading } from "@/pages/components/common";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { onboardingInnovatorsInitialValues } from "@/utils/initial-values";
import { InputError } from "@/components/ui/input-error";
import {
  careerBackground,
  cities,
  communityGoals,
  countries,
  genderStatus,
  industry,
  startUpFounder,
} from "@/data/dashboard/innovators";
import {
  areaOfExpertise,
  currentEmploymentStatus,
} from "@/data/dashboard/experts";
import FileUpload from "@/components/ui/fileupload";
import { DatePicker } from "@/components/ui/date-picker";
import { useMutation } from "@tanstack/react-query";
import { errorToast, successToast } from "@/utils";
import { useNavigate } from "react-router-dom";
import {
  CommunityInfo,
  ProfessionalInfo,
} from "@/pages/components/onboarding/innovators";
export const EntrepreneurialInfo = () => {
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: onboardingInnovatorsInitialValues,
  });
  return (
    <div className="pt-5 w-full flex flex-col gap-4">
      <SectionHeading heading="Your Entrepreneurial Track-Record" />
      <div className="flex gap-4">
        <div className="w-full">
          <Label htmlFor="entrepreneurialTrackRecord.nameOfStratUp">
            Name Of StartUp
          </Label>
          <Input
            type="text"
            id="entrepreneurialTrackRecord.nameOfStratUp"
            {...register("entrepreneurialTrackRecord.nameOfStratUp")}
          />
          <InputError
            error={errors.entrepreneurialTrackRecord?.nameOfStratUp}
          />
        </div>

        <div className="w-full">
          <Label htmlFor="entrepreneurialTrackRecord.industry">Industry</Label>
          <Controller
            name="entrepreneurialTrackRecord.industry"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(e) => field.onChange(e)}
              >
                <SelectTrigger id="entrepreneurialTrackRecord.industry">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {industry.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          ></Controller>
          <InputError error={errors.entrepreneurialTrackRecord?.industry} />
        </div>
      </div>

      <div className="w-full">
        <Label htmlFor="entrepreneurialTrackRecord.aboutTheStartup">
          About the startup (120 letter max)
        </Label>
        <Input
          type="text"
          id="entrepreneurialTrackRecord.aboutTheStartup"
          {...register("entrepreneurialTrackRecord.aboutTheStartup")}
        />
        <InputError
          error={errors.entrepreneurialTrackRecord?.aboutTheStartup}
        />
      </div>

      <div className="flex gap-4">
        <div className="w-full">
          <Label htmlFor="entrepreneurialTrackRecord.yourRole">
            Your Role
          </Label>
          <Input
            type="text"
            id="entrepreneurialTrackRecord.yourRole"
            {...register("entrepreneurialTrackRecord.yourRole")}
          />
          <InputError error={errors.entrepreneurialTrackRecord?.yourRole} />
        </div>
        <div className="w-full">
          <Label htmlFor="  entrepreneurialTrackRecord.websiteLink">
            Website link
          </Label>
          <Input
            type="text"
            id="  entrepreneurialTrackRecord.websiteLink"
            {...register("entrepreneurialTrackRecord.websiteLink")}
          />
          <InputError error={errors.entrepreneurialTrackRecord?.websiteLink} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[60%] ">
          <Label htmlFor="  entrepreneurialTrackRecord.numberOfEmployee">
            Number of employees
          </Label>
          <Input
            type="text"
            id="  entrepreneurialTrackRecord.numberOfEmployee"
            {...register("entrepreneurialTrackRecord.numberOfEmployee")}
          />
          <InputError
            error={errors.entrepreneurialTrackRecord?.numberOfEmployee}
          />
        </div>

        <div className="flex flex-col w-full lg:w-[40%] ">
          <div>
            <Label htmlFor="yearsOfOperations">
              Years of operations (from-to)
            </Label>
          </div>

          <div className="flex gap-4">
            <Controller
              name="entrepreneurialTrackRecord.yearsOfOperations"
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
            <Controller
              name="entrepreneurialTrackRecord.yearsOfOperations"
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
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className=" flex flex-col gap-2 w-full">
          <div>
            <Label htmlFor="entrepreneurialTrackRecord.lastYearRevenue">
              Last Year Revenue
            </Label>
          </div>

          <div>
            <div className="flex gap-4">
              <Input
                type="text"
                id="entrepreneurialTrackRecord.lastYearRevenue"
                {...register("entrepreneurialTrackRecord.lastYearRevenue")}
              />
              <InputError
                error={errors.entrepreneurialTrackRecord?.lastYearRevenue}
              />

              <Controller
                name="entrepreneurialTrackRecord.yearsOfOperations"
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
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div>
            <Label htmlFor="entrepreneurialTrackRecord.lastYearRevenue">
              Last Year Revenue
            </Label>
          </div>

          <div>
            <div className="flex gap-4">
              <Input
                type="text"
                id="entrepreneurialTrackRecord.lastYearRevenue"
                {...register("entrepreneurialTrackRecord.lastYearRevenue")}
              />
              <InputError
                error={errors.entrepreneurialTrackRecord?.lastYearRevenue}
              />

              <Controller
                name="entrepreneurialTrackRecord.yearsOfOperations"
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
          </div>
        </div>
      </div>

      <div className="w-full">
        <Label htmlFor="entrepreneurialTrackRecord.accomplishment">
          Accomplishment
        </Label>
        <Input
          type="text"
          id="entrepreneurialTrackRecord.accomplishment"
          {...register("entrepreneurialTrackRecord.accomplishment")}
        />
        <InputError error={errors.entrepreneurialTrackRecord?.accomplishment} />
      </div>
      <div className="w-full">
        <Label htmlFor="entrepreneurialTrackRecord.companyLinkedIn">
          Company LinkedIn
        </Label>
        <Input
          type="text"
          id="entrepreneurialTrackRecord.companyLinkedIn"
          {...register("entrepreneurialTrackRecord.companyLinkedIn")}
          placeholder="https://www.linkedin.com/"
        />
        <InputError
          error={errors.entrepreneurialTrackRecord?.companyLinkedIn}
        />
      </div>
    </div>
  );
};
