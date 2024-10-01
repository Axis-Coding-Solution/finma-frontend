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

export const EntrepreneurialSlider = ({ Controller, control }: any) => {
  return (
    <Controller
      control={control}
      name="entrepreneurType"
      render={({ field }: any) => (
        <div className="mt-8 flex gap-2 items-center flex-wrap">
          {cards &&
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
                    <TooltipContent className="rounded-sm min-w-[200px] p-4 relative">
                      <div className="text-foreground text-base">
                        {card.description}
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
