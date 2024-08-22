import { Checkbox, Label } from "@/components/ui";
import  { useId } from "react";

export const CheckboxGroup = ({
  label = "Label text",
  ...props
}: any) => {
  const id = useId();
  return (
    <div className="flex gap-2 items-center">
      <Checkbox id={id} {...props} />
      <Label className="text-sm" htmlFor={id} type="checkbox">
        {label}
      </Label>
    </div>
  );
};
