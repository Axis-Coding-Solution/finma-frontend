import { addStatusApi, getStatusForUserApi } from "@/api/http";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAddStatusMutation = () =>
  useMutation({
    mutationFn: addStatusApi,
    mutationKey: ["/statuses"],
  });

export const useGetStatusForUser = () => {
  return useQuery({
    queryFn: getStatusForUserApi,
    queryKey: ["/statuses/user"],
  });
};
