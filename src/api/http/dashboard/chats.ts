import { get } from "@/utils/axios";
import { apiErrorHandler } from "../../helpers";
const url = "/dashboard/chats";
// const appendUrl = (segment: string) => `${url}/${segment}`;

export const getChatsApi = async () => {
  try {
    const res = await get(url);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
export const getMessageBYChatIdApi = async (id: string) => {
  try {
    const res = await get(`/messages/${id}`);
    return res.data.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
