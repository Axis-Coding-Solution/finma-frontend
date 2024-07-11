import FaqPage from "@/pages/dashboard/faq";
import ChatBoxPage from "@/pages/dashboard/chats";
import OverviewPage from "@/pages/dashboard/overview";
import InnovatorPage from "@/pages/dashboard/innovator";
import CommunityPage from "@/pages/dashboard/community";
import { ProductPage } from "@/pages/dashboard/product";
import MyProjectsPage from "@/pages/dashboard/my-projects";
import MyTeamPage from "@/pages/dashboard/my-team";
import Setting from "@/pages/dashboard/setting";

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
    element: <OverviewPage />,
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
