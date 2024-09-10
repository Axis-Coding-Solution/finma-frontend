import { classNamesReactSelect, cn } from "@/utils";
import { ChevronDown } from "lucide-react";
import { forwardRef, useCallback, useId, useState } from "react";
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

interface IProps extends Props {
  label: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

export const ReactSelect = forwardRef<any, IProps>((props, ref) => {
  const { components = {}, label, labelProps, ...otherProps } = props;
  const [inputValue, setInputValue] = useState("");
  const id = useId();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(props.value, isMenuOpen);

  const onMenuOpen = useCallback(() => setIsMenuOpen(true), [isMenuOpen]);
  const onMenuClose = useCallback(() => setIsMenuOpen(false), [isMenuOpen]);

  return (
    <div className="flex items-center relative w-full">
      <Select
        ref={ref}
        isClearable={false}
        inputId={id}
        components={{
          DropdownIndicator,
          ...components,
        }}
        onInputChange={(value) => setInputValue(value)}
        menuIsOpen={isMenuOpen}
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
        inputValue={inputValue}
        unstyled
        classNames={classNamesReactSelect}
        {...otherProps}
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute px-1 origin-[0] text-muted-text bg-background transition duration-150 pointer-events-none z-10",
          (props.value as any) || inputValue.length > 0 || isMenuOpen
            ? "scale-90 -translate-y-7 text-muted-text bg-transparent"
            : "translate-y-0 scale-100"
        )}
        {...labelProps}
      >
        {label}
      </label>
    </div>
  );
});
