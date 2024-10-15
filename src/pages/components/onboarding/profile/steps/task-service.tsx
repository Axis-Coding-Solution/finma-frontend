import { CreateAbleInput, InputError } from "@/components/ui";

export const OnboardingTaskServiceStep = ({ errors, control, name }: any) => {
  console.log("qqqqqqqqqqq", name);

  return (
    <div className="w-1/2">
      <CreateAbleInput
        label={`Add ${
          name === "investmentInterests" ? "an interest" : "a service"
        }`}
        control={control}
        name={name}
      />
      <InputError error={errors[name]} />
    </div>
  );
};
