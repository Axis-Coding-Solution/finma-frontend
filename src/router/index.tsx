import { useRoutes } from "react-router-dom";

import BlankLayout from "@/layouts/BlankLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import AuthenticationRoutes from "./Authentication";
import DashboardRoutes from "./Dashboard";
import OnboardingRoutes from "./Onboarding";
import LeadMagnetRoutes from "./LeadMagnet";

import { ProtectedRoutes, PublicRoutes } from "@/components/core";
import { RoutesType } from "@/definitions/types";
import MiscRoutes from "./Misc";

const mergedRoutes: RoutesType[] = [
  ...AuthenticationRoutes,
  ...DashboardRoutes,
  ...OnboardingRoutes,
  ...LeadMagnetRoutes,
];

const getRoutesForLayout = (layout: string) => {
  const matchedRoutes: RoutesType[] = [];

  mergedRoutes.forEach((route: RoutesType) => {
    let matchedWithLayout = false;

    if (!route.meta && layout === "main") matchedWithLayout = true;
    else if (route.meta && route.meta.layout && route.meta.layout === layout)
      matchedWithLayout = true;

    let isRestrictedRoute = false;

    if (matchedWithLayout) {
      if (route.meta && route.meta.isRestrictedRoute) isRestrictedRoute = true;

      const RouteTag = isRestrictedRoute ? PublicRoutes : ProtectedRoutes;
      route.element = (
        <RouteTag {...(isRestrictedRoute ? { route } : {})}>
          {route.element}
        </RouteTag>
      );

      matchedRoutes.push(route);
    }
  });
  return matchedRoutes;
};

const layouts = {
  blank: <BlankLayout />,
  dashboard: <DashboardLayout />,
};

const layoutsArr = Object.keys(layouts);

type LayoutKeyType = keyof typeof layouts;

const Router = () => {
  const allRoutesWithLayouts = layoutsArr.map((layout: string) => {
    const routesWithLayout = getRoutesForLayout(layout);
    const Layout = layouts[layout as LayoutKeyType];

    return {
      path: "/",
      element: Layout,
      children: routesWithLayout,
    };
  });

  const Routes = useRoutes([...allRoutesWithLayouts, ...MiscRoutes]);

  return Routes;
};

export default Router;
