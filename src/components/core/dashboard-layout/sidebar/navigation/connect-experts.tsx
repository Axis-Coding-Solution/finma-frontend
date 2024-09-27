import { userAvatar2Image } from "@/assets/images";
import { Avatar } from "@/components/ui/avatar";
import { truncateText } from "@/utils";
import { cn } from "@/utils";
import { Link, useLocation } from "react-router-dom";
import { useGetRecentChats } from "@/api/hooks/dashboard";

export const ConnectWithExperts = () => {
  const { pathname } = useLocation();
  const { data: chats } = useGetRecentChats();

  return (
    <div className="text-foreground mt-4 flex flex-col gap-1  md:pr-6 pr-3">
      <h6 className="px-4 text-background text-sm tracking-wider mb-1">
        Recent Chats
      </h6>
      {Array.isArray(chats) &&
        chats?.map((chat: any) => (
          <Link
            to={`/dashboard/chats/${chat?.id}`}
            className={cn(
              "truncate w-full md:px-3 py-2 flex gap-3 2xl:rounded-lg rounded-2xl tran items-center hover:bg-warning hover:text-foreground text-background",
              pathname === `/dashboard/chats/${chat?.id}` &&
                "bg-success/10 text-success"
            )}
          >
            <Avatar
              image={chat?.user?.profilePicture ?? userAvatar2Image}
              size="md"
              active
            />
            <div className="flex flex-col md:text-base text-sm ">
              <span
                className=""
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "150px",
                }}
              >
                {truncateText(chat?.user?.fullName, 16)}
              </span>

              <span className="text-muted-foreground text-xs">
                {truncateText(
                  chat?.lastMessage ?? chat?.user?.entrepreneurType,
                  14
                )}
              </span>
            </div>
          </Link>
        ))}
    </div>
  );
};
