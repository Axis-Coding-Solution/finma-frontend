import {  get, post, } from "@/utils/axios";
import { apiErrorHandler } from "../../helpers";

// const url = "/leads-magnet/idea-clarity";
const url = "/project";
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



// Idea Validation API
export const getIdeaValidationByProjectIdApi = async (id: string) => {
    try {
        const res = await get(appendUrl(`idea-validation/${id}`));
        console.log("pppppppp",res)
        return res.data?.data;
    } catch (error: any) {
        return Promise.reject(apiErrorHandler(error));
    }
};
export const getIdeaValidationByIdApi = async (id: string) => {
    try {
        const res = await get(appendUrl(`idea-validation-Id/${id}`));
        return res.data?.data;
    } catch (error: any) {
        return Promise.reject(apiErrorHandler(error));
    }
};
export const addIdeaValidationByIdApi = async (data: any) => {
    try {
        const res = await post(appendUrl('idea-validation'), data);
        console.log('eeeeeeeee', res)
        return res.data;
    } catch (error: any) {
        return Promise.reject(apiErrorHandler(error));
    }
};



// Market Research API 
export const getMarketResearchByProjectApi = async (id: string) => {
    try {
        const res = await get(appendUrl(`market-research/${id}`));
        return res.data?.data;
    } catch (error: any) {
        return Promise.reject(apiErrorHandler(error));
    }
};
export const addMarketResearchByProjectApi = async (data: any) => {
    try {
        const res = await post(appendUrl('market-research'), data);
        console.log('eeeeeeeee', res)
        return res.data;
    } catch (error: any) {
        return Promise.reject(apiErrorHandler(error));
    }
};


