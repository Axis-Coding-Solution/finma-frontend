import { postMessageApi } from "@/api/http/messages";
import { useMutation } from "@tanstack/react-query";
export const usePostMessages = () =>
  useMutation({
    mutationFn: postMessageApi,
    mutationKey: ["/messages"],
  });
