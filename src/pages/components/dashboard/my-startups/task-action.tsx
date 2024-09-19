import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui";
import { CheckboxGroup } from "../../common";
import { Plus } from "lucide-react";
import { useCreateTaskAction } from "@/api/hooks/dashboard";
import { useState } from "react";

const taskAction = [
  {
    value: "forceValidation",
    label: "Force Validation",
  },
  {
    value: "publishThisTask",
    label: "Publish this task",
  },
];

export const TaskActionDropdown = () => {
  const { mutateAsync } = useCreateTaskAction();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = async (e: any, item: any) => {
    console.log("e: ", e, item);

    const checked = e.target.checked;
    const value = item.value;
    let newSelectedOptions;
    if (checked) {
      newSelectedOptions = [...selectedOptions, value];
    } else {
      newSelectedOptions = selectedOptions.filter((option) => option !== value);
    }
    setSelectedOptions(newSelectedOptions);

    try {
      console.log("Making API call with payload:", newSelectedOptions);
      await mutateAsync(newSelectedOptions);
      console.log("Task actions updated successfully");
    } catch (error) {
      console.error("Failed to update task actions", error);
    }
  };

  return (
    <div className="flex flex-col 2xl:gap-2 gap-1">
      <h6 className="text-foreground 2xl:text-base text-sm font-medium">
        Task action
      </h6>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="xs"
          className="2xl:text-lg text-sm border-[#EE8204] text-[#EE8204] bg-transparent"
        >
          Force validation
        </Button>
        <Button
          variant="outline-info"
          size="xs"
          className="2xl:text-lg text-sm"
        >
          Publish this task
        </Button>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                role="button"
                className="border bg-background 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase"
              >
                <Plus className="text-foreground" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="w-[200px] max-h-[230px] 2xl:p-5 p-3 flex flex-col 2xl:gap-5 gap-3">
                <h6 className="text-foreground 2xl:text-[22px] text-lg font-medium">
                  Task action
                </h6>
                <div className="custom-scrollbar-secondary h-full overflow-y-auto flex flex-col 2xl:gap-5 gap-3 p-0.5">
                  {taskAction &&
                    taskAction.map((item) => (
                      <CheckboxGroup
                        key={item.label}
                        label={item.label}
                        onCheckedChange={(e: any) =>
                          handleCheckboxChange(e, item)
                        }
                      />
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
