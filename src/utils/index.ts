// ** all utility function would come here. we can use class based utility here for better way of coding

import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { toast } from "react-hot-toast";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInYears } from "date-fns";

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

export function convertDate(date: any) {
  const startDate = new Date(date);
  const endDate = new Date(); // Current date and time

  let formattedDuration = '';
  const years = differenceInYears(endDate, startDate);
  if (years > 0) {
    formattedDuration = `${years} y`;
  } else {
    const months = differenceInMonths(endDate, startDate);
    if (months > 0) {
      formattedDuration = `${months} m`;
    } else {
      const days = differenceInDays(endDate, startDate);
      if (days > 0) {
        formattedDuration = `${days} d`;
      } else {
        const hours = differenceInHours(endDate, startDate);
        if (hours > 0) {
          formattedDuration = `${hours} h`;
        } else {
          const minutes = differenceInMinutes(endDate, startDate);
          if (minutes > 0) {
            formattedDuration = `${minutes} min`;
          } else {
            formattedDuration = '0 min';
          }
        }
      }
    }
  }
  return formattedDuration;
}
