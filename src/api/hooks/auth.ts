import { useMutation, useQuery } from "@tanstack/react-query";
import {
  emailVerificationApi,
  forgetPasswordApi,
  getGoogleAuthUrl,
  loginApi,
  resetPasswordApi,
  signUpApi,
} from "../http";

export const LOGIN_QUERY_KEY = "auth/login";
export const SIGN_UP_QUERY_KEY = "auth/sign-up";
export const CONTINUE_WITH_GOOGLE_QUERY_KEY = "auth/google";
export const FORGET_PASSWORD_QUERY_KEY = "auth/forget-password";
export const RESET_PASSWORD_QUERY_KEY = "auth/reset-password";
export const VERIFY_EMAIL_QUERY_KEY = "auth/verify-email";

export const useLoginMutation = () =>
  useMutation({
    mutationKey: [LOGIN_QUERY_KEY],
    mutationFn: loginApi,
  });

export const useSignUpMutation = () =>
  useMutation({
    mutationKey: [SIGN_UP_QUERY_KEY],
    mutationFn: signUpApi,
  });

export const useContinueWithGoogleQuery = () =>
  useQuery({
    queryKey: [CONTINUE_WITH_GOOGLE_QUERY_KEY],
    queryFn: getGoogleAuthUrl,
    enabled: false,
  });
export const useForgetPasswordMutation = () =>
  useMutation({
    mutationFn: forgetPasswordApi,
    mutationKey: [FORGET_PASSWORD_QUERY_KEY],
  });

export const useResetPasswordMutation = () =>
  useMutation({
    mutationFn: resetPasswordApi,
    mutationKey: [RESET_PASSWORD_QUERY_KEY],
  });

export const useEmailVerificationMutation = () =>
  useMutation({
    mutationFn: emailVerificationApi,
    mutationKey: [VERIFY_EMAIL_QUERY_KEY],
  });
