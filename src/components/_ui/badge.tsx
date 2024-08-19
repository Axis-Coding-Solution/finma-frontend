import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const badgeVariants = cva(
  "cursor-default inline-flex items-center rounded-full border px-2 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary !text-primary-foreground hover:bg-primary/80",
          "blue":"bg-[#6F6FEA] text-background italic",
        secondary:
          "border-transparent bg-secondary !text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive !text-destructive-foreground hover:bg-destructive/80",
        success:
          "border-transparent bg-success !text-success-foreground hover:bg-success/80",
        info: "border-transparent bg-info !text-info-foreground hover:bg-info/80",
        outline: "text-foreground bg-background",
        "outline-success": "border-success text-success bg-background",
        "outline-orange": "border-[#EE8204] text-[#EE8204] bg-background",
        "outline-info": "border-info text-info bg-background",
        "outline-blue": "border-[#D516CD] text-[#D516CD] bg-background",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}

export { Badge, badgeVariants };
