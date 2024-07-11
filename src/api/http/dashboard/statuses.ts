import { get, post } from "@/utils/axios";
import { apiErrorHandler } from "../../helpers";

const url = "/statuses";
const appendUrl = (segment: string) => `${url}/${segment}`;

export const addStatusApi = async (data: any) => {
  try {
    const res = await post(appendUrl("add"), data);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const getStatusForUserApi = async () => {
  try {
    const res = await get(appendUrl("user"));
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
export const getStatusByIdApi = async (id: string) => {
  try {
    const res = await get(appendUrl(id));
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
export const getStatusesApi = async () => {
  try {
    const res = await get(url);
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
