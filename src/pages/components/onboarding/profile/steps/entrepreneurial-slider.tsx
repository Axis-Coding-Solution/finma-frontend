import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";

const cards = [
  {
    title: "Early Stage Dreamer",
    description: "I have a great idea and am looking to explore its potential",
  },
  {
    title: "Aspiring Entrepreneurs",
    description:
      "I'm eager to start a business but need guidance to get started",
  },
  {
    title: "Startup Builder",
    description: "I'm developing a startup and working on its launch",
  },
  {
    title: "Growth Seeker",
    description:
      "My startup is up and running, and I'm focused on scaling and growing it",
  },
  {
    title: "Serial Entrepreneur",
    description: "I've started multiple businesses and aim to keep innovating",
  },
  {
    title: "Tech Innovator",
    description: "I'm focused on developing cutting-edge technology solutions",
  },
  {
    title: "Market Strategists",
    description:
      "I excel at spotting market opportunities and crafting success strategies",
  },
  {
    title: "Impact Creator",
    description:
      "I'm driven by creating social or environmental impact through my ventures",
  },
  {
    title: "Creative Visionary",
    description:
      "I excel at turning creative ideas into innovative business models",
  },
  {
    title: "Regional Pioneer",
    description: "I'm committed to pioneering startup success in my community",
  },
];


const expertCard = [
  {
    title: "Idea Validation",
    description: "I have a great idea and am looking to explore its potential",
    title1: "M1",
  },
  {
    title: "Market Validation",
    description:
      "I'm eager to start a business but need guidance to get started",
    title1: "M2",
  },
  {
    title: "Building the MVP",
    description: "I'm developing a startup and working on its launch",
    title1: "M3",
  },
  {
    title: "Growth and Customer Acquisition",
    description:
      "My startup is up and running, and I'm focused on scaling and growing it",
    title1: "M4",
  },

  {
    title: "Design and Branding",
    description: "I've started multiple businesses and aim to keep innovating",
    title1: "M5",
  },
  {
    title: "Product Development",
    description: "I'm focused on developing cutting-edge technology solutions",
    title1: "M6",
  },
  {
    title: "Business Model & Revenue Generation",
    description:
      "I excel at spotting market opportunities and crafting success strategies",
    title1: "M7",
  },
  {
    title: "Fundraising and Investor Pitching",
    description:
      "I'm driven by creating social or environmental impact through my ventures",
    title1: "M8",
  },
  {
    title: "Team Building and Management",
    description:
      "I excel at turning creative ideas into innovative business models",
    title1: "M9",
  },
  {
    title: "Legal and Operations",
    description: "I'm committed to pioneering startup success in my community",
    title1: "M10",
  },
  {
    title: "Customer Retention and Engagement ",
    description: "I'm committed to pioneering startup success in my community",
    title1: "M11",
  },
  {
    title: "Networking and Community Building",
    description: "I'm committed to pioneering startup success in my community",
    title1: "M12",
  },
];

export const EntrepreneurialSlider = ({ Controller, control, role }: any) => {
  return (
    <Controller
      control={control}
      name="entrepreneurType"
      render={({ field }: any) => (
        <div className="sm:mt-8 mt-2 flex gap-2 items-center flex-wrap">
          {role == "innovator" &&
            cards &&
            cards.map((card, idx) => (
              <>
                <TooltipProvider>
                  <Tooltip delayDuration={150}>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={() => field.onChange(card.title)}
                        type="button"
                        variant={
                          field.value === card.title
                            ? "outline-info"
                            : "outline"
                        }
                        key={idx}
                      >
                        {card.title}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="rounded-sm max-w-[300px] p-4 relative">
                      <div className="text-foreground text-base">
                        {card.description}
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </>
            ))}
          {role == "expert" &&
            expertCard &&
            expertCard.map((card1, idx) => (
              <>
                <TooltipProvider>
                  <Tooltip delayDuration={150}>
                    <TooltipTrigger asChild>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => field.onChange(card1.title)}
                          variant={
                            field.value === card1.title
                              ? "outline-info"
                              : "outline"
                          }
                          type="button"
                          size="middle"
                          key={idx}
                        >
                            {card1.title1}{" : "}
                            {card1.title}
                        </Button>
                      </div>
                    </TooltipTrigger>
                    {/* <TooltipContent className="rounded-sm min-w-[200px] p-4 relative"> */}
                    {/* <div className="text-foreground text-base"> */}
                    {/* {card1.description} */}
                    {/* </div> */}
                    {/* </TooltipContent> */}
                  </Tooltip>
                </TooltipProvider>
              </>
            ))}
          {role == "mentor" &&
            expertCard &&
            expertCard.map((card1, idx) => (
              <>
                <TooltipProvider>
                  <Tooltip delayDuration={150}>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={() => field.onChange(card1.title)}
                        type="button"
                        variant={
                          field.value === card1.title
                            ? "outline-info"
                            : "outline"
                        }
                        key={idx}
                      >
                        {card1.title}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="rounded-sm min-w-[200px] p-4 relative">
                      <div className="text-foreground text-base">
                        {card1.description}
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </>
            ))}
        </div>
      )}
    />
  );
};
