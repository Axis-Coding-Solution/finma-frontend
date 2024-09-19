import {
  addMarketResearch,
  getMarketResearchByProjectIdApi,
  saveMarketResearchGraphApi,
} from "@/api/http";
import { useMutation, useQuery } from "@tanstack/react-query";

export const MARKET_RESEARCH_QUERY_KEY = "/dashboard/startups/market-research";
export const MARKET_RESEARCH_GRAPH_MUTATION_KEY =
  "/dashboard/startups/market-research/graph";

export const useGetMarketResearchByProjectId = (id: string) => {
  return useQuery({
    queryFn: () => getMarketResearchByProjectIdApi(id),
    queryKey: [MARKET_RESEARCH_QUERY_KEY, id],
  });
};

export const useAddMarketResearchProject = () =>
  useMutation({
    mutationFn: addMarketResearch,
    mutationKey: [MARKET_RESEARCH_QUERY_KEY],
  });

export const useSaveMarketResearchProjectGraph = () =>
  useMutation({
    mutationFn: saveMarketResearchGraphApi,
    mutationKey: [MARKET_RESEARCH_GRAPH_MUTATION_KEY],
  });
