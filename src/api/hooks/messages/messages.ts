import { getMessageBYChatIdApi } from "@/api/http";
import { postMessageApi } from "@/api/http/messages";
import { useMutation, useQuery } from "@tanstack/react-query";
export const usePostMessages = () =>
  useMutation({
    mutationFn: postMessageApi,
    mutationKey: ["/messages"],
  });

export const useGetMessagesByChatId = (id: string) =>
  useQuery({
    queryFn: () => getMessageBYChatIdApi(id),
    queryKey: ["/get-message-by-chat-id"],
  });
