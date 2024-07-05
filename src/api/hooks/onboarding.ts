import { useMutation } from "@tanstack/react-query";
import { startOnboardingApi } from "../http";

export const useOnboardingInnovatorsMutation = () =>
  useMutation({
    mutationFn: startOnboardingApi,
  });
