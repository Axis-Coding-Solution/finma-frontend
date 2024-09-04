import { lazy } from "react";

const ProductPage = lazy(() => import("@/pages/dashboard/product"));
export default [
  {
    element: <ProductPage />,
    path: "/dashboard/product-launch",
    meta: {
      layout: "dashboard",
    },
  },
];
