import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";
import { userAvatar1Image } from "@/assets/images";

const badgeVariants = cva("rounded-full border-transparent", {
  variants: {
    size: {
      sm: "w-8 min-w-8 h-8",
      md: "w-10 min-w-10 h-10",
      lg: "w-12 min-w-12 h-12",
      xl: "w-16 min-w-16 h-16",
      xxl: "w-20 min-w-20 h-20",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLImageElement>,
    VariantProps<typeof badgeVariants> {
  image?: string;
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
        crossOrigin="anonymous"
        onError={(e) => (e.currentTarget.src = userAvatar1Image)}
        className={cn(badgeVariants({ size }), className)}
        {...props}
      />
      {active && (
        <span
          role="status"
          className="min-w-3 h-3 rounded-full bg-primary border-2 border-background z-10 absolute right-0 bottom-0"
        />
      )}
    </ImgWrapper>
  );
}

export { Avatar, badgeVariants };
