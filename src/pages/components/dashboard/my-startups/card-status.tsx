import {
  IDEA_VALIDATION_PROJECT_QUERY_KEY,
  MARKET_RESEARCH_QUERY_KEY,
  useUpdateCardStatus,
} from "@/api/hooks/dashboard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  RadioButton,
} from "@/components/ui";
import { errorToast, successToast } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import { useParams } from "react-router-dom";

const cardStatus = [
  "Task Delivered",
  "Delivered by community",
  "Under review",
  "Task Published",
];

export const CardStatusDropdown = ({
  id,
  type,
  addedStatus,
}: {
  id: string;
  type: string;
  addedStatus: string;
}) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useUpdateCardStatus();
  const { id: projectId } = useParams();

  const handleRadioChange = async (status: string) => {
    try {
      await mutateAsync({ status, id, type });
      successToast("Card status updated successfully!");
      queryClient.invalidateQueries({
        queryKey: [
          type === "marketResearch"
            ? MARKET_RESEARCH_QUERY_KEY
            : IDEA_VALIDATION_PROJECT_QUERY_KEY,
          projectId,
        ],
      });
    } catch (error) {
      errorToast("Failed to update card status!");
    }
  };

  const isFetching =
    queryClient.isFetching({
      queryKey: [
        type === "marketResearch"
          ? MARKET_RESEARCH_QUERY_KEY
          : IDEA_VALIDATION_PROJECT_QUERY_KEY,
        projectId,
      ],
    }) > 0;

  const findIfChecked = (value: string) => value === addedStatus;
  return (
    <div className="flex flex-col 2xl:gap-2 gap-1">
      <h6 className="text-foreground 2xl:text-base text-sm font-medium">
        Card Status
      </h6>
      <div className="flex items-center gap-2">
        {addedStatus && (
          <div className="min-w-max px-3 py-1 2xl:text-base text-sm rounded-full bg-secondary-dark">
            {addedStatus}
          </div>
        )}
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
              <div className="w-[250px] max-h-[230px] 2xl:p-5 p-3 flex flex-col 2xl:gap-5 gap-3">
                <h6 className="text-foreground 2xl:text-[22px] text-lg font-medium">
                  Card Status
                </h6>
                <div className="custom-scrollbar-warning h-full overflow-y-auto flex flex-col 2xl:gap-5 gap-3 p-0.5">
                  {cardStatus &&
                    cardStatus.map((item, idx) => (
                      <div className="flex gap-3 items-start" key={idx}>
                        <RadioButton
                          hideLabel
                          id={`status-${idx + 1}`}
                          size="sm"
                          color="warning"
                          disabled={isPending || isFetching}
                          value={item}
                          checked={findIfChecked(item)}
                          onChange={() => handleRadioChange(item)}
                        />
                        <label
                          className="leading-0 text-foreground 2xl:text-xl text-base font-normal -mt-1 cursor-pointer"
                          htmlFor={`status-${idx + 1}`}
                        >
                          {item}
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
