import {
  addStartupApi,
  delStartupApi,
  editStartupApi,
  getStartupApiById,
  getStartupsApi,
  getStartupStatusApi,
} from "@/api/http";
import { useMutation, useQuery } from "@tanstack/react-query";

export const STARTUPS_QUERY_KEY = "/startups";
export const STARTUP_STATUS_QUERY_KEY = "/dashboard/startups/status";

export const useAddStartupMutation = () =>
  useMutation({
    mutationFn: addStartupApi,
    mutationKey: [STARTUPS_QUERY_KEY],
  });
export const useEditStartupMutation = () =>
  useMutation({
    mutationFn: editStartupApi,
    mutationKey: [STARTUPS_QUERY_KEY],
  });

export const useGetStartups = (filter: string) => {
  return useQuery({
    queryKey: [STARTUPS_QUERY_KEY, filter ?? "all"],
    queryFn: () => getStartupsApi(filter),
  });
};
export const useGetStartupById = (id: string) => {
  return useQuery({
    queryKey: [STARTUPS_QUERY_KEY, id],
    queryFn: () => getStartupApiById(id),
  });
};

export const useDeleteStartup = () => {
  return useMutation({
    mutationFn: delStartupApi,
    mutationKey: [STARTUPS_QUERY_KEY],
  });
};

export const useGetStartupStatus = ({
  type,
  id,
}: {
  type: string | undefined;
  id: string;
}) =>
  useQuery({
    queryFn: () => getStartupStatusApi({ id, type }),
    queryKey: [STARTUP_STATUS_QUERY_KEY, id, type],
    enabled: Boolean(id),
  });

export * from "./idea-validation";
export * from "./market-research";
export * from "./common";
