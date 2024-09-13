import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui";
import { CheckboxGroup } from "../../common";
import { Plus } from "lucide-react";


const taskAction = [
    {
      label: "Force Validation",
    },
    {
      label: "Publish this task",
    },
    {
      label: "Force Validation",
    },
    {
      label: "Publish this task",
    },
    {
      label: "Force Validation",
    },
    {
      label: "Publish this task",
    },
    {
      label: "Force Validation",
    },
    {
      label: "Publish this task",
    },
  ];

export const TaskActionDropdown = ()=>{
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            role="button"
            className="bg-background 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase"
          >
            <Plus className="text-foreground" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <div className="w-[300px] h-[230px] 2xl:p-5 p-3 flex flex-col 2xl:gap-5 gap-3">
            <h6 className="text-foreground 2xl:text-[22px] text-lg font-medium">
              Task action
            </h6>
            <div className="custom-scrollbar-secondary h-full overflow-y-auto flex flex-col 2xl:gap-5 gap-3 p-0.5">
              {taskAction &&
                taskAction.map((item) => (
                  <CheckboxGroup  label={item.label} />
                ))}
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}