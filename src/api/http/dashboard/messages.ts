import { get, post } from "@/utils/axios";
import { apiErrorHandler } from "../../helpers";
import { postMessagesInitialValues } from "@/utils/initial-values";

const url = "/dashboard/messages";
const imageUrl = "/messages/upload-images";
const videoUrl = "/messages/upload-videos";
const documentUrl = "/messages/upload-documents";
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
export const postImageMessageApi = async (
  body: typeof postMessagesInitialValues
) => {
  try {
    const res = await post(imageUrl, body);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
export const postVideoMessageApi = async (
  body: typeof postMessagesInitialValues
) => {
  try {
    const res = await post(videoUrl, body);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
export const postDocumentMessageApi = async (
  body: typeof postMessagesInitialValues
) => {
  try {
    const res = await post(documentUrl, body);
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
