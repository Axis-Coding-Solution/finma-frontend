import { del, get, post } from "@/utils/axios";
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
export const getChatsApi = async (filter: any) => {
  try {
    const {type, search} = filter
    const res = await get(filter ? `${url}?type=${type}&search=${search}` : url);
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

export const getRecentChatApi = async () => {
  try {
    const res = await get(appendUrl('user/recent-chats'));
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const delChatApi = async (id: string) => {
  try {
    const res = await del(appendUrl(id));
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};