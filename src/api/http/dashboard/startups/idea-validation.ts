import { get, post } from "@/utils/axios";
import { apiErrorHandler } from "@/api/helpers";

const url = "/startups/idea-validation";
const appendUrl = (segment: string) => `${url}/${segment}`;

export const validateIdeaValidationApi = async (data: any) => {
  try {
    const res = await post(appendUrl("validate"), data);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const saveIdeaValidationApi = async (data: any) => {
  try {
    const res = await post(url, data);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const getIdeaValidationByIdApi = async (id: string) => {
  try {
    const res = await get(appendUrl(id));
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const getIdeaValidationByProjectIdApi = async (id: string) => {
  try {
    const res = await get(appendUrl(`project/${id}`));
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
