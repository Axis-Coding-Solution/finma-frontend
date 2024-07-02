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

export const CommunityServiceOffer = () => {
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
          Community SERVICE OFFER{" "}
        </h4>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div>
            <Label htmlFor="communityServiceOffer.startUpDevelopmentModule">
              I can support innovators in these startup development modules{" "}
            </Label>
            <Controller
              name="communityServiceOffer.startUpDevelopmentModule"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(e) => field.onChange(e)}
                >
                  <SelectTrigger id="communityServiceOffer.startUpDevelopmentModule">
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
              error={errors.communityServiceOffer?.startUpDevelopmentModule}
            />
          </div>
          <div>
            <Label htmlFor="communityServiceOffer.communityGoals">
              My community goals are
            </Label>
            <Controller
              name="communityServiceOffer.communityGoals"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(e) => field.onChange(e)}
                >
                  <SelectTrigger id="communityServiceOffer.communityGoals">
                    <SelectValue placeholder="Select work compensation options" />
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
            <InputError error={errors.communityServiceOffer?.communityGoals} />
          </div>
          <div>
            <Label htmlFor="communityServiceOffer.personalBio">
            Personal bio (150 character only)            </Label>
            <Input
              type="text"
              id="CommunityServiceOffer.personalBio"
              {...register("communityServiceOffer.personalBio")}
              // placeholder="Enter first name"
            />
            <InputError error={errors.communityServiceOffer?.personalBio} />
          </div>
         
        </div>
      </div>
    </div>
  );
};

