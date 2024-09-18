import { addMarketResearch, getMarketResearchByProjectIdApi } from "@/api/http";
import { useMutation, useQuery } from "@tanstack/react-query";

export const MARKET_RESEARCH_QUERY_KEY = "/startups/market-research";

export const useGetMarketResearchProject = (id: string) => {
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
