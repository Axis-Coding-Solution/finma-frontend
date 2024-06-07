import { axiosAuthInstance } from "@/utils/axios";
import {
  forgetPasswordInitialValues,
  loginInitialValues,
  resetPasswordInitialValues,
  signUpInitialValues,
} from "@/utils/initial-values";
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

export const getSignUpWithGoogle = async () => {
  try {
    const res = await axiosAuthInstance.get(appendUrl("register/google"));
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const signUpApi = async (body: typeof signUpInitialValues) => {
  try {
    const res = await axiosAuthInstance.post(appendUrl("register"), body);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const forgetPasswordApi = async (
  body: typeof forgetPasswordInitialValues
) => {
  try {
    const res = await axiosAuthInstance.post(
      appendUrl("forget-password"),
      body
    );
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const resetPasswordApi = async (
  body: typeof resetPasswordInitialValues
) => {
  try {
    const res = await axiosAuthInstance.patch(
      appendUrl("reset-password"),
      body
    );
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
