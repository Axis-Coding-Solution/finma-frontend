import { lazy } from "react";

const MyStartupPage = lazy(() => import("@/pages/dashboard/startups"));
const StartupDetailPage = lazy(
  () => import("@/pages/dashboard/startups/details")
);
const StartupIdeaValidation = lazy(
  () => import("@/pages/dashboard/startups/details/idea-validation")
);
const StartupMarketGrowth = lazy(
  () => import("@/pages/dashboard/startups/details/market-growth")
);

export default [
  {
    element: <MyStartupPage />,
    path: "/dashboard/my-startups",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupDetailPage />,
    path: "/dashboard/my-startups/:id",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupIdeaValidation />,
    path: "/dashboard/my-startups/:id/idea-validation",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupMarketGrowth />,
    path: "/dashboard/my-startups/:id/market-research",
    meta: {
      layout: "dashboard",
    },
  },
];