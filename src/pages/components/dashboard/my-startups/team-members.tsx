import {
  useCreateTeamMembers,
  useRemoveTeamMembers,
} from "@/api/hooks/dashboard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui";
import { Plus, X } from "lucide-react";
import { useState } from "react";

interface TeamMember {
  label: string;
  subLabel: string;
}

const cardTeam = [
  {
    label: "Abdul Gorid",
    subLabel: "card owner",
  },
  {
    label: "Kilian Loud",
    subLabel: "Serial Entrepreneur",
  },
  {
    label: "John Doe",
    subLabel: "Serial Entrepreneur",
  },
  {
    label: "martha hammer",
    subLabel: "Serial Entrepreneur",
  },
  {
    label: "julia doe",
    subLabel: "Serial Entrepreneur",
  },
];

export const TeamMembersDropdown = () => {
  const [addTeam, setAddTeam] = useState<TeamMember[]>([]);
  const [proposedTeam, setProposedTeam] = useState<TeamMember[]>(cardTeam);

  const { mutateAsync: addTeamMember } = useCreateTeamMembers();
  const { mutateAsync: removeTeamMember } = useRemoveTeamMembers();

  const handleAddMember = async (member: any) => {
    setAddTeam([...addTeam, member]);
    setProposedTeam(proposedTeam.filter((item) => item.label !== member.label));
    try {
      await addTeamMember(member);
      console.log("Team member added successfully");
    } catch (error) {
      console.error("Failed to add team member", error);
    }
  };
  const handleRemoveMember = async (member: any) => {
    setProposedTeam([...proposedTeam, member]);
    setAddTeam(addTeam.filter((item: any) => item.label !== member.label));
    try {
      await removeTeamMember(member);
      console.log("Team member removed successfully");
    } catch (error) {
      console.error("Failed to remove team member", error);
    }
  };

  return (
    <div className="flex flex-col 2xl:gap-2 gap-1">
      <h6 className="text-foreground 2xl:text-base text-sm font-medium">
        Team members
      </h6>
      <div className={`flex items-center relative ${addTeam.length > 0 ? "-space-x-2" : ""}`}>
        {addTeam.length === 0 ? (
          <span className="text-sm"></span>
        ) : (
          addTeam.map((item: any, index: number) => (
            <div
              key={index}
              className={`border ${
                index % 2 === 0 ? "bg-[#FEA946]" : "bg-[#00569E]"
              } 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase`}
            >
              {item.label[0]}
              {item.label[1]}
            </div>
          ))
        )}
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
            <div className="w-[300px] h-[230px] 2xl:p-5 p-3 flex flex-col 2xl:gap-5 gap-3">
              <h6 className="text-foreground 2xl:text-[22px] text-lg font-medium">
                Card team{" "}
                <span className="text-muted-text text-base font-normal">
                  ({addTeam.length})
                </span>
              </h6>
              <div className="custom-scrollbar-warning h-full overflow-y-auto flex flex-col 2xl:gap-5 gap-4 pr-2">
                {addTeam.length === 0 ? (
                  <span className="text-sm text-center">Team not added</span>
                ) : (
                  addTeam.map((item: any) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div className="bg-[#FEA946] 2xl:w-8 w-6 2xl:h-8 h-6 2xl:text-sm text-xs font-normal flex justify-center items-center rounded-full text-background uppercase">
                          {item.label[0]}
                          {item.label[1]}
                        </div>
                        <div className="text-foreground">
                          <h6 className="text-sm font-medium leading-0 capitalize">
                            {item.label}
                          </h6>
                          <h6 className="text-xs font-normal text-muted-text -mt-1 capitalize">
                            {item.subLabel}
                          </h6>
                        </div>
                      </div>
                      <X
                        size={22}
                        className="bg-danger/20 hover:bg-danger p-1 rounded-full text-background"
                        onClick={() => handleRemoveMember(item)}
                      />
                    </div>
                  ))
                )}
                <h6 className="text-muted-text text-base">Proposal to add:</h6>
                {proposedTeam.length === 0 ? (
                  <span className="text-sm text-center">No proposals</span>
                ) : (
                  proposedTeam.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div className="bg-[#FEA946] 2xl:w-8 w-6 2xl:h-8 h-6 2xl:text-sm text-xs font-normal flex justify-center items-center rounded-full text-background uppercase">
                          {item.label[0]}
                          {item.label[1]}
                        </div>
                        <div className="text-foreground">
                          <h6 className="text-sm font-medium leading-0 capitalize">
                            {item.label}
                          </h6>
                          <h6 className="text-xs font-normal text-muted-text -mt-1 capitalize">
                            {item.subLabel}
                          </h6>
                        </div>
                      </div>
                      <Plus
                        size={22}
                        className="bg-secondary-dark/40 hover:bg-secondary-dark p-1 rounded-full text-background"
                        onClick={() => handleAddMember(item)}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
