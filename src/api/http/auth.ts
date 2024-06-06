import { axiosAuthInstance } from "@/utils/axios";
import { loginInitialValues } from "@/utils/initial-values";
import { apiErrorHandler } from "../helpers";

const url = "/users";
const appendUrl = (segment: string) => `${url}/${segment}`;

export const loginApi = async (body: typeof loginInitialValues) => {
  try {
    const res = await axiosAuthInstance.post(appendUrl("login"), body);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const signUpApi = async (body: typeof loginInitialValues) => {
  try {
    const res = await axiosAuthInstance.post(appendUrl("register"), body);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
