import { getUsersApi } from "@/api/http/users";
import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () =>
  useQuery({
    queryFn: getUsersApi,
    queryKey: ["/users"],
  });
