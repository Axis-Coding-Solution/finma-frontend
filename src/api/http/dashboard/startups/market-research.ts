import { apiErrorHandler } from "@/api/helpers";
import { get, post } from "@/utils/axios";

const url = "/dashboard/startups/market-research";
const appendUrl = (segment: string) => `${url}/${segment}`;

export const addMarketResearch = async (data: any) => {
  try {
    const res = await post(url, data);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const saveMarketResearchGraphApi = async (data: any) => {
  try {
    const res = await post(appendUrl("graph"), data);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const getMarketResearchByProjectIdApi = async (id: string) => {
  try {
    const res = await get(appendUrl(`project/${id}`));
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const getMarketResearchByIdApi = async (id: string) => {
  try {
    const res = await get(appendUrl(id));
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
