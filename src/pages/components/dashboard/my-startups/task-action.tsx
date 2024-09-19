import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui";
import { CheckboxGroup } from "../../common";
import { Plus } from "lucide-react";
import {
  IDEA_VALIDATION_PROJECT_QUERY_KEY,
  MARKET_RESEARCH_QUERY_KEY,
  useUpdateTaskAction,
} from "@/api/hooks/dashboard";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { cn, errorToast, successToast } from "@/utils";

const taskAction = ["Force Validation", "Publish this task"];

export const TaskActionDropdown = ({
  id,
  type,
  addedTasks,
}: {
  id: string;
  type: string;
  addedTasks: string[];
}) => {
  const { mutateAsync, isPending } = useUpdateTaskAction();
  const queryClient = useQueryClient();
  const { id: projectId } = useParams();

  queryClient.isFetching;

  const handleCheckboxChange = async (checked: boolean, value: string) => {
    const mode = checked ? "add" : "delete";
    const data = {
      action: value,
      mode,
      id,
      type,
    };
    try {
      await mutateAsync(data);
      queryClient.invalidateQueries({
        queryKey: [
          type === "marketResearch"
            ? MARKET_RESEARCH_QUERY_KEY
            : IDEA_VALIDATION_PROJECT_QUERY_KEY,
          projectId,
        ],
      });
      successToast("Task actions updated successfully!");
    } catch (error) {
      errorToast("Failed to update task actions");
    }
  };

  const findIfChecked = (value: string) =>
    addedTasks.some((item) => item === value);

  const isFetching =
    queryClient.isFetching({
      queryKey: [
        type === "marketResearch"
          ? MARKET_RESEARCH_QUERY_KEY
          : IDEA_VALIDATION_PROJECT_QUERY_KEY,
        projectId,
      ],
    }) > 0;

  return (
    <div className="flex flex-col 2xl:gap-2 gap-1">
      <h6 className="text-foreground 2xl:text-base text-sm font-medium">
        Task action
      </h6>
      <div className="flex items-center gap-2">
        {addedTasks?.map((item: string, idx: number) => (
          <Button
            key={idx}
            variant="outline"
            size="xs"
            className={cn(
              "2xl:text-lg text-sm bg-transparent",
              idx % 2 === 0
                ? "border-info text-info"
                : "border-warning text-warning"
            )}
          >
            {item}
          </Button>
        ))}
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
                    taskAction.map((item, idx: number) => (
                      <CheckboxGroup
                        key={idx}
                        label={item}
                        disabled={isPending || isFetching}
                        checked={findIfChecked(item)}
                        onCheckedChange={(e: any) => {
                          handleCheckboxChange(e, item);
                        }}
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
