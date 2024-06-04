// ** all utility function would come here. we can use class based utility here for better way of coding

import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { toast } from "react-hot-toast";

export const getUserAuthStatus = () => {
  // add auth status here
  return { token: "", status: true };
};

export const successToast = (message: string) => toast.success(message);
export const errorToast = (message: string | null | undefined) =>
  toast.error(message ?? "Runtime Error!");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
