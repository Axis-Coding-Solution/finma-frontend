import { useCallback, useEffect, useMemo, useState } from "react";
import {
  useNavigation,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

// ** react-router-dom hooks
export const useAppNavigation = useNavigation;
export const useAppLocation = useLocation;
export const useAppParams = useParams;
export const useAppSearchParams = useSearchParams;

// ** react hooks
export const useAppState = useState;
export const useAppUseEffect = useEffect;
export const useAppMemo = useMemo;
export const useAppCallback = useCallback;

// ** redux hooks

// ** we can add our own hooks here too.
