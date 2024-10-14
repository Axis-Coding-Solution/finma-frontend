import { cn } from "@/utils";
import { Plus, X } from "lucide-react";
import { forwardRef, useId, useState } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

export const CreateAbleInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { type, className, label, labelProps, ...rest } = props;

    const id = useId();
    const [values, setValues] = useState<string[]>([]);

    const handleAddText = () => {
      if (rest.value) {
        setValues([...values, String(rest.value)]);
        if (rest.onChange) {
          rest.onChange({ ...rest, target: { ...rest, value: "" } } as any);
        }
      }
    };

    const handleRemoveText = (indexToRemove: number) => {
      setValues(values.filter((_, index) => index !== indexToRemove));
    };

    return (
      <>
        <div className="flex items-center relative w-full space-x-2">
          <input
            ref={ref}
            type={type}
            id={id}
            placeholder=""
            className={cn(
              "outline-none bg-transparent w-full peer py-2.5 px-1 placeholder:text-muted-foreground bg-background text-foreground border-b border-muted-foreground focus:border-foreground disabled:opacity-50 disabled:cursor-not-allowed read-only:opacity-70 read-only:cursor-not-allowed transition",
              className
            )}
            {...rest}
          />
          <label
            htmlFor={id}
            className="bg-transparent absolute  origin-[0] scale-90 -translate-y-7 text-muted-text bg-background peer-focus:scale-90 peer-focus:-translate-y-7 peer-focus:text-muted-text peer-focus:bg-transparent peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-muted-foreground transition duration-150 pointer-events-none z-1"
            {...labelProps}
          >
            {label}
          </label>
          <button
            type="button"
            onClick={handleAddText}
            className="absolute transition top-2 right-0"
          >
            <Plus className="text-foreground" />
          </button>
          {/* Display added text items */}
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-2 py-0 border border-info text-info  rounded-full"
            >
              {value}
              <button type="button" onClick={() => handleRemoveText(index)}>
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
);
