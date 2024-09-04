import { cn } from "@/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface SectionProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  heading: string;
}

export const SectionHeading = ({
  heading = "Section Heading",
  className,
  ...props
}: SectionProps) => {
  return (
    <h4
      className={cn("text-success uppercase font-medium", className)}
      {...props}
    >
      {heading}
    </h4>
  );
};
