import {
  postMessageApi,
  getMessagesByChatIdApi,
  postImageMessageApi,
  postVideoMessageApi,
  postDocumentMessageApi,
} from "@/api/http/dashboard/messages";
import { useMutation, useQuery } from "@tanstack/react-query";

export const CHAT_MESSAGES_QUERY_KEY = "/dashboard/messages";
export const CHAT_IMAGE_MESSAGES_QUERY_KEY = "/dashboard/image/messages";
export const CHAT_VIDEO_MESSAGES_QUERY_KEY = "/dashboard/video/messages";
export const CHAT_DOCUMENT_MESSAGES_QUERY_KEY = "/dashboard/document/messages";

export const usePostMessages = () =>
  useMutation({
    mutationFn: postMessageApi,
    mutationKey: [CHAT_MESSAGES_QUERY_KEY],
  });
export const usePostImageMessages = () =>
  useMutation({
    mutationFn: postImageMessageApi,
    mutationKey: [CHAT_IMAGE_MESSAGES_QUERY_KEY],
  });
export const usePostVideoMessages = () =>
  useMutation({
    mutationFn: postVideoMessageApi,
    mutationKey: [CHAT_VIDEO_MESSAGES_QUERY_KEY],
  });
export const usePostDocumentMessages = () =>
  useMutation({
    mutationFn: postDocumentMessageApi,
    mutationKey: [CHAT_DOCUMENT_MESSAGES_QUERY_KEY],
  });

export const useGetMessagesByChatId = (id: string) => {
  return useQuery({
    queryFn: () => getMessagesByChatIdApi(id),
    queryKey: [CHAT_MESSAGES_QUERY_KEY, id],
  });
};
