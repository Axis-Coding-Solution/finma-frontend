import { get, post } from "@/utils/axios";
import { apiErrorHandler } from "../../helpers";
const url = "/chats";
// const appendUrl = (segment: string) => `${url}/${segment}`;

export const createChatsApi = async (body: any) => {
  try {
    const res = await post(url, body);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
export const getChatsApi = async () => {
  try {
    const res = await get(url);
    console.log("qqqqqqqqqqq", res)
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
export const getMessageBYChatIdApi = async (id: string) => {
  try {
    const res = await get(`/chats/${id}`);
    return res.data.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
