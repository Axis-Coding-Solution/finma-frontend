import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import MainLayout from "@/layouts/main";
import getRoutesForLayouts from "./routes";
import { getHomeRoute } from "@/utils";

// ** Components
const ErrorPage = lazy(() => import("@/pages/misc/404"));
const NotAuthorizedPage = lazy(() => import("@/pages/misc/not-authorized"));

const allRoutes = getRoutesForLayouts();

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate replace to={getHomeRoute()} />,
    },
    {
      path: "/auth/not-auth",
      element: <MainLayout />,
      children: [{ path: "/auth/not-auth", element: <NotAuthorizedPage /> }],
    },
    {
      path: "*",
      element: <MainLayout />,
      children: [{ path: "*", element: <ErrorPage /> }],
    },
    ...allRoutes,
  ]);

  return routes;
};

export default Router;
