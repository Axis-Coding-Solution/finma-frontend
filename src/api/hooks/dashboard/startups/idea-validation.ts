import {
  getIdeaValidationByIdApi,
  getIdeaValidationByProjectIdApi,
  saveIdeaValidationApi,
  validateIdeaValidationApi,
} from "@/api/http";
import { useMutation, useQuery } from "@tanstack/react-query";

export const VALIDATE_IDEA_VALIDATION_MUTATION_KEY =
  "/startups/idea-validation/validate";
export const IDEA_VALIDATION_QUERY_KEY = "/startups/idea-validation";
export const IDEA_VALIDATION_PROJECT_QUERY_KEY =
  "/startups/idea-validation/project";

export const useValidateIdeaValidation = () =>
  useMutation({
    mutationFn: validateIdeaValidationApi,
    mutationKey: [VALIDATE_IDEA_VALIDATION_MUTATION_KEY],
  });

export const useSaveIdeaValidation = () =>
  useMutation({
    mutationFn: saveIdeaValidationApi,
    mutationKey: [IDEA_VALIDATION_QUERY_KEY],
  });

export const useGetIdeaValidationByProjectId = (id: string) => {
  return useQuery({
    queryFn: () => getIdeaValidationByProjectIdApi(id),
    queryKey: [IDEA_VALIDATION_PROJECT_QUERY_KEY, id],
  });
};

export const useGetIdeaValidationById = (id: string) => {
  return useQuery({
    queryFn: () => getIdeaValidationByIdApi(id),
    queryKey: [IDEA_VALIDATION_QUERY_KEY, id],
  });
};

