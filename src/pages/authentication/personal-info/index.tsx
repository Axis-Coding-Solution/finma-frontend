import { countriesOptions } from "@/utils/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MainHeading } from "@/pages/components/common";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PersonalInfo = () => {
  const professionalStatus = [
    { label: "employed", value: "Employed(Full TIme job)" },
    { label: "unEmployed", value: "I left my job already (Unemployed)" },
    { label: "business", value: "I own a business" },
    { label: "partTime", value: "I work part-time" },
    { label: "retired", value: "Retired" },
    { label: "other", value: "other" },
  ];

  const financialStatus = [
    { label: "debtFree", value: "I am debt free" },
    { label: "mortgage", value: "I pay a mortgage" },
    { label: "technicalSupport", value: "I receive technical support" },
    { label: "saveMoney", value: "I am able to save money" },
    { label: "otherVentures", value: "I am investing in other ventures" },
    { label: "financialMarket", value: "I am investing in financial market" },
  ];

  const familyStatus = [
    { label: "single", value: "I am single" },
    { label: "relationship", value: "I am in a relationship" },
    { label: "kids", value: "I have kids" },
    { label: "other", value: "Other" },
  ];
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
        <SelectContent side="bottom">
          {countriesOptions.map((country) => (
            <SelectItem key={country.value} value={country.value}>
              {country.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="My professional status" />
        </SelectTrigger>
        <SelectContent>
          {professionalStatus.map((item) => (
            <SelectItem value={item.label}>{item.value}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="My Financial status" />
        </SelectTrigger>
        <SelectContent>
          {financialStatus.map((item) => (
            <SelectItem value={item.label}>{item.value}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="My family status" />
        </SelectTrigger>
        <SelectContent>
          {familyStatus.map((item) => (
            <SelectItem value={item.label}>{item.value}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <Link to="/auth/login">
          <Button>Continue</Button>
        </Link>
      </div>
    </div>
  );
};

export default PersonalInfo;
