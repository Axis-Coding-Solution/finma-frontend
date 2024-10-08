import {
  getTeamMembersApi,
  updateTeamMembersApi,
  updateCardStatusApi,
  getCardStatusApi,
  getTaskActionApi,
  removeTeamMembersApi,
  updateTaskActionApi,
  getStartupCardStatusApi,
} from "@/api/http/dashboard/startups";
import { useMutation, useQuery } from "@tanstack/react-query";

export const TEAM_MEMBER_ADD_MUTATION_KEY = "/";
export const TEAM_MEMBER_REMOVE_MUTATION_KEY = "/";
export const TEAM_MEMBER_QUERY_KEY = "/";
export const CARD_STATUS_MUTATION_KEY = "/";
export const CARD_STATUS_QUERY_KEY = "/";
export const TASK_ACTION_MUTATION_KEY = "/";
export const TASK_ACTION_QUERY_KEY = "/";
export const STARTUP_CARD_STATUS_MUTATION_KEY =
  "/dashboard/startups/common/card-status";

// Team Members
export const useUpdateTeamMembers = () =>
  useMutation({
    mutationFn: updateTeamMembersApi,
    mutationKey: [TEAM_MEMBER_ADD_MUTATION_KEY],
  });

export const useRemoveTeamMembers = () =>
  useMutation({
    mutationFn: removeTeamMembersApi,
    mutationKey: [TEAM_MEMBER_REMOVE_MUTATION_KEY],
  });

export const useGetTeamMembers = (id: string, type: string) => {
  return useQuery({
    queryFn: () => getTeamMembersApi(id, type),
    queryKey: [TEAM_MEMBER_QUERY_KEY, id, type],
    enabled: id !== undefined,
  });
};

// Card Status
export const useUpdateCardStatus = () =>
  useMutation({
    mutationFn: updateCardStatusApi,
    mutationKey: [CARD_STATUS_MUTATION_KEY],
  });

export const useGetCardStatus = (id: string) => {
  return useQuery({
    queryFn: () => getCardStatusApi(id),
    queryKey: [CARD_STATUS_QUERY_KEY, id],
  });
};

// Task Action
export const useUpdateTaskAction = () =>
  useMutation({
    mutationFn: updateTaskActionApi,
    mutationKey: [TASK_ACTION_MUTATION_KEY],
  });

export const useGetTaskAction = (id: string) => {
  return useQuery({
    queryFn: () => getTaskActionApi(id),
    queryKey: [TASK_ACTION_QUERY_KEY, id],
  });
};
export const useGetStartupCardStatus = ({
  type,
  id,
}: {
  type: string;
  id: string;
}) =>
  useQuery({
    queryFn: () => getStartupCardStatusApi({ type, id }),
    queryKey: [STARTUP_CARD_STATUS_MUTATION_KEY, type, id],
    enabled: type && id ? true : false,
  });
