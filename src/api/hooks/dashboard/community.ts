import { getCommunityApi } from "@/api/http";
import { useQuery } from "@tanstack/react-query";

export const useGetCommunity = (currentPage: number) =>
  useQuery({
    queryFn: () => getCommunityApi(currentPage),
    queryKey: ["dashboard/community", currentPage],
  });
