import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countriesOptions } from "@/utils/constants";
export const ProfileCountry = () => {
  return (
    <div>
      <p className="text-foreground 2xl:text-2xl text-lg 2xl:leading-7 leading-6">
        Subtitle something text
      </p>
      <div className="flex flex-col 2xl:gap-6 gap-4 2xl:mt-10 mt-6">
        <Select>
          <SelectTrigger id="selectCountry">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            {countriesOptions.map((country) => (
              <SelectItem key={country.value} value={country.value}>
                {country.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger id="selectCity">
            <SelectValue placeholder="Select city" />
          </SelectTrigger>
          <SelectContent>
            {countriesOptions.map((country) => (
              <SelectItem key={country.value} value={country.value}>
                {country.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
