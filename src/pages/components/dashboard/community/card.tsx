import { Avatar } from "@/components/_ui/avatar";
import { Button } from "@/components/_ui/button";
import { Badge } from "@/components/_ui/badge";
import { CommunityTypes } from "@/definitions/types";
import { Link, useNavigate } from "react-router-dom";
import { userAvatar1Image } from "@/assets/images";
import {
  GET_CHATS_QUERY_KEY,
  useCreateChatMutation,
} from "@/api/hooks/dashboard";
import { useQueryClient } from "@tanstack/react-query";

const BADGE_COLORS = [
  "border-[#6F6FEA] text-[#6F6FEA]",
  "border-[#D516CD] text-[#D516CD]",
  "border-[#EE8204] text-[#EE8204]",
];

const getRandomBadgeColor = () => {
  const randomIndex = Math.floor(Math.random() * BADGE_COLORS.length);
  return BADGE_COLORS[randomIndex];
};

export const CommunityCard = ({
  id,
  name,
  profilePicture,
  role,
  communityGoals,
  status,
  entrepreneurType,
  startupsCount,
}: CommunityTypes) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync } = useCreateChatMutation();

  const getChats = async (id: string) => {
    try {
      const response = await mutateAsync(id);
      queryClient.refetchQueries({ queryKey: [GET_CHATS_QUERY_KEY] });
      navigate(`/dashboard/chats/${response.data._id}`);
    } catch (error) {}
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12  2xl:p-6 ms:p-4 p-2 bg-background rounded gap-4">
      {/* Avatar Section  */}
      <div className="flex items-start mt-1 gap-4 col-span-6 sm:col-span-4 lg:col-span-3">
        <Avatar
          className="object-cover"
          image={profilePicture ? profilePicture : userAvatar1Image}
          size="lg"
        />
        <div className="flex flex-col">
          <span className="text-foreground text-xs capitalize">{role}</span>
          <h4 className="text-foreground font-medium text-base">{name}</h4>
          <p className="text-muted-foreground text-sm">{entrepreneurType}</p>
        </div>
      </div>
      {/* Status Section  */}
      <div className="flex flex-col gap-2 col-span-6 sm:col-span-2 lg:col-span-2">
        <h6 className="text-foreground font-semibold ">Status</h6>
        <span className="flex items-center text-muted-foreground gap-1 text-sm">
          {status}
        </span>
      </div>
      {/* Community Goals Section  */}
      <div className="flex flex-col gap-2 col-span-6 sm:col-span-2 lg:col-span-4">
        <h6 className="text-foreground font-semibold">Community goal</h6>
        <div className="flex flex-wrap items-center sm:gap-[2px] gap-2">
          {communityGoals ? (
            communityGoals.goals.map((goal, idx) => (
              <Badge
                key={idx}
                className={getRandomBadgeColor()}
                variant="outline-info"
              >
                {goal}
              </Badge>
            ))
          ) : (
            <Badge variant="outline">N/A</Badge>
          )}
          {communityGoals.more > 0 && (
            <Badge
              variant="outline-info"
              className=" border-foreground text-foreground"
            >
              +{communityGoals.more}
            </Badge>
          )}
        </div>
      </div>
      {/* Open Projects Section  */}
      {role === "innovator" && (
        <div className="flex flex-col items-start gap-2 col-span-6 sm:col-span-2 lg:col-span-2">
          <h6 className="text-foreground font-semibold">Open projects</h6>
          <span className="ps-2 text-success underline text-sm">
            {startupsCount}
          </span>
        </div>
      )}
      {role === "mentor" && (
        <div className="flex flex-col items-start gap-2 col-span-6 sm:col-span-2 lg:col-span-2">
          <h6 className="text-foreground font-semibold">Active Mentorship</h6>
          <span className="ps-2 text-muted-foreground text-sm">0</span>
        </div>
      )}
      {role === "expert" && (
        <div className="flex flex-col items-start gap-2 col-span-6 sm:col-span-2 lg:col-span-2">
          <h6 className="text-foreground font-semibold">Reviews</h6>
          <span className=" text-foreground text-sm">No Reviews</span>
        </div>
      )}
      {/* chat Button Section  */}
      <div className="col-span-12 sm:col-span-2 lg:col-span-1 flex justify-end items-center">
        <Button
          onClick={() => getChats(id)}
          variant="secondary"
          tag={Link}
          // to={`/dashboard/chats/${id}`}
          className="w-full bg-secondary-dark rounded-xl"
        >
          Chat
        </Button>
      </div>
    </div>
  );
};
