import { get, post } from "@/utils/axios";
import { apiErrorHandler } from "../../helpers";

const url = "/dashboard/chats";
const appendUrl = (segment: string) => `${url}/${segment}`;

export const createChatsApi = async (id: string) => {
  try {
    const res = await post(appendUrl(id), {});
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
export const getChatsApi = async () => {
  try {
    const res = await get(url);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const getChatByReceiverId = async (id: string) => {
  try {
    const res = await get(appendUrl(id));
    return res.data.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
