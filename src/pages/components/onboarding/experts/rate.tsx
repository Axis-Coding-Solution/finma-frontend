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
  compensationOptions,
} from "@/data/dashboard/experts";

export const Rate = () => {
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
        <h4 className="text-success uppercase font-medium">Rate </h4>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div className="flex gap-3">
            <div className="w-full">
              <Label htmlFor="rate.contractualPreference">
                Contractual preference{" "}
              </Label>
              <Controller
                name="rate.contractualPreference"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger id="rate.contractualPreference">
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
              <InputError error={errors.rate?.contractualPreference} />
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
              <InputError error={errors.rate?.currency} />
            </div>
          </div>

          <div className="flex gap-3">
            <div>
              <Label htmlFor="rate.hourlyRate">Hourly Rate</Label>
              <Input
                type="text"
                id="rate.hourlyRate"
                {...register("rate.hourlyRate")}
                // placeholder="Enter first name"
              />
              <InputError error={errors.rate?.hourlyRate} />
            </div>
            <div>
              <Label htmlFor="rate.monthlyRate">Monthly Rate</Label>
              <Input
                type="text"
                id="rate.monthlyRate"
                {...register("rate.monthlyRate")}
                // placeholder="Enter first name"
              />
              <InputError error={errors.rate?.monthlyRate} />
            </div>
            <div>
              <Label htmlFor="rate.projectStartingPrice">
                Project starting price
              </Label>
              <Input
                type="text"
                id="rate.projectStartingPrice"
                {...register("rate.projectStartingPrice")}
                // placeholder="Enter first name"
              />
              <InputError error={errors.rate?.projectStartingPrice} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
