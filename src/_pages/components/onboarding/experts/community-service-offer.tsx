import { Label } from "@/components/_ui/label";
import { Controller } from "react-hook-form";
import { InputError } from "@/components/_ui/input-error";
import { SectionHeading } from "../../common";
import { ExpertsOnboardingPropTypes } from "@/definitions/types/onboarding";
import { Textarea } from "@/components/_ui/textarea";
import { ReactCreatableSelect } from "@/components/_ui/creatable-select";
import { MultiLevelSelect } from "@/components/_ui/multi-level-select";
import { communityGoalsOptions, StartupModulesOptions } from "@/data/onboarding";

export const CommunityServiceOffer = ({
  control,
  errors,
  register,
}: ExpertsOnboardingPropTypes) => {
  return (
    <div className="w-full pt-5 flex flex-col gap-4">
      <SectionHeading heading="COMMUNITY SERVICE OFFER" />
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label
            type="required"
            htmlFor="communityServiceOffer.startUpDevModules"
          >
            I can support innovators in these startup development modules
          </Label>
          <Controller
            name="communityServiceOffer.startUpDevModules"
            control={control}
            render={({ field }) => (
              <MultiLevelSelect
                {...field}
                options={StartupModulesOptions}
              />
            )}
          ></Controller>
          <InputError error={errors.communityServiceOffer?.startUpDevModules} />
        </div>
        <div>
          <Label type="required" htmlFor="communityServiceOffer.communityGoals">
            My community goals are
          </Label>
          <Controller
            name="communityServiceOffer.communityGoals"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect
                isMulti
                {...field}
                options={communityGoalsOptions}
              />
            )}
          ></Controller>
          <InputError error={errors.communityServiceOffer?.communityGoals} />
        </div>
        <div>
          <Label htmlFor="communityServiceOffer.personalBio">
            Personal bio (150 character only)
          </Label>
          <Textarea
            {...register("communityServiceOffer.personalBio")}
            id="CommunityServiceOffer.personalBio"
          />
          <InputError error={errors.communityServiceOffer?.personalBio} />
        </div>
      </div>
    </div>
  );
};
