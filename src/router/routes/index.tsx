// import { ProtectedRoutes, PublicRoutes } from "@/components/core";

// layouts
import MainLayout from "@/layouts/main";
import DashboardLayout from "@/layouts/dashboard";

// routes
import AuthenticationRoutes from "./Authentication";
import { RoutesType } from "@/definitions/types";
import IdeaValidationRoutes from "./IdeaValidation";
import DashboardRoutes from "./OldDashboard";
import OnboardingRoutes from "./Onboarding";
import NewDashboardRoutes from "./dashboard";
import { ProtectedRoutes, PublicRoutes } from "@/components/core";

const mergedRoutes: RoutesType[] = [
  ...AuthenticationRoutes,
  ...OnboardingRoutes,
  ...IdeaValidationRoutes,
  ...DashboardRoutes,
  ...NewDashboardRoutes,
];

const getRoutesForLayout = (layout: string) => {
  const matchedRoutes: RoutesType[] = [];

  mergedRoutes.forEach((route: RoutesType) => {
    let matchedWithLayout = false;

    if (!route?.meta?.layout && layout === "main") matchedWithLayout = true;
    else if (route.meta && route.meta.layout && route.meta.layout === layout)
      matchedWithLayout = true;

    let isRestrictedRoute = false;

    if (matchedWithLayout) {
      if (route.meta && route.meta.isRestrictedRoute) isRestrictedRoute = true;
      const RouteTag = isRestrictedRoute ? PublicRoutes : ProtectedRoutes;
      route.element = <RouteTag>{route.element}</RouteTag>;
      matchedRoutes.push(route);
    }
  });
  return matchedRoutes;
};

const layouts = {
  main: <MainLayout />,
  dashboard: <DashboardLayout />,
};

const layoutsArr = Object.keys(layouts);

type LayoutKeyType = keyof typeof layouts;

const getRoutes = () => {
  const allRoutesWithLayouts = layoutsArr.map((layout: string) => {
    const routesWithLayout = getRoutesForLayout(layout);
    const Layout = layouts[layout as LayoutKeyType];

    return {
      path: "/",
      element: Layout,
      children: routesWithLayout,
    };
  });

  return allRoutesWithLayouts;
};

export default getRoutes;
