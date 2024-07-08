import { get } from "@/utils/axios";
import { apiErrorHandler } from "../helpers";

export const getCountriesApi = async () => {
  try {
    const res = await get("/common/countries");
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const getCountryCitiesApi = async ({
  code,
  search,
}: {
  code: string;
  search: string;
}) => {
  try {
    const res = await get(
      `/common/country/cities?code=${code}&search=${search}`
    );
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
