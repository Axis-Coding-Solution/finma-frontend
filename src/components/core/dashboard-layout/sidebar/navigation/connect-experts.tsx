import { useGetUsers } from "@/api/hooks/users";
import { userAvatar2Image } from "@/assets/images";
import { Avatar } from "@/components/ui/avatar";
import { truncateText } from "@/utils";
import { expertsDetailsHook } from "@/store";
import { cn } from "@/utils";
import { useHookstate } from "@hookstate/core";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createChatsApi } from "@/api/http";

export const ConnectWithExperts = () => {
  const { pathname } = useLocation();
  const { data } = useGetUsers();
  const queryClient = useQueryClient();

  let users = data?.data ?? [];
  console.log('NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN', users)

  const navigate = useNavigate();
  const expertInfo = useHookstate(expertsDetailsHook);
  const setExpertInfo = expertInfo.set;

  const mutation = useMutation({
    mutationFn: createChatsApi,
    mutationKey: ["dashboard/chats"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboard/chats"] });
    },
  });

  const chatHandler = async (id: string) => {
    try {
      const res = await mutation.mutateAsync({ receiverId: id });
      if (res) {
        navigate(`/dashboard/chats/${res.data._id}`);
      }
    } catch (error) {}
  };

  return (
    <div className="text-foreground mt-4 flex flex-col gap-1">
      <h6 className="px-4 text-muted-foreground text-sm tracking-wider mb-1">
        Recent Chats
      </h6>
      {users?.map(
        ({ id, name, entrepStage }: { id: string; name: string, entrepStage: string }, idx: number) => {
          let userName = name || ''
            
          if (idx > 1) return null;
          return (
            <div
              onClick={() => chatHandler(id)}
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
                  onClick={() =>
                    setExpertInfo((prev) => ({ ...prev, id, name: userName }))
                  }
                >
                  {truncateText(userName, 13)}
                </span>

                <span className="text-muted-foreground text-xs">
                  {entrepStage}
                </span>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
