import { createChatsApi, getChatByReceiverId, getChatsApi } from "@/api/http";
import { useMutation, useQuery } from "@tanstack/react-query";

export const GET_CHATS_QUERY_KEY = "dashboard/chats";

export const useCreateChatMutation = () =>
  useMutation({
    mutationFn: createChatsApi,
    mutationKey: [GET_CHATS_QUERY_KEY],
  });

export const useGetChats = () =>
  useQuery({
    queryFn: getChatsApi,
    queryKey: [GET_CHATS_QUERY_KEY],
  });

export const useGetChatByReceiverId = (id: string) =>
  useQuery({
    queryFn: () => getChatByReceiverId(id),
    queryKey: [GET_CHATS_QUERY_KEY, id],
  });
