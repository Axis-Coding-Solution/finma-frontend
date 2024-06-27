import { useGetUsers } from "@/api/hooks/users";
import { userAvatar2Image } from "@/assets/images";
import { Avatar } from "@/components/ui/avatar";
import { truncateText } from "@/lib/truncate";
import { cn } from "@/utils";
import { Link, useLocation } from "react-router-dom";

export const ConnectWithExperts = () => {
  const { pathname } = useLocation();
  const { data } = useGetUsers();
  let users = data?.data ?? [];
  return (
    <div className="text-foreground mt-4 flex flex-col gap-1">
      <h6 className="px-4 text-muted-foreground text-sm tracking-wider mb-1">
        Connect with experts
      </h6>
      {users?.map(({ id, email }: { id: string; email: string }) => {
        let userName = email
          .split("@")[0]
          .replace(/\b\w/g, (l) => l.toUpperCase());
        return (
          <Link
            to={`/dashboard/chats/${id}`}
            key={id}
            className={cn(
              "truncate max-w-max px-4 py-3 flex gap-3 rounded-lg tran items-center hover:bg-success/10 hover:text-success",
              pathname === `/dashboard/chats/${id}` &&
                "bg-success/10 text-success"
            )}
          >
            <Avatar image={userAvatar2Image} size="md" active />
            <div className="flex flex-col text-base">
              <span
                className=""
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "150px",
                }}
              >
                {truncateText(userName, 13)}
              </span>

              <span className="text-muted-foreground text-xs">
                Venture Analyst
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
