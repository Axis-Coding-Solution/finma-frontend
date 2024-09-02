import { useMutation } from "@tanstack/react-query";
import { createUserProfileApi } from "../http";

export const CREATE_PROFILE_KEY = "/users/profile";

export const useCreateProfileMutation = () =>
  useMutation({
    mutationKey: [CREATE_PROFILE_KEY],
    mutationFn: createUserProfileApi,
  });
