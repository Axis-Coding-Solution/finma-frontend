import {
  STARTUPS_QUERY_KEY,
  TEAM_MEMBER_QUERY_KEY,
  useGetTeamMembers,
  useUpdateTeamMembers,
} from "@/api/hooks/dashboard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui";
import { successToast } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { Plus, X } from "lucide-react";
import { AvatarGroup } from "../../common";

export const TeamMembersDropdown = ({
  id,
  type,
}: {
  id: string;
  type: string;
}) => {
  const {
    data: teamsData,
    isLoading,
    isFetching,
  } = useGetTeamMembers(id, type);
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useUpdateTeamMembers();

  const handleAddMember = async (member: any) => {
    try {
      const data = {
        userId: member.value,
        mode: "add",
        type,
        id: id,
      };
      await mutateAsync(data);
      successToast("Team member added successfully");
      queryClient.invalidateQueries({
        queryKey: [TEAM_MEMBER_QUERY_KEY, id, type],
      });
      if (type === "startup") {
        queryClient.refetchQueries({
          queryKey: [STARTUPS_QUERY_KEY],
          exact: true,
        });
      }
    } catch (error) {}
  };
  const handleRemoveMember = async (member: any) => {
    const data = {
      userId: member.value,
      mode: "delete",
      type,
      id: id,
    };
    try {
      await mutateAsync(data);
      queryClient.invalidateQueries({
        queryKey: [TEAM_MEMBER_QUERY_KEY, id, type],
      });
      if (type === "startup") {
        queryClient.refetchQueries({
          queryKey: [STARTUPS_QUERY_KEY],
          exact: true,
        });
      }
      successToast("Team member removed successfully");
    } catch (error) {}
  };

  return (
    <div className="flex flex-col 2xl:gap-2 gap-1">
      <h6 className="text-foreground 2xl:text-base text-sm font-medium">
        Team members
      </h6>
      <div
        className={`flex items-center relative ${
          teamsData?.members?.length > 0 ? "-space-x-2" : "space-x-2"
        }`}
      >
        <AvatarGroup team={teamsData?.members} />
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
            <div className="2xl:w-[300px] w-[250px] 2xl:max-h-[400px] max-h-[300px] 2xl:p-5 p-3 flex flex-col 2xl:gap-5 gap-2">
              <h6 className="text-foreground 2xl:text-[22px] text-lg font-medium">
                Card team{" "}
                <span className="text-muted-text text-base font-normal">
                  ({teamsData?.members?.length ?? 0})
                </span>
              </h6>
              <div className="custom-scrollbar-warning h-full overflow-y-auto flex flex-col 2xl:gap-5 gap-2 pr-2">
                {teamsData?.members?.length === 0 ? (
                  <span className="text-sm text-center">Team not added</span>
                ) : (
                  teamsData?.members?.map((item: any, index: number) => (
                    <div
                      key={item.value}
                      className="flex items-center gap-4 justify-between"
                    >
                      <div className="flex items-start gap-2">
                        <div
                          className={`mt-1 2xl:min-w-8 min-w-6 2xl:h-8 h-6 2xl:text-sm text-xs font-normal flex justify-center items-center rounded-full text-background uppercase ${
                            index % 2 === 0 ? "bg-[#FEA946]" : "bg-[#00569E]"
                          }`}
                        >
                          {item.label[0]}
                          {item.label[1]}
                        </div>
                        <div className="text-foreground">
                          <h6 className="text-sm font-medium leading-0 capitalize">
                            {item.label}
                          </h6>
                          <h6 className="text-xs font-normal text-muted-text -mt-1 capitalize">
                            {item.entrepreneurType}
                          </h6>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="inline-flex justify-center items-center min-h-6 min-w-6 bg-danger/20 hover:bg-danger rounded-full text-background disabled:bg-danger/50 disabled:cursor-not-allowed"
                        disabled={isPending || isLoading || isFetching}
                        onClick={() => handleRemoveMember(item)}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))
                )}
                <h6 className="text-muted-text 2xl:text-base text-sm">
                  Proposal to add:
                </h6>
                {teamsData?.availableMembers?.length === 0 ? (
                  <span className="text-sm text-center">No proposals</span>
                ) : (
                  teamsData?.availableMembers?.map(
                    (item: any, index: number) => (
                      <div
                        key={item.value}
                        className="flex items-center gap-4 justify-between"
                      >
                        <div className="flex items-start gap-2">
                          <div
                            className={`mt-1 2xl:min-w-8 min-w-6 2xl:h-8 h-6 2xl:text-sm text-xs font-normal flex justify-center items-center rounded-full text-background uppercase ${
                              index % 2 === 0 ? "bg-[#FEA946]" : "bg-[#00569E]"
                            }`}
                          >
                            {item.label[0]}
                            {item.label[1]}
                          </div>
                          <div className="text-foreground">
                            <h6 className="text-sm font-medium leading-0 capitalize">
                              {item.label}
                            </h6>
                            <h6 className="text-xs font-normal text-muted-text -mt-1 capitalize">
                              {item?.entrepreneurType}
                            </h6>
                          </div>
                        </div>
                        <button
                          type="button"
                          disabled={isPending || isLoading || isFetching}
                          className="inline-flex justify-center items-center min-h-6 min-w-6 bg-secondary-dark hover:bg-secondary rounded-full text-foreground disabled:bg-secondary-dark/50 disabled:cursor-not-allowed"
                          onClick={() => handleAddMember(item)}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    )
                  )
                )}
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
