import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { InputError } from "@/components/ui/input-error";
import { compensationOptions } from "@/data/dashboard/experts";
import { SectionHeading } from "../../common";
import { ExpertsOnboardingPropTypes } from "@/definitions/types/onboarding";

export const Rate = ({
  control,
  errors,
  register,
}: ExpertsOnboardingPropTypes) => {
  return (
    <div className="w-full pt-5 flex flex-col gap-4">
      <SectionHeading heading="Rate" />
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="w-full">
            <Label htmlFor="rate.contractualPref">
              Contractual preference{" "}
            </Label>
            <Controller
              name="rate.contractualPref"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(e) => field.onChange(e)}
                >
                  <SelectTrigger id="rate.contractualPref">
                    <SelectValue />
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
            <InputError error={errors.rate?.contractualPref} />
          </div>
          <div className="w-full">
            <Label htmlFor="rate.currency">Currency</Label>
            <Controller
              name="rate.currency"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(e) => field.onChange(e)}
                >
                  <SelectTrigger id="rate.currency">
                    <SelectValue />
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
            <InputError error={errors.rate?.currency} />
          </div>
        </div>

        <div className=" w-full flex flex-col lg:flex-row gap-3 ">
          <div>
            <Label htmlFor="rate.hourlyRate">Hourly Rate</Label>
            <Input
              type="text"
              id="rate.hourlyRate"
              {...register("rate.hourlyRate")}
            />
            <InputError error={errors.rate?.hourlyRate} />
          </div>
          <div>
            <Label htmlFor="rate.monthlyRate">Monthly Rate</Label>
            <Input
              type="text"
              id="rate.monthlyRate"
              {...register("rate.monthlyRate")}
            />
            <InputError error={errors.rate?.monthlyRate} />
          </div>
          <div>
            <Label htmlFor="rate.projStartingPrice">
              Project starting price
            </Label>
            <Input
              type="text"
              id="rate.projStartingPrice"
              {...register("rate.projStartingPrice")}
            />
            <InputError error={errors.rate?.projStartingPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};
