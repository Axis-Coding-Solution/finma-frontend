import * as React from "react";

import { cn } from "@/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="w-full">
      <input
        type={type}
        className={cn(
          "flex  w-full rounded-md ring-1 ring-border bg-background md:px-5 py-3 px-3   file:bg-transparent md:text-sm text-xs file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed",
          className
        )}
        ref={ref}
        placeholder="Search"
        {...props}
      />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
