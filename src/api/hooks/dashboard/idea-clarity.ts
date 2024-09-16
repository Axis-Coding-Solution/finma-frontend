import {
  addIdeaClarityApi,
  addIdeaValidationByIdApi,
  addMarketResearchByProjectApi,
  getIdeaClarityByProjectApi,
  getIdeaValidationByIdApi,
  getIdeaValidationByProjectIdApi,
  getMarketResearchByProjectApi,
} from "@/api/http/dashboard/idea-clarity";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAddIdeaClarityMutation = () =>
  useMutation({
    mutationFn: addIdeaClarityApi,
    mutationKey: ["/idea-clarity"],
  });

export const useGetIdeaClarityProject = (id: string) => {
  return useQuery({
    queryFn: () => getIdeaClarityByProjectApi(id),
    queryKey: ["/idea-clarity/project", id],
  });
};

export const useGetIdeaValidationByProjectId = (id: string) => {
  return useQuery({
    queryFn: () => getIdeaValidationByProjectIdApi(id),
    queryKey: ["/project/idea-validation", id],
  });
};
export const useGetIdeaValidationById = (id: string) => {
  return useQuery({
    queryFn: () => getIdeaValidationByIdApi(id),
    queryKey: ["/project/idea-validation-Id", id],
  });
};

export const useAddIdeaValidationById = () =>
  useMutation({
    mutationFn: addIdeaValidationByIdApi,
    mutationKey: ["/project/idea-validation"],
  });

export const useGetMarketResearchProject = (id: string) => {
  return useQuery({
    queryFn: () => getMarketResearchByProjectApi(id),
    queryKey: ["/project/market-research", id],
  });
};

export const useAddMarketResearchProject = () =>
  useMutation({
    mutationFn: addMarketResearchByProjectApi,
    mutationKey: ["/project/market-research"],
  });
