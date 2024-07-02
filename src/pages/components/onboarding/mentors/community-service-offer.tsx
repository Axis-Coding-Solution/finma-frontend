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

export const MentorsCommunityServiceOffer = () => {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeading heading="community-service Information" />
      <div>
        <Label htmlFor="mentors-community-service-startup-dev-modules">
          I am willing to support founders in these startup development modules
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
      <div>
        <Label htmlFor="mentors-community-service-goals">
          My community goals are
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
      <div>
        <Label htmlFor="mentors-community-service-hours-week">
          How many hours per weeks can you dedicate to mentoring?
        </Label>
        <Input
          id="mentors-community-service-hours-week"
          type="number"
          placeholder="Enter your hours of availability..."
        />
      </div>
      <div>
        <Label htmlFor="mentors-community-service-personal-bio">
          Personal bio (150 character only)
        </Label>
        <Textarea
          id="mentors-community-service-personal-bio"
          className="h-24"
          placeholder="Type your personal bio..."
        />
      </div>
    </div>
  );
};
