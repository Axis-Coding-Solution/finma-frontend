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
import { areaOfExpertise } from "@/data/dashboard/experts";
import { SectionHeading } from "../../common";
import { ExpertsOnboardingPropTypes } from "@/definitions/types/onboarding";
export const ProfessionalInfo = ({
  control,
  errors,
  register,
}: ExpertsOnboardingPropTypes) => {
  return (
    <div className="w-full pt-5 flex flex-col gap-4">
      <SectionHeading heading="Professional Information" />
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label type="required" htmlFor="professionalInfo.currEmpType">
            Current employment type
          </Label>
          <Controller
            name="professionalInfo.currEmpType"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(e) => field.onChange(e)}
              >
                <SelectTrigger id="professionalInfo.currEmpType">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {areaOfExpertise.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          ></Controller>
          <InputError error={errors.professionalInfo?.currEmpType} />
        </div>

        <div>
          <Label type="required" htmlFor="professionalInfo.currJobTitle">
            Current job title (This will appear on your community card)
          </Label>
          <Input
            type="text"
            id="professionalInfo.currJobTitle"
            {...register("professionalInfo.currJobTitle")}
          />
          <InputError error={errors.professionalInfo?.currJobTitle} />
        </div>
        <div>
          <Label type="required" htmlFor="professionalInfo.skills">
            Skills
          </Label>
          <Input
            type="text"
            id="professionalInfo.skills"
            {...register("professionalInfo.skills")}
            // placeholder="Enter first name"
          />
          <InputError error={errors.professionalInfo?.skills} />
        </div>
      </div>
      <div>
        <Label htmlFor="professionalInfo.companyName">
          Company name, if applicable (This will appear on your community card)
        </Label>
        <Input
          type="text"
          id="professionalInfo.companyName"
          {...register("professionalInfo.companyName")}
        />
        <InputError error={errors.professionalInfo?.companyName} />
      </div>
    </div>
  );
};
