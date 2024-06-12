import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";
import { HTMLAttributes } from "react";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "!text-3xl font-bold",
      h3: "!text-2xl font-bold",
      h4: "!text-xl font-bold",
      h6: "!text-lg font-medium",
      p: "!text-base font-normal",
      span: "!text-sm font-normal",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  variant: "h1" | "h3" | "h4" | "h6" | "p" | "span";
}

export const Typography = ({
  variant = "p",
  className,
  children,
  ...props
}: TypographyProps) => {
  const TypographyTag = variant;

  return (
    <TypographyTag
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    >
      {children}
    </TypographyTag>
  );
};
