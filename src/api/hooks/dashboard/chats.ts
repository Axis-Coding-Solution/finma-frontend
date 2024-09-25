import { createChatsApi, getChatByReceiverId, getChatsApi } from "@/api/http";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCreateChatMutation = () =>
  useMutation({
    mutationFn: createChatsApi,
    mutationKey: ["dashboard/chats"],
  });



export const useGetChats = () =>
  useQuery({
    queryFn: getChatsApi,
    queryKey: ["dashboard/chats"],
  });

export const useGetChatByReceiverId = () =>
  useQuery({
    queryFn: getChatByReceiverId,
    queryKey: ["dashboard/chats"],
  });
