import { get, post } from "@/utils/axios";
import { apiErrorHandler } from "../../helpers";
import { postMessagesInitialValues } from "@/utils/initial-values";

const url = "/dashboard/messages";
const appendUrl = (segment: string) => `${url}/${segment}`;

export const postMessageApi = async (
  body: typeof postMessagesInitialValues
) => {
  try {
    const res = await post(url, body);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const getMessagesByChatIdApi = async (id: string) => {
  try {
    const res = await get(appendUrl(id));
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
