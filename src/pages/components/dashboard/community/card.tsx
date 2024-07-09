import { Avatar } from "@/components/ui/avatar";
import { AngryEmoji } from "@/assets/svgs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CommunityTypes } from "@/definitions/types";
import { Link } from "react-router-dom";

export const CommunityCard = ({
  id,
  name,
  profilePicture,
  role,
  communityGoals,
  entrepStage,
}: CommunityTypes) => {
  return (
    <div className="flex flex-wrap justify-between gap-2 bg-muted p-4 rounded-lg">
      {/* Avatar Section  */}
      <div className="flex items-center gap-4">
        <Avatar image={profilePicture} size="lg" />
        <div className="flex flex-col">
          <span className="text-foreground text-xs capitalize">{role}</span>
          <h4 className="text-foreground font-medium text-base">{name}</h4>
          <p className="text-muted-foreground text-sm">{entrepStage}</p>
        </div>
      </div>
      {/* Status Section  */}
      <div className="flex flex-col gap-2">
        <h6 className="text-foreground font-semibold ">Status</h6>
        <span className="flex items-center text-muted-foreground gap-1 text-sm">
          <img src={AngryEmoji} />
          Building a new feature
        </span>
      </div>
      {/* Community Goals Section  */}
      <div className="flex flex-col gap-2">
        <h6 className="text-foreground font-semibold">Community goal</h6>
        <div className="flex items-center gap-[2px]">
          {communityGoals ? (
            communityGoals.map((goal, idx) => (
              <Badge key={idx} variant="outline-info">
                {goal}
              </Badge>
            ))
          ) : (
            <Badge variant="outline">N/A</Badge>
          )}
        </div>
      </div>
      {/* Open Projects Section  */}
      <div className="flex flex-col gap-2">
        <h6 className="text-foreground font-semibold">Open projects</h6>
        <span className="text-success self-center underline text-sm">4</span>
      </div>
      {/* chat Button Section  */}
      <div className="flex items-center justify-center">
        <Button tag={Link} to={`/dashboard/chats/${id}`} color="dark">
          Chat
        </Button>
      </div>
    </div>
  );
};
