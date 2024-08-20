import { lazy } from "react";

const FaqPage = lazy(() => import("@/_pages/dashboard/faq"));
const ChatBoxPage = lazy(() => import("@/_pages/dashboard/chats"));
const InnovatorPage = lazy(() => import("@/_pages/dashboard/innovator"));
const CommunityPage = lazy(() => import("@/_pages/dashboard/community"));
const ProductPage = lazy(() => import("@/_pages/dashboard/product"));
const MyProjectsPage = lazy(() => import("@/_pages/dashboard/my-projects"));
const MyTeamPage = lazy(() => import("@/_pages/dashboard/my-team"));
const Setting = lazy(() => import("@/_pages/dashboard/setting"));
const ProjectOverviewPage = lazy(
  () => import("@/_pages/dashboard/my-projects/overview")
);

export default [
  {
    element: <CommunityPage />,
    path: "/dashboard/community",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <MyTeamPage />,
    path: "/dashboard/my-team",
    meta: {
      layout: "dashboard",
    },
  },

  {
    element: <ProductPage />,
    path: "/dashboard/product-launch",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <InnovatorPage />,
    path: "/dashboard/innovator",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <FaqPage />,
    path: "/dashboard/faq",
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
  {
    element: <ChatBoxPage />,
    path: "/dashboard/chats/:id?",
    meta: {
      layout: "dashboard",
    },
  },
  {
    element: <Setting />,
    path: "/dashboard/settings",
    meta: {
      layout: "dashboard",
    },
  },
];
