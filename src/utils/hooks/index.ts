import { useCallback, useEffect, useMemo, useState } from "react";
import {
  useNavigation,
  useLocation,
  useParams,
  useSearchParams,
  useRoutes,
} from "react-router-dom";

// ** react-router-dom hooks
export const useAppNavigation = useNavigation;
export const useAppLocation = useLocation;
export const useAppParams = useParams;
export const useAppSearchParams = useSearchParams;
export const useAppRoutes = useRoutes;

// ** react hooks
export const useAppState = useState;
export const useAppUseEffect = useEffect;
export const useAppMemo = useMemo;
export const useAppCallback = useCallback;

// ** we can add our own hooks here too.
export { useAuth } from "./use-auth";
export { useModal } from "./use-modal";
export { useToastQuery } from "./use-toast-query";
