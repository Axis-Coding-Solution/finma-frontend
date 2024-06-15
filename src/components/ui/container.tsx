import { cn } from "@/utils";
import { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  tag?: ElementType;
}

export const Container = ({
  tag = "div",
  children,
  className = "",
  ...props
}: IProps) => {
  const Comp = tag;
  return (
    <Comp className={cn("flex flex-col gap-6", className)} {...props}>
      {children}
    </Comp>
  );
};
