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
    <div>
      <MainHeading
        heading="Almost there..."
        paragraph="Please provide your personal data to help us understand you better :)"
      />
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="i live in  " />
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
        <SelectTrigger className="">
          <SelectValue placeholder="My professional status " />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Employed(Full TIme job)</SelectItem>
          <SelectItem value="dark">Contemplating to quit my job</SelectItem>
          <SelectItem value="system">I left my job already (Unemployed)</SelectItem>
          <SelectItem value="system">I own a business</SelectItem>
          <SelectItem value="system">I work part-time</SelectItem>
          <SelectItem value="system">Retired </SelectItem>
          <SelectItem value="system">other </SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="My professional status " />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Employed(Full TIme job)</SelectItem>
          <SelectItem value="dark">Contemplating to quit my job</SelectItem>
          <SelectItem value="system">I left my job already (Unemployed)</SelectItem>
          <SelectItem value="system">I own a business</SelectItem>
          <SelectItem value="system">I work part-time</SelectItem>
          <SelectItem value="system">Retired </SelectItem>
          <SelectItem value="system">other </SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="My professional status " />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Employed(Full TIme job)</SelectItem>
          <SelectItem value="dark">Contemplating to quit my job</SelectItem>
          <SelectItem value="system">I left my job already (Unemployed)</SelectItem>
          <SelectItem value="system">I own a business</SelectItem>
          <SelectItem value="system">I work part-time</SelectItem>
          <SelectItem value="system">Retired </SelectItem>
          <SelectItem value="system">other </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
