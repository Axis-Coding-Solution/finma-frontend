// ** setup axios here
import {
  AxiosRequestConfig,
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  default as axios,
} from "axios";
import { getAuthFromStorage } from ".";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${baseURL}/v1/api`,
  withCredentials: true,
});

export const axiosAuthInstance = axios.create({
  baseURL: `${baseURL}/v1/auth`,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config): Promise<InternalAxiosRequestConfig> => {
    if ((config as any)?.authorization !== false) {
      const auth = getAuthFromStorage();
      if (auth?.token && auth?.isAuthenticated) {
        config.headers.Authorization = `BEARER ${auth?.token}`;
      }
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
);

const get = (url: string, config?: AxiosRequestConfig) =>
  axiosInstance.get(url, config);
const post = (url: string, data: Object, config?: AxiosRequestConfig) =>
  axiosInstance.post(url, data, config);
const put = (url: string, data: Object, config?: AxiosRequestConfig) =>
  axiosInstance.put(url, data, config);
const del = (url: string, data: Object) => axiosInstance.delete(url, data);
const patch = (url: string, data: Object, config?: AxiosRequestConfig) =>
  axiosInstance.patch(url, data, config);

export { get, post, put, del, patch };

export default axiosInstance;
