import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const badgeVariants = cva(
  "cursor-default inline-flex items-center rounded-full  px-6 py-0.5 2xl:text-lg text-sm font-medium transition-colors capitalize",
  {
    variants: {
      variant: {
        default:
          " bg-secondary-dark !text-foreground ",
        secondary:
          " bg-secondary-dark !text-foreground ",
        primary:
          "bg-secondary !text-foreground",
        warning:
          "bg-warning/50 !text-foreground",
        info:
          " bg-info-light !muted-text",
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
