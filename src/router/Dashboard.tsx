import FaqPage from "@/pages/dashboard/faq";
import ChatBoxPage from "@/pages/dashboard/chats";
import OverviewPage from "@/pages/dashboard/overview";
import InnovatorPage from "@/pages/dashboard/innovator";

export default [
  {
    element: <OverviewPage />,
    path: "/dashboard/overview",
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
    element: <ChatBoxPage />,
    path: "/dashboard/chats/:id?",
    meta: {
      layout: "dashboard",
    },
  },
];
