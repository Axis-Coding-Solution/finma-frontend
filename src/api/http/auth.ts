import { axiosAuthInstance } from "@/utils/axios";
import { loginInitialValues } from "@/utils/initial-values";

const url = "/users";
const appendUrl = (segment: string) => `${url}/${segment}`;

export const loginApi = async (body: typeof loginInitialValues) => {
  const res = await axiosAuthInstance.post(appendUrl("login"), body);
  return res.data;
};
