import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import { InputError } from "@/components/ui/input-error";
import { SectionHeading } from "../../common";
import { ExpertsOnboardingPropTypes } from "@/definitions/types/onboarding";
import { ReactSelect } from "@/components/ui/react-select";
import { Textarea } from "@/components/ui/textarea";

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
          <Label htmlFor="communityServiceOffer.startUpDevModules">
            I can support innovators in these startup development modules{" "}
          </Label>
          <Controller
            name="communityServiceOffer.startUpDevModules"
            control={control}
            render={({ field }) => <ReactSelect {...field} options={[]} />}
          ></Controller>
          <InputError error={errors.communityServiceOffer?.startUpDevModules} />
        </div>
        <div>
          <Label htmlFor="communityServiceOffer.communityGoals">
            My community goals are
          </Label>
          <Controller
            name="communityServiceOffer.communityGoals"
            control={control}
            render={({ field }) => <ReactSelect {...field} options={[]} />}
          ></Controller>
          <InputError error={errors.communityServiceOffer?.communityGoals} />
        </div>
        <div>
          <Label htmlFor="communityServiceOffer.personalBio">
            Personal bio (150 character only){" "}
          </Label>
          <Textarea
            {...register("communityServiceOffer.personalBio")}
            id="CommunityServiceOffer.personalBio"
            // placeholder="Enter first name"
          />
          <InputError error={errors.communityServiceOffer?.personalBio} />
        </div>
      </div>
    </div>
  );
};
