import { cn } from "@/utils";
import { forwardRef, useId } from "react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  options: { value: string; label: string }[];
}

export const FloatingSelect = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { className, label, labelProps, options, ...rest } = props;

    const id = useId();

    return (
      <div className="relative w-full">
        <select
          ref={ref}
          id={id}
          className={cn(
            "outline-none w-full peer py-2.5 px-1 placeholder:text-muted-foreground bg-background text-foreground border-b border-muted-foreground focus:border-foreground disabled:opacity-50 disabled:cursor-not-allowed read-only:opacity-70 read-only:cursor-not-allowed transition",
            className
          )}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label
          htmlFor={id}
          className="absolute px-1 origin-[0] scale-90 -translate-y-7 text-muted-text bg-background peer-focus:scale-90 peer-focus:-translate-y-7 peer-focus:text-muted-text peer-focus:bg-background peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-muted-foreground transition duration-150 pointer-events-none z-10"
          {...labelProps}
        >
          {label}
        </label>
      </div>
    );
  }
);
