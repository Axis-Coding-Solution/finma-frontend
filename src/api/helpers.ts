import { AxiosError } from "axios";

export const apiErrorHandler = (error: Error) => {
  if (error instanceof AxiosError)
    return {
      error: error.response?.data,
    };

  return { error };
};
