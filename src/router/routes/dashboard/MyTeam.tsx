import { lazy } from "react";

const MyTeamPage = lazy(() => import("@/pages/dashboard/my-team"));

export default[
    {
        element: <MyTeamPage />,
        path: "/dashboard/my-team",
        meta: {
          layout: "dashboard",
        },
      },
]