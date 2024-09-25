import { userAvatar2Image } from "@/assets/images";
import { Avatar } from "@/components/_ui/avatar";
import { truncateText } from "@/utils";
import { expertsDetailsHook } from "@/store";
import { cn } from "@/utils";
import { useHookstate } from "@hookstate/core";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createChatsApi } from "@/api/http";

export const ConnectWithExperts = () => {
  const { pathname } = useLocation();
  // const { data } = useGetUsersQuery();
  const data: any = [];
  const queryClient = useQueryClient();

  let users = data?.data ?? [];

  const navigate = useNavigate();
  const expertInfo = useHookstate(expertsDetailsHook);
  const setExpertInfo = expertInfo.set;

  const mutation = useMutation({
    mutationFn: (id: string) => createChatsApi(id),
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
    <div className="text-foreground mt-4 flex flex-col gap-1  md:pr-6 pr-3">
      <h6 className="px-4 text-background text-sm tracking-wider mb-1">
        Recent Chats
      </h6>
      {users?.map(
        (
          {
            id,
            name,
            entrepStage,
          }: { id: string; name: string; entrepStage: string },
          idx: number
        ) => {
          let userName = name || "";

          if (idx > 1) return null;
          return (
            <div
              onClick={() => chatHandler(id)}
              key={id}
              className={cn(
                "truncate w-full md:px-3 py-2 flex gap-3 2xl:rounded-lg rounded-2xl tran items-center hover:bg-warning hover:text-foreground text-background",
                pathname === `/dashboard/chats/${id}` &&
                  "bg-success/10 text-success"
              )}
            >
              <Avatar image={userAvatar2Image} size="md" active />
              <div className="flex flex-col md:text-base text-sm ">
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
