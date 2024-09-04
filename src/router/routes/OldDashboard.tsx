import { lazy } from "react";

const InnovatorPage = lazy(() => import("@/pages/dashboard/innovator"));
const MyProjectsPage = lazy(() => import("@/pages/dashboard/my-projects"));
const ProjectOverviewPage = lazy(
  () => import("@/pages/dashboard/my-projects/overview")
);

export default [  
  {
    element: <InnovatorPage />,
    path: "/dashboard/innovator",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <MyProjectsPage />,
    path: "/dashboard/my-projects",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <ProjectOverviewPage />,
    path: "/dashboard/my-projects/:id",
    meta: {
      layout: "dashboard",
    },
  },
  
];
