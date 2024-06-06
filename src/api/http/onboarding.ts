import { post } from "@/utils/axios";
import { apiErrorHandler } from "../helpers";

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
