import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/index";
import { Label } from "./index";
import { Circle, CircleDotIcon } from "lucide-react";

const radioInputVariants = cva(
  "peer transition appearance-none cursor-pointer ring-1 ring-border shrink-0 focus:ring-2 rounded-full",
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
        base: "w-6 h-6",
        sm: "w-5 h-5",
        xs: "w-4 h-4",
        lg: "w-8 h-8",
      },
    },
    defaultVariants: {
      variant: "dark",
      color: "primary",
      size: "base",
    },
  }
);

const circleSvgVariants = cva(
  "left-[54px] peer-checked:transition h-6 w-6 absolute pointer-events-none hidden peer-checked:block",
  {
    variants: {
      color: {
        primary: "text-primary-background",
        warning: "bg-warning text-warning rounded-full",
        secondary: "text-secondary-foreground",
        danger: "text-danger-background",
        success: "text-success-background",
      },
      size: {
        base: "w-5 h-5",
        sm: "w-4 h-4",
        xs: "w-3 h-3",
        lg: "w-7 h-7",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "base",
    },
  }
);

export const RadioButton = forwardRef<any, any>(
  (
    {
      size = "base",
      variant = "dark",
      color = "primary",
      className = "",
      label = "Required",
      id = "radio-input",
      hideLabel = false,
      ...props
    },
    ref: any
  ) => {
    return (
      <div className="flex gap-2 items-center">
        <input
          ref={ref}
          id={id}
          className={cn(
            radioInputVariants({ size, variant, color, className })
          )}
          type="radio"
          {...props}
        />
        {!hideLabel && (
          <Label htmlFor={id} type="checkbox">
            {label}
          </Label>
        )}
        <Circle className={cn(circleSvgVariants({ size, color }))} />
      </div>
    );
  }
);

RadioButton.displayName = "RadioButton";
