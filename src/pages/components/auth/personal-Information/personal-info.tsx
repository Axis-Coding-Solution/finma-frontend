// import { Select } from "@radix-ui/react-select"
import { MainHeading } from "../../common";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const PersonalInfo = () => {
  return (
    <div className="flex flex-col gap-4 h-auto">
      <MainHeading
        heading="Almost there..."
        paragraph="Please provide your personal data to help us understand you better :)"
      />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="i live in" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Afghanistan</SelectItem>
          <SelectItem value="dark">Albania</SelectItem>
          <SelectItem value="system">Azerbaijan</SelectItem>
          <SelectItem value="system">Armenia</SelectItem>
          <SelectItem value="system">Austria</SelectItem>
          <SelectItem value="system">Algeria</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="My professional status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Employed(Full TIme job)</SelectItem>
          <SelectItem value="dark">Contemplating to quit my job</SelectItem>
          <SelectItem value="system">
            I left my job already (Unemployed)
          </SelectItem>
          <SelectItem value="system">I own a business</SelectItem>
          <SelectItem value="system">I work part-time</SelectItem>
          <SelectItem value="system">Retired </SelectItem>
          <SelectItem value="system">other </SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="My Financial status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">I am debt free</SelectItem>
          <SelectItem value="dark">i pay a mortgage</SelectItem>
          <SelectItem value="system">I receive technical support</SelectItem>
          <SelectItem value="system">I am able to save money</SelectItem>
          <SelectItem value="system">
            I am investing in other ventures{" "}
          </SelectItem>
          <SelectItem value="system">
            i am investing in financial market
          </SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="My family status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">i am single</SelectItem>
          <SelectItem value="dark">i am in a relationship</SelectItem>
          <SelectItem value="system">I have kids</SelectItem>
          <SelectItem value="system">Other</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
