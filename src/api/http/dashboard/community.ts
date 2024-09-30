import { get } from "@/utils/axios";
import { apiErrorHandler } from "../../helpers";
const url = "/dashboard/community";

export const getCommunityApi = async (currentPage: number, filter: string) => {
  try {
    let apiUrl = url;
    if (currentPage) {
      apiUrl += `?page=${currentPage}`;
    }
    if (filter) {
      apiUrl += currentPage ? `&filter=${filter}` : `?filter=${filter}`;
    }
    const res = await get(apiUrl);
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
