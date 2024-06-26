import { get } from "@/utils/axios";
import { apiErrorHandler } from "../helpers";

const url = "/users";

export const getUsersApi = async () => {
  try {
    const res = await get(url);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
