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
        "first-letter:capitalize transition-[width] duration-1000 overflow-hidden whitespace-nowrap text-destructive text-sm tracking-wide mt-0.5 text-start ms-1",
        error ? "w-full" : "w-0",
        !noPopOut && "absolute"
      )}
    >
      {error?.message ?? ""}
    </div>
  );
}
