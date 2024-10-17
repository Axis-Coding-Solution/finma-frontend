import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center gap-4 justify-center whitespace-nowrap rounded text-xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        gradient: "gradient-button  font-medium border",
      },
      size: {
        default: "2xl:h-14   sm:h-12  sm:text-lg text-sm sm:h-10 h-8  ",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 rounded",
      },
    },
    defaultVariants: {
      variant: "gradient",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  to?: string;
  tag?: React.ElementType;
  rounded?: boolean;
  icon?: React.ReactNode;
}

const GradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      tag = "button",
      rounded = false,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : tag;
    return (
      <Comp
        className={cn([
          buttonVariants({ variant, size, className }),
          rounded && "rounded-full overflow-hidden  gradient-button",
        ])}
        ref={ref}
        {...props}
      >
        <div className="bg-background h-full w-full  flex items-center  rounded  px-6 py-1  justify-center ">
          {icon && <span>{icon}</span>} {/* Render the icon if provided */}
          <span className="gradient-text">{children}</span>
        </div>
      </Comp>
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton, buttonVariants };
