import { post, get, patch } from "@/utils/axios";
import { apiErrorHandler } from "../helpers";
import { userQuestionaryInitialValues } from "@/utils/initial-values";

const url = "/public/leads-magnet";
const appendUrl = (segment: string) => `${url}/${segment}`;

export const saveIdeaClarityApi = async (body: any) => {
  try {
    const res = await post(appendUrl("idea-clarity"), body, {
      authorization: false,
    });
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
    const res = await patch(appendUrl(`idea-clarity/${id}`), body);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const saveUserQuestionaryApi = async (
  body: typeof userQuestionaryInitialValues
) => {
  try {
    const res = await post("/onboarding/user-questionary", body);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const startOnboardingInnovators = async (
  body: typeof userQuestionaryInitialValues
) => {
  try {
    const res = await post("/onboarding/innovators", body);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
