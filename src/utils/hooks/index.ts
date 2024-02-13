import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
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

// ** redux hooks
export const useAppStore = useStore;
export const useAppSelector = useSelector;
export const useAppDispatch = useDispatch;

// ** we can add our own hooks here too.
