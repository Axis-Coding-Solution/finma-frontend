import { SectionHeading } from "@/pages/components/common";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { onboardingInnovatorsInitialValues } from "@/utils/initial-values";
import { InputError } from "@/components/ui/input-error";
import { industry } from "@/data/dashboard/innovators";

import { DatePicker } from "@/components/ui/date-picker";
import { useNavigate } from "react-router-dom";

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

  const { fields } = useFieldArray({
    control,
    name: "entrepTrackRecord.startUps",
  });

  return (
    <div className="pt-5 w-full flex flex-col gap-4">
      <SectionHeading heading="Your Entrepreneurial Track-Record" />
      {fields.map((field, index) => (
        <>
          <div className="flex gap-4">
            <div className="w-full">
              <Label htmlFor="entrepTrackRecord.startUps.startUpName">
                Name Of StartUp
              </Label>

              <div key={field.id}>
                <Input
                  type="text"
                  {...register(
                    `entrepTrackRecord.startUps.${index}.startUpName`
                  )}
                />
                <InputError
                  error={
                    errors.entrepTrackRecord?.startUps?.[index]?.startUpName
                  }
                />
              </div>
            </div>

            <div className="w-full">
              <Label htmlFor={`entrepTrackRecord.startUps.${index}.industry`}>
                Industry
              </Label>
              <Controller
                name={`entrepTrackRecord.startUps.${index}.industry`}
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger
                      id={`entrepTrackRecord.startUps.${index}.industry`}
                    >
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
              <InputError
                error={errors.entrepTrackRecord?.startUps?.[index]?.industry}
              />
            </div>
          </div>

          <div className="w-full">
            <Label htmlFor={`entrepTrackRecord.startUps.${index}.startUpAbout`}>
              About the startup (120 letter max)
            </Label>
            <Input
              type="text"
              id={`entrepTrackRecord.startUps.${index}.startUpAbout`}
              {...register(`entrepTrackRecord.startUps.${index}.startUpAbout`)}
            />
            <InputError
              error={errors.entrepTrackRecord?.startUps?.[index]?.startUpAbout}
            />
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <Label htmlFor={`entrepTrackRecord.startUps.${index}.role`}>
                Your Role
              </Label>
              <Input
                type="text"
                id={`entrepTrackRecord.startUps.${index}.role`}
                {...register(`entrepTrackRecord.startUps.${index}.role`)}
              />
              <InputError
                error={errors.entrepTrackRecord?.startUps?.[index]?.role}
              />
            </div>
            <div className="w-full">
              <Label htmlFor={`entrepTrackRecord.startUps.${index}.webLink`}>
                Website link
              </Label>
              <Input
                type="text"
                id={`entrepTrackRecord.startUps.${index}.webLink`}
                {...register(`entrepTrackRecord.startUps.${index}.webLink`)}
              />
              <InputError
                error={errors.entrepTrackRecord?.startUps?.[index]?.webLink}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-[60%] ">
              <Label htmlFor={`entrepTrackRecord.startUps.${index}.noOfEmp`}>
                Number of employees
              </Label>
              <Input
                type="text"
                id={`entrepTrackRecord.startUps.${index}.noOfEmp`}
                {...register(`entrepTrackRecord.startUps.${index}.noOfEmp`)}
              />
              <InputError
                error={errors.entrepTrackRecord?.startUps?.[index]?.noOfEmp}
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
                  name={`entrepTrackRecord.startUps.${index}.yearsOfOp.from`}
                  control={control}
                  render={({ field }) => (
                    // <DatePicker
                    //   showOutsideDays={false}
                    //   onChange={field.onChange}
                    //   onBlur={field.onBlur}
                    //   value={field.value}
                    // />
                    <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger
                      id={`entrepTrackRecord.startUps.${index}.yearsOfOp.from`}
                    >
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
                />
                <Controller
                  name={`entrepTrackRecord.startUps.${index}.yearsOfOp.to`}
                  control={control}
                  render={({ field }) => (
                    // <DatePicker
                    //   showOutsideDays={false}
                    //   onChange={field.onChange}
                    //   onBlur={field.onBlur}
                    //   value={field.value}
                    // />
                    <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger
                      id={`entrepTrackRecord.startUps.${index}.yearsOfOp.to`}
                    >
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
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className=" flex flex-col gap-2 w-full">
              <div>
                <Label
                  htmlFor={`entrepTrackRecord.startUps.${index}.lastYearRevenue`}
                >
                  Last Year Revenue
                </Label>
              </div>

              <div>
                <div className="flex gap-4">
                  <Input
                    type="text"
                    id={`entrepTrackRecord.startUps.${index}.lastYearRevenue`}
                    {...register(
                      `entrepTrackRecord.startUps.${index}.lastYearRevenue`
                    )}
                  />
                  <InputError
                    error={
                      errors.entrepTrackRecord?.startUps?.[index]
                        ?.lastYearRevenue
                    }
                  />

                  <Controller
                    name={`entrepTrackRecord.startUps.${index}.fundRaised`}
                    control={control}
                    render={({ field }) => (
                      // <DatePicker
                      //   showOutsideDays={false}
                      //   onChange={field.onChange}
                      //   onBlur={field.onBlur}
                      //   value={field.value}
                      // />


                      <Select
                      value={field.value}
                      onValueChange={(e) => field.onChange(e)}
                    >
                      <SelectTrigger
                        id={`entrepTrackRecord.startUps.${index}.yearsOfOp.fundRaised`}
                      >
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
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div>
                <Label htmlFor="entrepTrackRecord.startUps.lastYearRevenue">
                  Fund raised
                </Label>
              </div>

              <div>
                <div className="flex gap-4">
                  <Input
                    type="text"
                    id="entrepTrackRecord.startUps.lastYearRevenue"
                    {...register("entrepTrackRecord.startUps.lastYearRevenue")}
                  />
                  <InputError
                    error={errors.entrepTrackRecord.startUps?.lastYearRevenue}
                  />

                  <Controller
                    name="entrepTrackRecord.startUps.yearsOfOperations"
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
            <Label
              htmlFor={`entrepTrackRecord.startUps.${index}.accomplishment`}
            >
              Accomplishment
            </Label>
            <Input
              type="text"
              id={`entrepTrackRecord.startUps.${index}.accomplishment`}
              {...register(
                `entrepTrackRecord.startUps.${index}.accomplishment`
              )}
            />
            <InputError
              error={
                errors.entrepTrackRecord?.startUps?.[index]?.accomplishment
              }
            />
          </div>
          <div className="w-full">
            <Label
              htmlFor={`entrepTrackRecord.startUps.${index}.companyLinkedIn`}
            >
              Company LinkedIn
            </Label>
            <Input
              type="text"
              id={`entrepTrackRecord.startUps.${index}.companyLinkedIn`}
              {...register(
                `entrepTrackRecord.startUps.${index}.companyLinkedIn`
              )}
              placeholder="https://www.linkedin.com/"
            />
            <InputError
              error={
                errors.entrepTrackRecord?.startUps?.[index]?.companyLinkedIn
              }
            />
          </div>
        </>
      ))}
    </div>
  );
};
