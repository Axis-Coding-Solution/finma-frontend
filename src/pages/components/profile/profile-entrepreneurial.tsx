import { RadioButton } from "@/components/ui";

const labelOptions = [
  {
    label: "Early-Stage Dreamer",
    subLabel: "I have a great idea and am looking to explore its potential",
  },
  {
    label: "Aspiring Entrepreneur",
    subLabel: "I'm eager to start a business but need guidance to get started",
  },
  {
    label: "Startup Builder",
    subLabel: "I’m developing a startup and working on its launch",
  },
  {
    label: "Early-Stage Dreamer",
    subLabel: "I have a great idea and am looking to explore its potential",
  },
];

export const ProfileEntrepreneurial = () => {
  return (
    <div>
      <p className="text-foreground 2xl:text-2xl text-lg 2xl:leading-7 leading-6">
        Select your entrepreneurial stage
      </p>
      <div className="custom-scrollbar-warning flex flex-col 2xl:gap-6 gap-4 2xl:mt-10 mt-6 2xl:h-[240px] h-[180px] overflow-y-auto px-0.5 2xl:py-4 py-2">
        {labelOptions &&
          labelOptions.map((item) => (
            <div className="flex gap-3 items-start">
              <RadioButton
                hideLabel
                id="select-legal"
                size="sm"
                color="warning"
              />
              <label
                className="leading-0 text-foreground 2xl:text-xl text-lg font-normal -mt-1"
                htmlFor="select-legal"
              >
                {item.label}
                <p className="2xl:text-base text-sm font-normal leading-5">
                 {item.subLabel}
                </p>
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};
