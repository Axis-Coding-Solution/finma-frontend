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
import { Controller, useFieldArray } from "react-hook-form";
import { InputError } from "@/components/ui/input-error";
import { industry } from "@/data/dashboard/innovators";

import { InnovatorsOnboardingPropTypes } from "@/definitions/types/onboarding";
import { DatePicker } from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { startUpInitialValues } from "@/utils/initial-values";
import { ScrollArea } from "@/components/ui/scroll-area";

export const EntrepreneurialInfo = ({
  control,
  errors,
  register,
}: InnovatorsOnboardingPropTypes) => {
  const { fields, append, remove } = useFieldArray({
    keyName: "uid",
    control,
    name: "entrepTrackRecord.startUps",
  });

  return (
    <div className="pt-5 w-full flex flex-col gap-4">
      <SectionHeading heading="Your Entrepreneurial Track-Record" />
      <ScrollArea className="h-[600px]">
        <div className="p-3 flex flex-col gap-4 divide divide-y divide-border">
          {fields.map((field, index) => (
            <div className="pt-4 flex flex-col gap-4" key={field.uid}>
              {fields.length > 1 && (
                <div className="text-end">
                  <span
                    role="button"
                    title="Delete item"
                    onClick={() => remove(index)}
                    className="inline-block text-destructive hover:bg-destructive/10 p-2 rounded"
                  >
                    <Trash2 size={20} />
                  </span>
                </div>
              )}
              <div className="flex gap-4">
                <div className="w-full">
                  <Label htmlFor="entrepTrackRecord.startUps.startUpName">
                    Name Of StartUp
                  </Label>

                  <div>
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
                  <Label
                    htmlFor={`entrepTrackRecord.startUps.${index}.industry`}
                  >
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
                    error={
                      errors.entrepTrackRecord?.startUps?.[index]?.industry
                    }
                  />
                </div>
              </div>

              <div className="w-full">
                <Label
                  htmlFor={`entrepTrackRecord.startUps.${index}.startUpAbout`}
                >
                  About the startup (120 letter max)
                </Label>
                <Input
                  type="text"
                  id={`entrepTrackRecord.startUps.${index}.startUpAbout`}
                  {...register(
                    `entrepTrackRecord.startUps.${index}.startUpAbout`
                  )}
                />
                <InputError
                  error={
                    errors.entrepTrackRecord?.startUps?.[index]?.startUpAbout
                  }
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
                  <Label
                    htmlFor={`entrepTrackRecord.startUps.${index}.webLink`}
                  >
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
                  <Label
                    htmlFor={`entrepTrackRecord.startUps.${index}.noOfEmp`}
                  >
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
                        <DatePicker
                          showOutsideDays={false}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          value={field.value}
                        />
                      )}
                    />
                    <Controller
                      name={`entrepTrackRecord.startUps.${index}.yearsOfOp.to`}
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
                        id={`entrepTrackRecord.startUps.${index}.lastYearRevenue.amount`}
                        {...register(
                          `entrepTrackRecord.startUps.${index}.lastYearRevenue.amount`
                        )}
                      />
                      <InputError
                        error={
                          errors.entrepTrackRecord?.startUps?.[index]
                            ?.lastYearRevenue?.amount
                        }
                      />

                      <Controller
                        name={`entrepTrackRecord.startUps.${index}.lastYearRevenue.currency`}
                        control={control}
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={(e) => field.onChange(e)}
                          >
                            <SelectTrigger
                              id={`entrepTrackRecord.startUps.${index}.lastYearRevenue`}
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
                    <Label htmlFor="entrepTrackRecord.startUps.fundRaised">
                      Fund raised
                    </Label>
                  </div>

                  <div>
                    <div className="flex gap-4">
                      <Input
                        type="text"
                        id="entrepTrackRecord.startUps.fundRaised"
                        {...register(
                          `entrepTrackRecord.startUps.${index}.fundRaised.amount`
                        )}
                      />
                      <InputError
                        error={
                          errors.entrepTrackRecord?.startUps?.[index]
                            ?.fundRaised?.amount
                        }
                      />

                      <Controller
                        name={`entrepTrackRecord.startUps.${index}.fundRaised.currency`}
                        control={control}
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={(e) => field.onChange(e)}
                          >
                            <SelectTrigger
                              id={`entrepTrackRecord.startUps.${index}.fundRaised.currency`}
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
            </div>
          ))}
        </div>
      </ScrollArea>
      {fields.length < 5 && (
        <div className="text-end">
          <Button
            type="button"
            variant="link"
            size="sm"
            className="font-normal"
            onClick={() => append(startUpInitialValues)}
          >
            <span>Add Startup</span>
            <Plus size={14} />
          </Button>
        </div>
      )}
    </div>
  );
};
