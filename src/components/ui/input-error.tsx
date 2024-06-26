import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type PropTypes = {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<{}>> | undefined;
};

export function InputError({ error }: PropTypes) {
  if (!error) return null;
  return (
    <div className="animate-fade text-destructive text-sm tracking-wide mt-0.5 text-start ms-1">
      <span>{error.message}</span>
    </div>
  );
}
