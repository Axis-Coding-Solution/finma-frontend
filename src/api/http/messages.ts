import { post } from "@/utils/axios";
import { apiErrorHandler } from "../helpers";
import { postMessagesInitialValues } from "@/utils/initial-values";

const url = "/messages";

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
