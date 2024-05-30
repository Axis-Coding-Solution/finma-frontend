import AboutPage from "@/pages/dashboard/about";
import OverviewPage from "@/pages/dashboard/overview";

export default [
  {
    element: <OverviewPage />,
    path: "/dashboard/overview",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <AboutPage />,
    path: "/dashboard/about",
    meta: {
      layout: "dashboard",
    },
  },
];
