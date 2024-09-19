import {
  addStartupApi,
  delStartupApi,
  editStartupApi,
  getStartupApiById,
  getStartupsApi,
} from "@/api/http";
import { useMutation, useQuery } from "@tanstack/react-query";

export const STARTUPS_QUERY_KEY = "/startups";

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

export const useGetStartups = () => {
  return useQuery({
    queryKey: [STARTUPS_QUERY_KEY],
    queryFn: getStartupsApi,
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

export * from "./idea-validation";
export * from "./market-research";
export * from "./common"
