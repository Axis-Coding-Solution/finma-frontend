import {
  createChatsApi,
  delChatApi,
  getChatByReceiverId,
  getChatsApi,
  getRecentChatApi,
} from "@/api/http";
import { useMutation, useQuery } from "@tanstack/react-query";

export const GET_CHATS_QUERY_KEY = "dashboard/chats";
export const GET_RECENT_CHATS_QUERY_KEY = "dashboard/chats/user/recent-chats";

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

export const useGetRecentChats = (token: string | undefined) =>
  useQuery({
    queryFn: getRecentChatApi,
    queryKey: [GET_RECENT_CHATS_QUERY_KEY],
    enabled: !!token,
  });

export const useDeleteChat = () => {
  return useMutation({
    mutationFn: delChatApi,
    mutationKey: [GET_CHATS_QUERY_KEY],
  });
};
