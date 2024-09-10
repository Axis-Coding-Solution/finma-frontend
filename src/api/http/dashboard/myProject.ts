import { del, get, post, put } from "@/utils/axios";
import { apiErrorHandler } from "../../helpers";

const url = "/projects";
const appendUrl = (segment: string) => `${url}/${segment}`;

export const getProjectsApi = async () => {
    try {
        const res = await get(url)
        return res.data?.data;

    } catch (error: any) {
        return Promise.reject(apiErrorHandler(error));
    }
};
export const getProjectApiById = async (id: string) => {
    try {
        const res = await get(appendUrl(id));
        return res.data;
    } catch (error: any) {
        return Promise.reject(apiErrorHandler(error));
    }
};

export const addProjectApi = async (data: any) => {
    try {
        const res = await post(url, data);
        return res.data;
    } catch (error: any) {
        return Promise.reject(apiErrorHandler(error));
    }
};

export const editProjectApi = async ({ id, data }: { id: string, data: any }) => {
    try {
        const res = await put(appendUrl(id), data);
        return res.data;
    } catch (error: any) {
        return Promise.reject(apiErrorHandler(error));
    }
};

export const delProjectApi = async (id: string) => {
    try {
        const res = await del(appendUrl(id));
        return res.data;
    } catch (error: any) {
        return Promise.reject(apiErrorHandler(error));
    }
};