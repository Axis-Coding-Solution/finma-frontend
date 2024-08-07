import * as React from "react";
import shineStar from "@/assets/svgs/shine-star.svg";
import { cn } from "@/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  showIcon?: boolean;
  icon?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, showIcon = false, icon = shineStar, ...props }, ref) => {
    const WrapperTag = showIcon ? "div" : React.Fragment;
    return (
      <WrapperTag {...(showIcon ? { className: "relative" } : {})}>
        {showIcon && (
          <img
            src={icon}
            alt="Text area icon"
            className="h-8 w-8 absolute right-2 top-2"
          />
        )}
        <textarea
          className={cn(
            "flex w-full h-32 rounded-3xl ring-1 ring-border bg-background pl-5 pr-10 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </WrapperTag>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
