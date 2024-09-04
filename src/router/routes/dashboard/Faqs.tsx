import { lazy } from "react";

const FaqPage = lazy(() => import("@/pages/dashboard/faq"));
export default [
  {
    element: <FaqPage />,
    path: "/dashboard/faq",
    meta: {
      layout: "dashboard",
    },
  },
];
