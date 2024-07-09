import { getCommunityApi } from "@/api/http";
import { useQuery } from "@tanstack/react-query";

export const useGetCommunity = () =>
  useQuery({
    queryFn: getCommunityApi,
    queryKey: ["dashboard/community"],
  });
