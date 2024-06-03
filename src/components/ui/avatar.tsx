import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const badgeVariants = cva("rounded-full border-transparent", {
  variants: {
    size: {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
      xl: "w-16 h-16",
      xxl: "w-20 h-20",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLImageElement>,
    VariantProps<typeof badgeVariants> {
  image: string;
  active?: boolean;
}

function Avatar({
  image,
  active = false,
  className,
  size,
  ...props
}: BadgeProps) {
  const ImgWrapper = active ? "div" : React.Fragment;

  const wrapperProps = active ? { className: "relative" } : {};

  return (
    <ImgWrapper {...wrapperProps}>
      <img
        src={image}
        className={cn(badgeVariants({ size }), className)}
        {...props}
      />
      {active && (
        <span
          role="status"
          className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10 absolute right-0 bottom-0"
        />
      )}
    </ImgWrapper>
  );
}

export { Avatar, badgeVariants };
