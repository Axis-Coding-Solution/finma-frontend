import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  RadioButton,
} from "@/components/ui";
import { ChevronDown } from "lucide-react";

const cardStatus = [
  {
    value: "taskdelivered",
    label: "Task Delivered",
  },
  {
    value: "deliveredByCommunity",
    label: "Delivered by community",
  },
  {
    value: "underReview",
    label: "Under review",
  },
  {
    value: "taskPublished",
    label: "Task Published",
  },
];

export const CardStatusDropdown = () => {
  return (
    <div className="flex flex-col 2xl:gap-2 gap-1">
      <h6 className="text-foreground 2xl:text-base text-sm font-medium">
        Card Status
      </h6>
      <div className="flex items-center gap-2">
        <div className="min-w-max px-3 py-1 2xl:text-base text-sm rounded-full bg-secondary-dark">
          Delivered by Adam on Sep 20, 2024
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                role="button"
                className="border w-12 h-6 bg-background flex flex-1 justify-center rounded-full"
              >
                <ChevronDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="w-[300px]  2xl:p-5 p-3 flex flex-col 2xl:gap-5 gap-3">
                <h6 className="text-foreground 2xl:text-[22px] text-lg font-medium">
                  Card Status
                </h6>
                <div className="custom-scrollbar-warning h-full overflow-y-auto flex flex-col 2xl:gap-5 gap-3 p-0.5">
                  {cardStatus &&
                    cardStatus.map((item) => (
                      <div className="flex gap-3 items-start">
                        <RadioButton
                          hideLabel
                          id={item.value}
                          size="sm"
                          color="warning"
                          value={item.value}
                        />
                        <label
                          className="leading-0 text-foreground 2xl:text-xl text-base font-normal -mt-1 cursor-pointer"
                          htmlFor={item.value}
                        >
                          {item.label}
                        </label>
                      </div>
                    ))}
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
