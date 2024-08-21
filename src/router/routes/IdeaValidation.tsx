import { lazy } from "react";

const Start = lazy(() => import("@/pages/idea-validation/start"));
const Details = lazy(() => import("@/pages/idea-validation/details/_index"));
const StartUp = lazy(() => import("@/pages/idea-validation/startup"));

const IdeaValidationRoutes = [
  {
    element: <Start />,
    path: "/idea-validation/start",
  },
  {
    path: "/idea-validation/details",
    element: <Details />,
  },
  {
    path: "/idea-validation/startup",
    element: <StartUp />,
  },
];

export default IdeaValidationRoutes;
