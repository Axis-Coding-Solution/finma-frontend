import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { errorToast, successToast } from "..";

type ParamsTypes = {
  queryName?: string;
  type?: "success" | "error";
};

export const useToastQuery = ({
  queryName = "infoMessage",
  type = "success",
}: ParamsTypes) => {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toasts = {
    success: successToast,
    error: errorToast,
  };

  const infoMessage = searchParams.get(queryName);

  useEffect(() => {
    if (infoMessage) {
      toasts[type](infoMessage);
      searchParams.delete(queryName);
      const query = searchParams.toString();
      navigate(`${pathname}?${query}`, {
        replace: true,
      });
    }
  }, [infoMessage]);
};
