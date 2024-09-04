import { lazy } from "react";

const MyStartupPage = lazy(() => import("@/pages/dashboard/startups"));
const StartupDetailPage = lazy(
  () => import("@/pages/dashboard/startups/details")
);
const StartupIdeaValidation = lazy(
  () => import("@/pages/dashboard/startups/details/idea-validation")
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
    path: "/dashboard/my-startups/detail",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <StartupIdeaValidation />,
    path: "/dashboard/my-startups/idea-validation",
    meta: {
      layout: "dashboard",
    },
  },
];
