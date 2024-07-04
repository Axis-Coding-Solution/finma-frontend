import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { Label } from "./label";
import { cn } from "@/utils";
import { Check } from "lucide-react";

const checkboxVariants = cva(
  "peer transition appearance-none cursor-pointer ring-1 ring-border shrink-0 focus:ring-2",
  {
    variants: {
      variant: {
        light: "bg-foreground",
        dark: "bg-input",
      },
      color: {
        primary: "checked:bg-primary focus:ring-ring/50",
        secondary: "checked:bg-secondary focus:ring-secondary/50",
        danger: "checked:bg-danger focus:ring-danger/50",
        success: "checked:bg-success focus:ring-success/50",
      },
      size: {
        base: "w-6 h-6 rounded",
        sm: "w-5 h-5 rounded",
        xs: "w-4 h-4 rounded",
        lg: "w-8 h-8rounded",
      },
    },
    defaultVariants: {
      variant: "dark",
      color: "primary",
      size: "base",
    },
  }
);

const checkboxSvgVariants = cva(
  "peer-checked:transition h-6 w-6 absolute pointer-events-none hidden peer-checked:block",
  {
    variants: {
      color: {
        primary: "text-primary-background",
        secondary: "text-secondary-foreground",
        danger: "text-success-secondary-background",
        success: "text-success-background",
      },
      size: {
        base: "w-6 h-6",
        sm: "w-5 h-5",
        xs: "w-4 h-4",
        lg: "w-8 h-8",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "base",
    },
  }
);

export const CustomCheckbox = forwardRef<any, any>(
  (
    {
      type = "text",
      placeholder = "Enter ...",
      size = "base",
      variant = "dark",
      color = "primary",
      className = "",
      label = "Required",
      id = "checkbox-input",
      hideLabel = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex gap-2 items-center">
        <input
          ref={ref}
          id={id}
          className={cn(checkboxVariants({ size, variant, color, className }))}
          type="checkbox"
          {...props}
        />
        {!hideLabel && <Label htmlFor={id}>{label}</Label>}
        <Check className={cn(checkboxSvgVariants({ size, color }))} />
      </div>
    );
  }
);
