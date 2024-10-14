import { CreateAbleInput } from "@/components/ui";

export const OnboardingTaskServiceStep = ({
  Controller,
  control,
  name,
}: any) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }: any) => (
        <div className="w-1/2">
          <CreateAbleInput
            {...field}
            onChange={(e) => {
              field.onChange(e);
            }}
            label="Add a service"
          />
        </div>
      )}
    />
  );
};
