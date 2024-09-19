import { get, post, put } from "@/utils/axios";
import { apiErrorHandler } from "@/api/helpers";

const url = "/dashboard/startups/common";
const appendUrl = (segment: string) => `${url}/${segment}`;

// Team Members
export const updateTeamMembersApi = async (data: any) => {
  try {
    const res = await put(appendUrl("teams"), data);
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

export const getTeamMembersApi = async (id: string, type: string) => {
  try {
    const res = await get(appendUrl(`teams/${id}/${type}`));
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

// Card Status
export const createCardStatusApi = async (data: any) => {
  try {
    const res = await post(appendUrl("cardStatus"), data);
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
export const updateTaskActionApi = async (data: any) => {
  try {
    const res = await put(appendUrl("task-actions"), data);
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
