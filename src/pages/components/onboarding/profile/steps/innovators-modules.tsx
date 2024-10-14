import { Button, InputError } from "@/components/ui";

const buttonsData = [
  {
    title: "Idea Validation",
    description: "I have a great idea and am looking to explore its potential",
  },
  {
    title: "Market Validation",
    description:
      "I'm eager to start a business but need guidance to get started",
  },
  {
    title: "Building the MVP",
    description: "I'm developing a startup and working on its launch",
  },
  {
    title: "Growth and Customer Acquisition",
    description:
      "My startup is up and running, and I'm focused on scaling and growing it",
  },

  {
    title: "Design and Branding",
    description: "I've started multiple businesses and aim to keep innovating",
  },
  {
    title: "Product Development",
    description: "I'm focused on developing cutting-edge technology solutions",
  },
  {
    title: "Business Model & Revenue Generation",
    description:
      "I excel at spotting market opportunities and crafting success strategies",
  },
  {
    title: "Fundraising and Investor Pitching",
    description:
      "I'm driven by creating social or environmental impact through my ventures",
  },
  {
    title: "Team Building and Management",
    description:
      "I excel at turning creative ideas into innovative business models",
  },
  {
    title: "Legal and Operations",
    description: "I'm committed to pioneering startup success in my community",
  },
  {
    title: "Customer Retention and Engagement ",
    description: "I'm committed to pioneering startup success in my community",
  },
  {
    title: "Networking and Community Building",
    description: "I'm committed to pioneering startup success in my community",
  },
];

export const OnboardingInnovatorsModulesStep = ({
  Controller,
  control,
  name,
  errors,
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
      <InputError error={errors[name]} />
      <Controller
        control={control}
        name={name}
        render={({ field }: any) => (
          <div className="mt-8 flex gap-2 items-center flex-wrap">
            {buttonsData &&
              buttonsData.map((item, idx) => (
                <div className="flex gap-2" key={idx}>
                  <Button
                    onClick={() => handleClickOnButton(item.title, field)}
                    variant={
                      field.value.includes(item.title)
                        ? "outline-info"
                        : "outline"
                    }
                    type="button"
                    size="middle"
                  >
                    {`M${idx + 1}`}
                  </Button>
                  <Button
                    onClick={() => handleClickOnButton(item.title, field)}
                    variant={
                      field.value.includes(item.title)
                        ? "outline-info"
                        : "outline"
                    }
                    type="button"
                    size="middle"
                  >
                    {item.title}
                  </Button>
                </div>
              ))}
          </div>
        )}
      />
    </div>
  );
};
