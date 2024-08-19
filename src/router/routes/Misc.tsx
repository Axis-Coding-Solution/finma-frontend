import { lazy } from "react";

const ErrorPage = lazy(() => import("@/pages/misc/404"));
export default [
  {
    path: "*",
    element: <ErrorPage />,
  },
];
