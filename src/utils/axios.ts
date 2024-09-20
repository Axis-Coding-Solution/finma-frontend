// ** setup axios here
import {
  AxiosRequestConfig,
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  default as axios,
  AxiosResponse,
} from "axios";
import { getAuthFromStorage } from ".";

interface RequestConfig extends AxiosRequestConfig {
  authorization?: boolean;
}

export const baseURL = import.meta.env.VITE_BACKEND_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${baseURL}/v1/api`,
  withCredentials: true,
});

export const axiosAuthInstance = axios.create({
  baseURL: `${baseURL}/v1/auth`,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config: RequestConfig): Promise<InternalAxiosRequestConfig> => {
    if (config.authorization !== false) {
      const auth = getAuthFromStorage();
      if (auth?.token && auth?.isAuthenticated) {
        if (config.headers) {
          config.headers.Authorization = `BEARER ${auth?.token}`;
        }
      }
    }
    return config as any;
  },
  (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  async (config: AxiosResponse) => Promise.resolve(config),
  (error: AxiosError) => {
    if (error.response?.status !== 401) return Promise.reject(error);
    // clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.replace("/auth/login");
    // window.location.reload();
  }
);

const get = (url: string, config?: RequestConfig) =>
  axiosInstance.get(url, config);
const post = (url: string, data: Object, config?: RequestConfig) =>
  axiosInstance.post(url, data, config);
const put = (url: string, data: Object, config?: RequestConfig) =>
  axiosInstance.put(url, data, config);
const del = (url: string, data?: Object) => axiosInstance.delete(url, data);
const patch = (url: string, data: Object, config?: RequestConfig) =>
  axiosInstance.patch(url, data, config);

export { get, post, put, del, patch };

export default axiosInstance;
