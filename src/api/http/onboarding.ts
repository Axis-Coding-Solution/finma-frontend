import { post, get, put } from "@/utils/axios";
import { apiErrorHandler } from "../helpers";
import { userQuestionaryInitialValues } from "@/utils/initial-values";

const url = "/onboarding";
const appendUrl = (segment: string) => `${url}/${segment}`;

export const saveIdeaClarityApi = async (body: any) => {
  try {
    const res = await post(appendUrl("idea-clarity"), body);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const getIdeaClarityByUserId = async () => {
  try {
    const res = await get(appendUrl("idea-clarity"));
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
export const updateIdeaClarity = async ({ id, ...body }: any) => {
  try {
    const res = await put(appendUrl(`idea-clarity/${id}`), body);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const saveUserQuestionaryApi = async (
  body: typeof userQuestionaryInitialValues
) => {
  try {
    const res = await post(appendUrl("user-questionary"), body);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
