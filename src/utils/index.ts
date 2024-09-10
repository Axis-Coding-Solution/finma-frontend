// ** all utility function would come here. we can use class based utility here for better way of coding

import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { toast } from "react-hot-toast";
import { ClassNamesConfig, GroupBase } from "react-select";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

export const getAuthFromStorage = () => {
  if (typeof window !== "undefined") {
    let user = JSON.parse(localStorage.getItem("user") ?? "null");
    let token = localStorage.getItem("token");
    if (!user) user = JSON.parse(sessionStorage.getItem("user") ?? "null");
    if (!token) token = sessionStorage.getItem("token");

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

export const saveUserToSessionStorage = ({
  user,
  token,
}: {
  user: any;
  token: string;
}) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("token", token);
  }
  return;
};

export const removeUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
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

export const classNamesReactSelect: ClassNamesConfig<
  unknown,
  boolean,
  GroupBase<unknown>
> = {
  control: ({ isFocused }) =>
    cn(
      "group border-b transition-all bg-input text-foreground overflow-visible",
      isFocused ? "border-muted-foreground" : "border-muted-foreground"
    ),
  dropdownIndicator: ({ selectProps }) =>
    cn(
      "px-5 !transition-all",
      selectProps.menuIsOpen ? "rotate-180" : "rotate-0"
    ),
  placeholder: ({isFocused}) => cn("relative text-muted-foreground transition ", isFocused ? '-translate-y-5': 'translate-y-0'),
  multiValueRemove: () => "hover:text-red-400",
  valueContainer: () =>
    "w-full h-full py-3 px-1 flex gap-1 items-center !overflow-visible text-sm",
  multiValue: () =>
    "bg-success text-success-foreground px-1.5 py-0.5 rounded text-sm",
  menuPortal: () => "!z-50",
  menu: () =>
    "!z-1  absolute top-[100%]  shadow-md my-2 box-border border rounded-sm text-sm bg-input border-border",
  menuList: () => "px-1.5 h-full relative overflow-y-auto box-border py-1.5",
  // menuPortal: () => "!z-50",
  clearIndicator: ({ selectProps }) =>
    cn(
      "cursor-pointer hover:bg-danger/10 p-1 rounded text-danger",
      selectProps.isClearable ? "block" : "none"
    ),
  noOptionsMessage: () =>
    "text-foreground min-h-8 py-2 px-2 text-sm font-medium flex items-center justify-center",
  option: ({ isSelected }) =>
    cn(
      "rounded-sm py-2 px-3 w-full !cursor-pointer focus-visible:bg-light-gray",
      isSelected
        ? "bg-secondary transition hover:bg-secondary text-secondary-foreground"
        : "hover:bg-light-gray text-foreground"
    ),
};

export function convertDate(date: any) {
  const startDate = new Date(date);
  const endDate = new Date(); // Current date and time

  let formattedDuration = "";
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
            formattedDuration = "0 min";
          }
        }
      }
    }
  }
  return formattedDuration;
}

export const createFormData = (values: any = {}, options: any = {}) => {
  const { filter = [] } = options;
  const formData = new FormData();
  for (const key in values) {
    if (Object.hasOwnProperty.call(values, key)) {
      let value = values[key];
      if (value instanceof File === false && typeof value === "object") {
        value = JSON.stringify(values[key]);
      }
      if (filter.includes(key)) {
        continue;
      }
      formData.append(key, value);
    }
  }
  return formData;
};

export const getHomeRoute = () => {
  const authState = getAuthFromStorage();
  const user = authState?.user;
  const isAuthenticated = authState?.isAuthenticated;
  if (!isAuthenticated) return "/auth/login";
  if (!user.role)
    return "/onboarding/select-role?infoMessage=Continue by selecting your role!";
  return "dashboard/community";
};
