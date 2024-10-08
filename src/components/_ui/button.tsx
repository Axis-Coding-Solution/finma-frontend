import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";
const buttonVariants = cva(
  "inline-flex items-center gap-1 justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 font-bold",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background ",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 font-bold",
        muted:
          "bg-muted text-foreground hover:bg-muted/80 font-bold",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        dark: "text-background bg-foreground hover:bg-foreground/90",
        disable: "text-primary-disabled bg-transparent border-primary-disabled border hover:bg-primary-disabled hover:text-background",
        link: "text-foreground hover:underline-offset-4 hover:underline",
        "flat-primary": "text-primary hover:bg-primary/10 transition",
        "flat-success": "text-success hover:bg-success/10 transition",
        "outline-info":
          "border border-info bg-transparent text-info hover:bg-info/5",
        "outline-secondary":
          "border border-border bg-transparent text-foreground hover:bg-secondary/5",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 rounded",
      },
    },
    defaultVariants: {
      variant: "default",
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
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      tag = "button",
      rounded = false,
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
      />
    );
  }
);
Button.displayName = "Button";
export { Button, buttonVariants };
