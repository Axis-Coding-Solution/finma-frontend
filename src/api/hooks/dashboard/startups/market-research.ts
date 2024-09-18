import { getMarketResearchByProjectIdApi } from "@/api/http";
import { addMarketResearchByProjectApi } from "@/api/http/dashboard/idea-clarity";
import { useMutation, useQuery } from "@tanstack/react-query";

const MARKET_RESEARCH_QUERY_KEY = "/startups/market-research";

export const useGetMarketResearchProject = (id: string) => {
  return useQuery({
    queryFn: () => getMarketResearchByProjectIdApi(id),
    queryKey: [MARKET_RESEARCH_QUERY_KEY, id],
  });
};

export const useAddMarketResearchProject = () =>
  useMutation({
    mutationFn: addMarketResearchByProjectApi,
    mutationKey: [MARKET_RESEARCH_QUERY_KEY],
  });
