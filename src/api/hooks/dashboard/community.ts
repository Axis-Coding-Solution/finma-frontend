import { getCommunityApi } from "@/api/http";
import { useQuery } from "@tanstack/react-query";

export const useGetCommunity = (currentPage: number , filter: string) =>
  useQuery({
    queryFn: () => getCommunityApi(currentPage, filter),
    queryKey: ["dashboard/community", currentPage,filter],
  });
