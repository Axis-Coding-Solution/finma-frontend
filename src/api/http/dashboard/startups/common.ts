import { get, post } from "@/utils/axios";
import { apiErrorHandler } from "@/api/helpers";

const url = "/";
const appendUrl = (segment: string) => `${url}/${segment}`;

// Team Members 
export const createTeamMembersApi = async (data: any) => {
    try {
      const res = await post(appendUrl("validate"), data);
      return res.data;
    } catch (error: any) {
      return Promise.reject(apiErrorHandler(error));
    }
  };
export const removeTeamMembersApi = async (data: any) => {
    try {
      const res = await post(appendUrl("validate"), data);
      return res.data;
    } catch (error: any) {
      return Promise.reject(apiErrorHandler(error));
    }
  };

export const getTeamMembersApi = async (id: string) => {
  try {
    const res = await get(appendUrl(id));
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

// Card Status
export const createCardStatusApi = async (data: any) => {
    try {
      const res = await post(appendUrl("validate"), data);
      return res.data;
    } catch (error: any) {
      return Promise.reject(apiErrorHandler(error));
    }
  };

export const getCardStatusApi = async (id: string) => {
  try {
    const res = await get(appendUrl(id));
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

// Task Action
export const createTaskActionApi = async (data: any) => {
    try {
      const res = await post(appendUrl("validate"), data);
      return res.data;
    } catch (error: any) {
      return Promise.reject(apiErrorHandler(error));
    }
  };

export const getTaskActionApi = async (id: string) => {
  try {
    const res = await get(appendUrl(id));
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

