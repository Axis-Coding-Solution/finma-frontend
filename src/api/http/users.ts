import { get, post, put } from "@/utils/axios";
import { apiErrorHandler } from "../helpers";

const url = "/users";
const appendUrl = (segment: string) => `${url}/${segment}`;

export const getUsersApi = async () => {
  try {
    const res = await get(url);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const createUserProfileApi = async (body: any) => {
  try {
    const res = await post(appendUrl("profile"), body);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const updateUserProfileApi = async (body: any) => {
  try {
    const res = await put(appendUrl("profile"), body);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
