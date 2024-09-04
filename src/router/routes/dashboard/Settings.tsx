import { lazy } from "react";

const Setting = lazy(() => import("@/pages/dashboard/setting"));

export default [
    {
        element: <Setting />,
        path: "/dashboard/settings",
        meta: {
          layout: "dashboard",
        },
      },
]