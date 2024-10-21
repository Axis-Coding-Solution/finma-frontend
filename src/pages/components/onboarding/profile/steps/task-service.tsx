import { CreateAbleInput, InputError } from "@/components/ui";

export const OnboardingTaskServiceStep = ({ errors, control, name }: any) => {

  return (
    <div className="md:w-1/2 w-full">
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
