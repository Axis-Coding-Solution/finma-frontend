import { lazy } from "react";

const FaqPage = lazy(() => import("@/pages/dashboard/faq"));
const ChatBoxPage = lazy(() => import("@/pages/dashboard/chats"));
const InnovatorPage = lazy(() => import("@/pages/dashboard/innovator"));
const CommunityPage = lazy(() => import("@/pages/dashboard/community"));
const ProductPage = lazy(() => import("@/pages/dashboard/product"));
const MyProjectsPage = lazy(() => import("@/pages/dashboard/my-projects"));
const MyTeamPage = lazy(() => import("@/pages/dashboard/my-team"));
const Setting = lazy(() => import("@/pages/dashboard/setting"));
const MyStartupPage= lazy (()=>import("@/pages/dashboard/startups"));
const StartupDetailPage = lazy(()=>import("@/pages/dashboard/startups/details"))
const ProjectOverviewPage = lazy(
  () => import("@/pages/dashboard/my-projects/overview")
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
