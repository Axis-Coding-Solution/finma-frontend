import { get } from "@/utils/axios";
import { apiErrorHandler } from "../helpers";
import { useParams } from "react-router-dom";

const url = "/messages";
const appendUrl = (segment: string) => `${url}/${segment}`;

export const getMessages = async () => {
    const {id} =useParams();
  try {
    const res = await get(appendUrl( `${id}`));
    {
      console.log("🚀 ~ getMessages ~ res.data:", res.data);
    }
    return res.data;
  } catch (error: any) {
    return Promise.reject(apiErrorHandler(error));
  }
};
