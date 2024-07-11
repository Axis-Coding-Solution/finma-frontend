import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CommunityTypes } from "@/definitions/types";
import { Link } from "react-router-dom";
import { userAvatar1Image } from "@/assets/images";

export const CommunityCard = ({
  id,
  name,
  profilePicture,
  role,
  communityGoals,
  status,
  entrepStage,
}: CommunityTypes) => {
  return (
    <div className="grid grid-cols-12 bg-muted p-4 rounded-lg gap-2">
      {/* Avatar Section  */}
      <div className="flex items-center gap-4 col-span-3">
        <Avatar
          image={profilePicture ? profilePicture : userAvatar1Image}
          size="lg"
        />
        <div className="flex flex-col">
          <span className="text-foreground text-xs capitalize">{role}</span>
          <h4 className="text-foreground font-medium text-base">{name}</h4>
          <p className="text-muted-foreground text-sm">{entrepStage}</p>
        </div>
      </div>
      {/* Status Section  */}
      <div className="flex flex-col gap-2 col-span-2">
        <h6 className="text-foreground font-semibold ">Status</h6>
        <span className="flex items-center text-muted-foreground gap-1 text-sm">
          {status}
        </span>
      </div>
      {/* Community Goals Section  */}
      <div className="flex flex-col gap-2 col-span-4">
        <h6 className="text-foreground font-semibold">Community goal</h6>
        <div className="flex flex-wrap items-center gap-[2px]">
          {communityGoals ? (
            communityGoals.goals.map((goal, idx) => (
              <Badge key={idx} variant="outline-info">
                {goal}
              </Badge>
            ))
          ) : (
            <Badge variant="outline">N/A</Badge>
          )}
          {communityGoals.more > 0 && (
            <Badge variant="outline-info">+{communityGoals.more}</Badge>
          )}
        </div>
      </div>
      {/* Open Projects Section  */}
      {role === "innovator" && (
        <div className="flex flex-col items-start gap-2 col-span-2">
          <h6 className="text-foreground font-semibold">Open projects</h6>
          <span className="ps-2 text-success underline text-sm">0</span>
        </div>
      )}
      {role === "mentor" && (
        <div className="flex flex-col items-start gap-2 col-span-2">
          <h6 className="text-foreground font-semibold">Active Mentorship</h6>
          <span className="ps-2 text-muted-foreground text-sm">0</span>
        </div>
      )}
      {role === "expert" && (
        <div className="flex flex-col items-start gap-2 col-span-2">
          <h6 className="text-foreground font-semibold">Reviews</h6>
          <span className="ps-2 text-success text-sm">No Reviews</span>
        </div>
      )}
      {/* chat Button Section  */}
      <div className="flex items-center justify-center col-span-1">
        <Button tag={Link} to={`/dashboard/chats/${id}`} color="dark">
          Chat
        </Button>
      </div>
    </div>
  );
};
