import { AxiosError } from "axios";

export const apiErrorHandler = (error: Error) => {
  if (error instanceof AxiosError) return error.response?.data;

  return error;
};
