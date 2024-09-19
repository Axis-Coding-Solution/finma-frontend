import {
  getTeamMembersApi,
  updateTeamMembersApi,
  createCardStatusApi,
  getCardStatusApi,
  getTaskActionApi,
  removeTeamMembersApi,
  updateTaskActionApi,
} from "@/api/http/dashboard/startups";
import { useMutation, useQuery } from "@tanstack/react-query";

export const TEAM_MEMBER_ADD_MUTATION_KEY = "/";
export const TEAM_MEMBER_REMOVE_MUTATION_KEY = "/";
export const TEAM_MEMBER_QUERY_KEY = "/";
export const CARD_STATUS_MUTATION_KEY = "/";
export const CARD_STATUS_QUERY_KEY = "/";
export const TASK_ACTION_MUTATION_KEY = "/";
export const TASK_ACTION_QUERY_KEY = "/";

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
export const useCreateCardStatus = () =>
  useMutation({
    mutationFn: createCardStatusApi,
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
