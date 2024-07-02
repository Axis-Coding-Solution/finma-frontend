import { communityGoals, startUpFounder } from "@/data/dashboard/innovators";

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
import { Controller, useForm } from "react-hook-form";
import { onboardingInnovatorsInitialValues } from "@/utils/initial-values";
import { InputError } from "@/components/ui/input-error";
import { useNavigate } from "react-router-dom";

export const CommunityInfo = () => {
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
    <div>
      <div className="">
        <SectionHeading heading="COMMUNITY INFORMATION" />

        <div className="grid grid-cols-1 gap-4 mt-4">
          <div>
            <Label htmlFor="communityInformation.entrepreneurialStage">
              What best describes your entrepreneurial stage?
            </Label>
            <Controller
              name="communityInformation.entrepreneurialStage"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(e) => field.onChange(e)}
                >
                  <SelectTrigger id="communityInformation.entrepreneurialStage">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {startUpFounder.map((item) => (
                      <SelectItem key={item.heading} value={item.heading}>
                        <div className="flex flex-col">
                          <div className="font-bold">{item.heading}</div>
                          <div>{item.subheading}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            ></Controller>
            <InputError
              error={errors.communityInformation?.entrepreneurialStage}
            />
          </div>

          <div>
            <Label htmlFor="communityInformation.communityGoals">
              My community goals are
            </Label>
            <Controller
              name="communityInformation.communityGoals"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(e) => field.onChange(e)}
                >
                  <SelectTrigger id="communityInformation.communityGoals">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {communityGoals.map((item) => (
                      <SelectItem key={item.label} value={item.label}>
                        {item.checkbox} {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            ></Controller>
            <InputError error={errors.communityInformation?.communityGoals} />
          </div>

          <div>
            <Label htmlFor="communityInformation.personalBio">
              Personal bio (150 character only){" "}
            </Label>
            <Input
              type="text"
              id="communityInformation.personalBio"
              {...register("communityInformation.personalBio")}
              // placeholder="Enter first name"
            />
            <InputError error={errors.communityInformation?.personalBio} />
          </div>
          <div>
            <Label htmlFor="communityInformation.dedicateToYourVenture">
              How many hours per weeks can you dedicate to your venture(s)?
            </Label>
            <Input
              type="text"
              id="communityInformation.dedicateToYourVenture"
              {...register("communityInformation.dedicateToYourVenture")}
            />
            <InputError
              error={errors.communityInformation?.dedicateToYourVenture}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
