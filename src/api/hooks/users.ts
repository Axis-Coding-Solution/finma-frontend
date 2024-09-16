import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createUserProfileApi,
  getUsersApi,
  updateUserProfileApi,
} from "../http";

export const CREATE_PROFILE_KEY = "/users/profile";
export const GET_USERS_KEY = "/users";

export const useCreateProfileMutation = () =>
  useMutation({
    mutationKey: [CREATE_PROFILE_KEY],
    mutationFn: createUserProfileApi,
  });

export const useUpdateProfileMutation = () =>
  useMutation({
    mutationKey: [CREATE_PROFILE_KEY],
    mutationFn: updateUserProfileApi,
  });

export const useGetUsersQuery = () =>
  useQuery({
    queryKey: [GET_USERS_KEY],
    queryFn: getUsersApi,
  });
