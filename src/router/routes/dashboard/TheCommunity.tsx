import { lazy } from "react";

const CommunityPage = lazy(() => import("@/pages/dashboard/community"));

export default [
  {
    element: <CommunityPage />,
    path: "/dashboard/community",
    meta: {
      layout: "dashboard",
    },
  },
];
