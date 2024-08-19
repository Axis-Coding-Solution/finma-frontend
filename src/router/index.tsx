import { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";

import MainLayout from "@/layouts/main";
import getRoutesForLayouts from "./routes";

// ** Components
const ErrorPage = lazy(() => import("@/pages/misc/404"));
const NotAuthorizedPage = lazy(() => import("@/pages/misc/not-authorized"));

const getHomeRoute = () => {
  return "/auth/login";
};

const Router = () => {
  const allRoutes = getRoutesForLayouts();

  const routes = useRoutes([
    {
      path: "/",
      index: true,
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
