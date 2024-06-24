import { getChatsApi } from "@/api/http";
import { useQuery } from "@tanstack/react-query";

export const useGetChats = () =>
  useQuery({
    queryFn: getChatsApi,
    queryKey: ["dashboard/chats"],
  });
