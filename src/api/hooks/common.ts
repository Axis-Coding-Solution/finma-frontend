import { useMutation, useQuery } from "@tanstack/react-query";
import { getCountriesApi, getCountryCitiesApi } from "../http";

export const useGetCountriesQuery = () =>
  useQuery({
    queryKey: ["/common/countries"],
    queryFn: getCountriesApi,
  });

export const useGetCountryCitiesMutation = () =>
  useMutation({
    mutationKey: ["/common/countries"],
    mutationFn: getCountryCitiesApi,
  });
