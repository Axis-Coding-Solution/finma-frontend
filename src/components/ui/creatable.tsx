import { cn } from "@/utils";
import { Plus, X } from "lucide-react";
import { forwardRef, useEffect, useId, useState } from "react";
import { useFieldArray } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  control?: any;
  name: string;
}

export const CreateAbleInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { type, name, className, label, labelProps, control, ...rest } =
      props;

    const id = useId();
    const { append, fields, remove } = useFieldArray({
      name: name,
      control: control,
      keyName: "uid",
    });
    const [value, setValue] = useState<string>("");

    useEffect(() => {
      if (rest.value) {
        window.addEventListener("keyup", (e: KeyboardEvent) => {
          e.preventDefault()
          if (e.shiftKey || e.ctrlKey || e.altKey) return null;
          if (e.key === "Enter") {
            value.trim().length > 0 ? append({ name: value }) : null;
            setValue("");
          }
        });
      }
    }, []);

    return (
      <>
        <div className="flex items-center relative w-full space-x-2">
          <input
            ref={ref}
            type={type}
            id={id}
            placeholder=""
            value={value}
            className={cn(
              "outline-none bg-transparent w-full peer py-2.5 px-1 placeholder:text-muted-foreground bg-background text-foreground border-b border-muted-foreground focus:border-foreground disabled:opacity-50 disabled:cursor-not-allowed read-only:opacity-70 read-only:cursor-not-allowed transition",
              className
            )}
            onChange={(e) => setValue(e.target.value)}
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
            onClick={() => {
              value.trim().length > 0 ? append({ name: value }) : null;
              setValue("");
            }}
            className="absolute transition top-2 right-0"
          >
            <Plus className="text-foreground" />
          </button>
          {/* Display added text items */}
        </div>
        <div className="flex flex-wrap gap-1 mt-6">
          {fields.map((field: any, index) => (
            <div
              key={field.uid}
              className="flex items-center gap-2 px-2 py-0 border border-info text-info  rounded-full"
            >
              {field.name}
              <button type="button" onClick={() => remove(index)}>
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
);
