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
  const [addTeam, setAddTeam] = useState<any>([]);
  const [proposedTeam, setProposedTeam] = useState<TeamMember[]>(cardTeam);

  const handleToggleMember = (member: any) => {
    if (addTeam.includes(member)) {
      setProposedTeam([...proposedTeam, member]);
      setAddTeam(addTeam.filter((item: any) => item.label !== member.label));
    } else {
      setAddTeam([...addTeam, member]);
      setProposedTeam(
        proposedTeam.filter((item) => item.label !== member.label)
      );
    }
  };
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
                    onClick={() => handleToggleMember(item)}
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
                    onClick={() => handleToggleMember(item)}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
