import {  get, post, } from "@/utils/axios";
import { apiErrorHandler } from "../../helpers";

const url = "/leads-magnet/idea-clarity";
const appendUrl = (segment: string) => `${url}/${segment}`;

export const addIdeaClarityApi = async (data: any) => {
    try {
        const res = await post(appendUrl('project'), data);
        return res.data;
    } catch (error: any) {
        return Promise.reject(apiErrorHandler(error));
    }
};
export const getIdeaClarityByProjectApi = async (id: string) => {
    try {
        const res = await get(appendUrl(`project/${id}`));
        return res.data?.data;
    } catch (error: any) {
        return Promise.reject(apiErrorHandler(error));
    }
};
