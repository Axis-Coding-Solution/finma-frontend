import { Label } from "@/components/_ui/label";
import { SectionHeading } from "../../common";
import { MentorsOnboardingPropTypes } from "@/definitions/types/onboarding";
import { Controller } from "react-hook-form";
import { ReactCreatableSelect } from "@/components/_ui/creatable-select";
import { InputError } from "@/components/_ui/input-error";
import { ReactSelect } from "@/components/_ui/react-select";
import {
  AnnualStartUpInvestmentOptions,
  InvestmentEvalKPISOptions,
  PostInvestmentSupportOptions,
  PrefInvestmentInstrumentOptions,
  PrefInvestmentRegionsOptions,
  PrefStartUpTypesOptions,
  TargetIndustryOptions,
  TicketSizeOptions,
  TypicalInvestmentDurationOptions,
  investmentStrategyOptions,
} from "@/data/onboarding";

function InvestmentInterest({ control, errors }: MentorsOnboardingPropTypes) {
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
              <ReactCreatableSelect options={TicketSizeOptions} {...field} />
            )}
          />
          <InputError error={errors.investmentInterest?.ticketSize} />
        </div>

        <div className="col-span-2">
          <Label htmlFor="mentors-community-service-goals">
            Target Industry
          </Label>
          <Controller
            name="investmentInterest.targetIndustry"
            control={control}
            render={({ field }) => (
              <ReactSelect options={TargetIndustryOptions} {...field} />
            )}
          />
          <InputError error={errors.investmentInterest?.targetIndustry} />
        </div>

        <div className="col-span-2">
          <Label htmlFor="mentors-community-service-hours-week">
            Preferred investment instrument
          </Label>

          <Controller
            name="investmentInterest.prefInvestmentInstrument"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect
                isMulti
                options={PrefInvestmentInstrumentOptions}
                {...field}
              />
            )}
          />
          <InputError
            error={errors.investmentInterest?.prefInvestmentInstrument}
          />
        </div>

        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            Your typical investment duration
          </Label>
          <Controller
            name="investmentInterest.typicalInvestmentDuration"
            control={control}
            render={({ field }) => (
              <ReactSelect
                options={TypicalInvestmentDurationOptions}
                {...field}
              />
            )}
          />
          <InputError
            error={errors.investmentInterest?.typicalInvestmentDuration}
          />
        </div>

        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            KPIs for evaluating investments
          </Label>
          <Controller
            name="investmentInterest.investmentEvalKPIS"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect
                isMulti
                options={InvestmentEvalKPISOptions}
                {...field}
              />
            )}
          />
          <InputError error={errors.investmentInterest?.investmentEvalKPIS} />
        </div>

        <div className="col-span-2">
          <Label htmlFor="mentors-community-service-personal-bio">
            Your Investment Strategy
          </Label>
          <Controller
            name="investmentInterest.investmentStrategy"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect
                options={investmentStrategyOptions}
                {...field}
              />
            )}
          />
          <InputError error={errors.investmentInterest?.investmentStrategy} />
        </div>

        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            Preferred startup types
          </Label>
          <Controller
            name="investmentInterest.prefStartUpTypes"
            control={control}
            render={({ field }) => (
              <ReactSelect options={PrefStartUpTypesOptions} {...field} />
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
              <ReactSelect
                options={AnnualStartUpInvestmentOptions}
                {...field}
              />
            )}
          />
          <InputError
            error={errors.investmentInterest?.annualStartUpInvestment}
          />
        </div>

        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            Preferred investment regions
          </Label>
          <Controller
            name="investmentInterest.prefInvestmentRegions"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect
                isMulti
                options={PrefInvestmentRegionsOptions}
                {...field}
              />
            )}
          />
          <InputError
            error={errors.investmentInterest?.prefInvestmentRegions}
          />
        </div>

        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            Post-investment support
          </Label>
          <Controller
            name="investmentInterest.postInvestmentSupport"
            control={control}
            render={({ field }) => (
              <ReactCreatableSelect
                isMulti
                options={PostInvestmentSupportOptions}
                {...field}
              />
            )}
          />
          <InputError
            error={errors.investmentInterest?.postInvestmentSupport}
          />
        </div>

      </div>
    </div>
  );
}

export default InvestmentInterest;
