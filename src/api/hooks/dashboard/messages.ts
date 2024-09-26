import {
  postMessageApi,
  getMessagesByChatIdApi,
} from "@/api/http/dashboard/messages";
import { useMutation, useQuery } from "@tanstack/react-query";

export const CHAT_MESSAGES_QUERY_KEY = "/dashboard/messages";

export const usePostMessages = () =>
  useMutation({
    mutationFn: postMessageApi,
    mutationKey: [CHAT_MESSAGES_QUERY_KEY],
  });

export const useGetMessagesByChatId = (id: string) => {
  return useQuery({
    queryFn: () => getMessagesByChatIdApi(id),
    queryKey: [CHAT_MESSAGES_QUERY_KEY, id],
  });
};
