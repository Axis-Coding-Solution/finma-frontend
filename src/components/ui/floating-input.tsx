import { cn } from "@/utils";
import { forwardRef, useId } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

export const FloatingInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { type, className, label, labelProps, ...rest } = props;

    const id = useId();

    return (
      <div className="flex items-center relative w-full ">
        <input
          ref={ref}
          type={type}
          id={id}
          placeholder=""
          className={cn(
            "outline-none w-full peer py-2.5 px-1 placeholder:text-muted-foreground bg-background text-foreground border-b border-muted-foreground focus:border-foreground disabled:opacity-50 disabled:cursor-not-allowed read-only:opacity-70 read-only:cursor-not-allowed transition",
            className
          )}
          {...rest}
        />
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
