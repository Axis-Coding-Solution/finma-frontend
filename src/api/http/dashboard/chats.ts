import { get, post } from "@/utils/axios";
import { apiErrorHandler } from "../../helpers";
const url = "/chats";
// const appendUrl = (segment: string) => `${url}/${segment}`;

export const createChatsApi = async ( id:string) => {
  try {
    const res = await post(`http://localhost:5000/v1/dashboard/chats/${id}`, {});
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
export const getChatsApi = async () => {
  try {
    const res = await get(url);
    console.log("qqqqqqqqqqqsafgasdgf", res)
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

export const getChatByReceiverId = async () => {
  try {
    const res = await get(url);
    return res.data.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};