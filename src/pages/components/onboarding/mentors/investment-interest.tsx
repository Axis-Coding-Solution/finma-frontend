import { Label } from "@/components/ui/label";
import { SectionHeading } from "../../common";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mentorsAnnualStartUpInvestmentOptions, mentorsIndustryOptions, mentorsInvestmentEvalKPISOptions, mentorsPostInvestmentSupportOptions, mentorsPrefInvestmentInstrumentOptions, mentorsPrefInvestmentRegionsOptions, mentorsPrefStartUpTypesOptions,  mentorsTargetIndustryOptions, mentorsTicketSizeOptions, mentorsTypicalInvestmentDurationOptions } from "@/data/dashboard/mentors";
import { Textarea } from "@/components/ui/textarea";
import { MentorsOnboardingPropTypes } from "@/definitions/types/onboarding";
import { Controller } from "react-hook-form";
import { ReactCreatableSelect } from "@/components/ui/creatable-select";
import { InputError } from "@/components/ui/input-error";
import { ReactSelect } from "@/components/ui/react-select";

function InvestmentInterest({
  control,
  register,
  errors,
}: MentorsOnboardingPropTypes) {
  return (
    <div className="flex flex-col gap-4 w-full pt-4">
      <SectionHeading heading="Investment Interest" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <Label htmlFor="mentors-community-service-startup-dev-modules">
            Ticket size
          </Label>
          <Controller
            name="investmentInterest.ticketSize"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect options={mentorsTicketSizeOptions} {...field} />
            )}
          />
          <InputError error={errors.investmentInterest?.ticketSize} />
          {/* <Select>
            <SelectTrigger id="mentors-community-service-startup-dev-modules">
              <SelectValue placeholder="Select startup development modules" />
            </SelectTrigger>
            <SelectContent>
              {mentorsIndustryOptions.map((industry) => (
                <SelectItem value={industry.value}>{industry.label}</SelectItem>
              ))}
            </SelectContent>
          </Select> */}
        </div>
        <div className="col-span-2">
          <Label htmlFor="mentors-community-service-goals">
            Target Industry
          </Label>
          <Controller
            name="investmentInterest.targetIndustry"
            control={control}
            render={({ field }) => (
              <ReactSelect options={mentorsTargetIndustryOptions} {...field} />
            )}
          />
          <InputError error={errors.investmentInterest?.targetIndustry} />
          {/* <Select>
            <SelectTrigger id="mentors-community-service-goals">
              <SelectValue placeholder="Select Community Goals" />
            </SelectTrigger>
            <SelectContent>
              {mentorsIndustryOptions.map((industry) => (
                <SelectItem value={industry.value}>{industry.label}</SelectItem>
              ))}
            </SelectContent>
          </Select> */}
        </div>
        <div className="col-span-2">
          <Label htmlFor="mentors-community-service-hours-week">
            Preferred investment instrument
          </Label>

          <Controller
            name="investmentInterest.prefInvestmentInstrument"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect options={mentorsPrefInvestmentInstrumentOptions} {...field} />
            )}
          />
          {/* <Input
            id="mentors-community-service-hours-week"
            type="number"
            placeholder="Enter your hours of availability..."
            {...register("investmentInterest.prefInvestmentInstrument")}
          /> */}
          <InputError error={errors.investmentInterest?.prefInvestmentInstrument} />
        </div>
        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            Your typical investment duration
          </Label>
          <Controller
            name="investmentInterest.typicalInvestmentDuration"
            control={control}
            render={({ field }) => (
              <ReactSelect options={mentorsTypicalInvestmentDurationOptions} {...field} />
            )}
          />
          {/* <Input
            id="mentors-community-service-hours-week"
            type="number"
            placeholder="Enter your hours of availability..."
            {...register("investmentInterest.typicalInvestmentDuration")}
          /> */}
          <InputError error={errors.investmentInterest?.typicalInvestmentDuration} />
        </div>
        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            KPIs for evaluating investments
          </Label>
          <Controller
            name="investmentInterest.investmentEvalKPIS"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect options={mentorsInvestmentEvalKPISOptions} {...field} />
            )}
          />
          <InputError error={errors.investmentInterest?.investmentEvalKPIS} />
        </div>

        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            Preferred startup types
          </Label>
          <Controller
            name="investmentInterest.prefStartUpTypes"
            control={control}
            render={({ field }) => (
              <ReactSelect options={mentorsPrefStartUpTypesOptions} {...field} />
            )}
          />
          <InputError error={errors.investmentInterest?.prefStartUpTypes} />
        </div>
        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            Annual startup investment
          </Label>
          <Controller
            name="investmentInterest.annualStartUpInvestment"
            control={control}
            render={({ field }) => (
              <ReactSelect options={mentorsAnnualStartUpInvestmentOptions} {...field} />
            )}
          />
          <InputError error={errors.investmentInterest?.annualStartUpInvestment} />
        </div>
        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            Preferred investment regions
          </Label>
          <Controller
            name="investmentInterest.prefInvestmentRegions"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect options={mentorsPrefInvestmentRegionsOptions} {...field} />
            )}
          />
          <InputError error={errors.investmentInterest?.prefInvestmentRegions} />
          {/* <Input
            id="mentors-community-service-hours-week"
            type="number"
            placeholder="Enter your hours of availability..."
            /> */}
        </div>
        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            Post-investment support
          </Label>
          <Controller
            name="investmentInterest.postInvestmentSupport"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect options={mentorsPostInvestmentSupportOptions} {...field} />
            )}
          />
          <InputError error={errors.investmentInterest?.postInvestmentSupport} />
          {/* <Input
            id="mentors-community-service-hours-week"
            type="number"
            placeholder="Enter your hours of availability..."
          /> */}
        </div>
      </div>
    </div>
  );
}

export default InvestmentInterest;
