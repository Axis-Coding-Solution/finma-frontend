import { useMutation, useQuery } from "@tanstack/react-query";
import { createUserProfileApi, getUsersApi } from "../http";

export const CREATE_PROFILE_KEY = "/users/profile";
export const GET_USERS_KEY = "/users";

export const useCreateProfileMutation = () =>
  useMutation({
    mutationKey: [CREATE_PROFILE_KEY],
    mutationFn: createUserProfileApi,
  });

export const useGetUsersQuery = () =>
  useQuery({
    queryKey: [GET_USERS_KEY],
    queryFn: getUsersApi,
  });
