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

export const MentorsProfessionalInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeading heading="Professional Information" />
      <div>
        <Label htmlFor="mentors-prof-info-job-title">
          Job title (This will appear on your community card)
        </Label>
        <Input
          id="mentors-prof-info-job-title"
          type="text"
          placeholder="Enter your job title..."
        />
      </div>
      <div>
        <Label htmlFor="mentors-prof-info-company-name">
          Company name (This will appear on your community card)
        </Label>
        <Input
          id="mentors-prof-info-company-name"
          type="text"
          placeholder="Enter your company name..."
        />
      </div>
      <div>
        <Label htmlFor="mentors-prof-info-industry">Industry</Label>
        <Select>
          <SelectTrigger id="mentors-prof-info-industry">
            <SelectValue placeholder="Select Industry" />
          </SelectTrigger>
          <SelectContent>
            {mentorsIndustryOptions.map((industry) => (
              <SelectItem value={industry.value}>{industry.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
