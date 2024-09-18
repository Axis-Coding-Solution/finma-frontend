import { del, get, post, put } from "@/utils/axios";
import { apiErrorHandler } from "@/api/helpers";

const url = "/dashboard/startups";
const appendUrl = (segment: string) => `${url}/${segment}`;

export const getStartupsApi = async () => {
  try {
    const res = await get(url);
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
export const getStartupApiById = async (id: string) => {
  try {
    const res = await get(appendUrl(id));
    return res.data?.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const addStartupApi = async (data: any) => {
  try {
    const res = await post(url, data);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const editStartupApi = async ({
  id,
  data,
}: {
  id: string;
  data: any;
}) => {
  try {
    const res = await put(appendUrl(id), data);
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

export const delStartupApi = async (id: string) => {
  try {
    const res = await del(appendUrl(id));
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};

// export sub routes;
export * from "./idea-validation";
export * from "./market-research";
