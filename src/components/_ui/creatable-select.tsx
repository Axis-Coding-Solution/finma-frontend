import CreatableSelect from "react-select/creatable";
import { DropdownIndicatorProps, Props, components } from "react-select";
import { ChevronDown } from "lucide-react";
import { classNamesReactSelect } from "@/utils";
import { forwardRef } from "react";

const DropdownIndicator = (props: DropdownIndicatorProps) => (
  <components.DropdownIndicator {...props}>
    <ChevronDown className="h-4 w-4 opacity-50 text-muted-foreground" />
  </components.DropdownIndicator>
);

export const ReactCreatableSelect = forwardRef<any, Props>(
  ({ options = [], ...props }, ref) => (
    <CreatableSelect
      ref={ref}
      options={options}
      unstyled
      components={{ DropdownIndicator }}
      classNames={classNamesReactSelect}
      {...props}
    />
  )
);
