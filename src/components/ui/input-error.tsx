import { cn } from "@/utils";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type PropTypes = {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<{}>> | undefined;
  noPopOut?: boolean | undefined;
};

export function InputError({ error, noPopOut = false }: PropTypes) {
  // if (!error) return null;
  return (
    <div
      className={cn(
        "first-letter:capitalize transition-[width] duration-1000 overflow-hidden whitespace-nowrap text-destructive sm:text-sm text-xs tracking-wide mt-0.5 text-start ms-1 truncate",
        error ? "w-full" : "w-0",
        !noPopOut && "sm:absolute static"
      )}
    >
      {error?.message ?? ""}
    </div>
  );
}
