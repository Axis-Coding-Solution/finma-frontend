import { lazy } from "react";

const ChatBoxPage = lazy(() => import("@/pages/dashboard/chats"));
export default [
  {
    element: <ChatBoxPage />,
    path: "/dashboard/chats/:id?",
    meta: {
      layout: "dashboard",
    },
  },
];
