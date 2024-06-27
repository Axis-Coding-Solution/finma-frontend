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

export const saveUserToLocalStorage = ({
  user,
  token,
}: {
  user: any;
  token: string;
}) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  }
  return;
};

export const removeUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
  return;
};

export const successToast = (message: string) => toast.success(message);
export const errorToast = (message: string | null | undefined) =>
  toast.error(message ?? "Runtime Error!");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function truncateText(text: string, length: number) {
  if (text.length <= length) {
    return text;
  }
  return text.substring(0, length) + "...";
}
