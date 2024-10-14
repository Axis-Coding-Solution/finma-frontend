import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "flex items-center 2xl:gap-4 gap-2 justify-center whitespace-nowrap rounded-sm text-xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        gradient: "gradient-button bg-background font-medium border",
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 font-medium",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 font-bold",
        "secondary-dark":
          "bg-secondary-dark text-secondary-foreground hover:bg-secondary-dark/80 font-bold",
        disable:
          "text-primary-disabled bg-transparent border-primary-disabled border hover:bg-primary-disabled hover:text-background",
        muted: "bg-muted text-foreground hover:bg-muted/80 font-bold",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        dark: "border border-foreground text-background bg-foreground hover:bg-foreground/90",
        link: "text-foreground hover:underline-offset-4 hover:underline",
        "flat-primary": "text-primary hover:bg-primary/10 transition",
        "flat-success": "text-success hover:bg-success/10 transition",
        outline:
          "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background ",
        "outline-info":
          "border border-info bg-transparent text-info hover:bg-info/5",
        "outline-secondary":
          "border border-border bg-transparent text-foreground hover:bg-secondary/5",
      },
      size: {
        default: "2xl:h-[3.25rem] rounded-[1rem] h-12 px-14 text-lg",
        xs: "h-8 rounded-full px-3 text-lg",
        sm: "h-9 rounded-md px-3 text-sm rounded-sm",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 min-w-10 rounded",
        middle:"h-12 px-2 rounded-[1rem]",
        expertbtn:"h-12 px-2 rounded-[1rem] "
      },
    },
    defaultVariants: {
      variant: "primary",
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

const   Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
          rounded && "rounded-full px-3 py-1",
        ])}
        ref={ref}
        {...props}
      >
        {icon && <span className="min-w-6">{icon}</span>}{" "}
        {/* Render the icon if provided */}
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
