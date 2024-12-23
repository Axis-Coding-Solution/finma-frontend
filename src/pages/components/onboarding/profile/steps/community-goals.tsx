import { Button, InputError } from "@/components/ui";

const goals = [
  "Networking with other founders",
  "Seeking mentorship",
  "Gaining market insights",
  "Finding co-founders or team members",
  "Learning new skills",
  "Other",
];

export const OnboardingCommunityGoalsStep = ({
  errors,
  control,
  Controller,
}: any) => {
  const handleClickOnButton = (goal: string, field: any) => {
    if (field.value?.includes(goal)) {
      field.onChange(field.value.filter((item: string) => item !== goal));
    } else {
      field.onChange([...field.value, goal]);
    }
  };

  return (
    <div>
      <InputError error={errors.communityGoals} />
      <Controller
        name="communityGoals"
        control={control}
        render={({ field }: any) => (
          <div className="sm:mt-8 mt-2 flex gap-2 items-center flex-wrap">
            {goals.map((goal, idx) => (
              <Button
                onClick={() => handleClickOnButton(goal, field)}
                type="button"
                variant={
                  field.value?.includes(goal) ? "outline-info" : "outline"
                }
                key={idx}
              >
                {goal}
              </Button>
            ))}
          </div>
        )}
      />
    </div>
  );
};
