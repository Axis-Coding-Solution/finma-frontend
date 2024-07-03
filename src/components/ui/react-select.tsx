import { cn } from "@/utils";
import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";
import Select, {
  ClassNamesConfig,
  DropdownIndicatorProps,
  GroupBase,
  Props,
  components,
} from "react-select";

const classNames: ClassNamesConfig<unknown, boolean, GroupBase<unknown>> = {
  control: ({ isFocused }) =>
    cn(
      "rounded-lg border transition-all bg-input text-foreground",
      isFocused ? "border-ring" : "border-border"
    ),
  dropdownIndicator: ({ selectProps }) =>
    cn(
      "px-5 !transition-all",
      selectProps.menuIsOpen ? "rotate-180" : "rotate-0"
    ),
  placeholder: () => "text-muted-foreground text-sm",
  multiValueRemove: () => "hover:text-red-400",
  valueContainer: () =>
    "w-full h-full py-3 px-3 flex gap-1 items-center !overflow-auto text-sm",
  multiValue: () =>
    "bg-success text-success-foreground px-1.5 py-0.5 rounded text-sm",
  menu: () =>
    "!z-10 shadow-md mt-2 border rounded-lg text-sm py-1.5 bg-input border-border",
  menuList: () => "px-1.5",
  menuPortal: () => "!z-50",
  clearIndicator: ({ selectProps }) =>
    cn(
      "cursor-pointer hover:bg-danger/10 p-1 rounded text-danger",
      selectProps.isClearable ? "block" : "none"
    ),
  noOptionsMessage: () =>
    "text-foreground h-8 text-base font-medium flex items-center justify-center",
  option: ({ isSelected }) =>
    cn(
      "rounded-sm py-2 px-3 w-full !cursor-pointer",
      isSelected
        ? "bg-card transition hover:bg-card text-card-foreground"
        : "hover:bg-card text-foreground"
    ),
};

const DropdownIndicator = (props: DropdownIndicatorProps) => (
  <components.DropdownIndicator {...props}>
    <ChevronDown className="h-4 w-4 opacity-50 text-muted-foreground" />
  </components.DropdownIndicator>
);

export const ReactSelect = forwardRef<any, Props>((props, ref) => {
  return (
    <Select
      ref={ref}
      isClearable={false}
      components={{ DropdownIndicator }}
      unstyled
      {...props}
      classNames={classNames}
    />
  );
});
