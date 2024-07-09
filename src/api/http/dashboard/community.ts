import { get } from "@/utils/axios";
import { apiErrorHandler } from "../../helpers";
const url = "/dashboard/community";

export const getCommunityApi = async () => {
  try {
    const res = await get(url);
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
