import AboutPage from "@/pages/dashboard/about";
import ChatBoxPage from "@/pages/dashboard/chats";
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
  {
    element: <ChatBoxPage />,
    path: "/dashboard/chat/:expert",
    meta: {
      layout: "dashboard",
    },
  },
];
