import { classNamesReactSelect } from "@/utils";
import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";
import Select, {
  DropdownIndicatorProps,
  Props,
  components,
} from "react-select";

const DropdownIndicator = (props: DropdownIndicatorProps) => (
  <components.DropdownIndicator {...props}>
    <ChevronDown className="h-4 w-4 opacity-50 text-muted-foreground" />
  </components.DropdownIndicator>
);

export const ReactSelect = forwardRef<any, Props>((props, ref) => {
  const { components = {}, ...otherProps } = props;

  return (
    <Select
      ref={ref}
      isClearable={false}
      components={{ DropdownIndicator, ...components }}
      unstyled
      classNames={classNamesReactSelect}
      {...otherProps}
    />
  );
});
