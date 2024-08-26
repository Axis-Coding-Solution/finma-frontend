import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const badgeVariants = cva(
  "cursor-default inline-flex items-center rounded-full  px-6 py-1 2xl:text-lg text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          " bg-secondary-dark/20 !text-success-dark hover:bg-secondary-dark/40",
        secondary:
          " bg-secondary-dark/20 !text-success-dark hover:bg-secondary-dark/40",
        danger: " bg-danger/20 !text-danger hover:bg-danger/40",
        primary:
          " bg-primary-disabled/20 !text-primary-disabled hover:bg-primary-disabled/40",
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
