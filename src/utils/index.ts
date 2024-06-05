// ** all utility function would come here. we can use class based utility here for better way of coding

import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { toast } from "react-hot-toast";

export const getAuthFromStorage = () => {
  if (typeof window !== "undefined") {
    const user = JSON.parse(localStorage.getItem("user") ?? "null");
    const token = localStorage.getItem("token");
    const isAuthenticated = token && user ? true : false;
    return { user, isAuthenticated, token };
  }
};

export const successToast = (message: string) => toast.success(message);
export const errorToast = (message: string | null | undefined) =>
  toast.error(message ?? "Runtime Error!");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
