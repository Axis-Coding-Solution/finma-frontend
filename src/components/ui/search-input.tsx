import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/utils";

export interface SearchInputProps
  extends React.HTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        <input
          type="search"
          placeholder="Search"
          className={cn(
            "transition peer flex w-auto rounded-md ring-1 ring-border bg-background pl-10 md:pr-5 py-2  pr-3 file:bg-transparent md:text-sm text-xs file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed",
            className
          )}
          ref={ref}
          {...props}
        />
        <Search
          size="20"
          className="transition peer-focus:text-ring text-secondary absolute left-2"
        />
      </div>
    );
  }
);
SearchInput.displayName = "SearchInput";

export { SearchInput };
