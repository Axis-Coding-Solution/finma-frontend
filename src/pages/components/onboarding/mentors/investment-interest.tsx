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
import { mentorsIndustryOptions } from "@/data/dashboard/mentors";
import { Textarea } from "@/components/ui/textarea";
import { MentorsOnboardingPropTypes } from "@/definitions/types/onboarding";

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
          <Select>
            <SelectTrigger id="mentors-community-service-startup-dev-modules">
              <SelectValue placeholder="Select startup development modules" />
            </SelectTrigger>
            <SelectContent>
              {mentorsIndustryOptions.map((industry) => (
                <SelectItem value={industry.value}>{industry.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2">
          <Label htmlFor="mentors-community-service-goals">
            Target Industry
          </Label>
          <Select>
            <SelectTrigger id="mentors-community-service-goals">
              <SelectValue placeholder="Select Community Goals" />
            </SelectTrigger>
            <SelectContent>
              {mentorsIndustryOptions.map((industry) => (
                <SelectItem value={industry.value}>{industry.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2">
          <Label htmlFor="mentors-community-service-hours-week">
            Preferred investment instrument
          </Label>
          <Input
            id="mentors-community-service-hours-week"
            type="number"
            placeholder="Enter your hours of availability..."
          />
        </div>
        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            Your typical investment duration
          </Label>
          <Input
            id="mentors-community-service-hours-week"
            type="number"
            placeholder="Enter your hours of availability..."
          />
        </div>
        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            KPIs for evaluating investments
          </Label>
          <Input
            id="mentors-community-service-hours-week"
            type="number"
            placeholder="Enter your hours of availability..."
          />
        </div>
        <div className="col-span-2">
          <Label htmlFor="mentors-community-service-personal-bio">
            KPIs for evaluating investments
          </Label>
          <Input
            id="mentors-community-service-hours-week"
            type="number"
            placeholder="Enter your hours of availability..."
          />
        </div>
        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            Preferred startup types
          </Label>
          <Input
            id="mentors-community-service-hours-week"
            type="number"
            placeholder="Enter your hours of availability..."
          />
        </div>
        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            Annual startup investment
          </Label>
          <Input
            id="mentors-community-service-hours-week"
            type="number"
            placeholder="Enter your hours of availability..."
          />
        </div>
        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            Preferred investment regions
          </Label>
          <Input
            id="mentors-community-service-hours-week"
            type="number"
            placeholder="Enter your hours of availability..."
          />
        </div>
        <div>
          <Label htmlFor="mentors-community-service-personal-bio">
            Post-investment support
          </Label>
          <Input
            id="mentors-community-service-hours-week"
            type="number"
            placeholder="Enter your hours of availability..."
          />
        </div>
      </div>
    </div>
  );
}

export default InvestmentInterest;
