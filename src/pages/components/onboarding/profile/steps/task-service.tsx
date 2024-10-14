import { CreateAbleInput, InputError } from "@/components/ui";

export const OnboardingTaskServiceStep = ({ errors, control, name }: any) => {
  return (
    <div className="w-1/2">
      <CreateAbleInput label="Add a service" control={control} name={name} />
      <InputError error={errors[name]} />
    </div>
  );
};
