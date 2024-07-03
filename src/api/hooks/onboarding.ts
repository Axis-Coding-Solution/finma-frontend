import { useMutation } from "@tanstack/react-query";
import {
  startOnboardingExperts,
  startOnboardingInnovators,
  startOnboardingMentors,
} from "../http";

export const useOnboardingInnovatorsMutation = () =>
  useMutation({
    mutationFn: startOnboardingInnovators,
  });

export const useOnboardingExpertsMutation = () =>
  useMutation({
    mutationFn: startOnboardingExperts,
  });

export const useOnboardingMentorsMutation = () =>
  useMutation({
    mutationFn: startOnboardingMentors,
  });
