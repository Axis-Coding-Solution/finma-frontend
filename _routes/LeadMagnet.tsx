import { lazy } from "react";
import { Navigate } from "react-router-dom";

const StartLeadMagnetPage = lazy(() => import("@/_pages/lead-magnet/start"));
const LeadMagnetLayout = lazy(() => import("@/_layouts/LeadMagnetLayout"));
const IdeaClarityPage = lazy(() => import("@/_pages/lead-magnet/idea-clarity"));
const IdeaClarityCompetitorsPage = lazy(
  () => import("@/_pages/lead-magnet/idea-clarity/competitors")
);
const IdeaClarityProblemPage = lazy(
  () => import("@/_pages/lead-magnet/idea-clarity/problem")
);
const IdeaClaritySolutionPage = lazy(
  () => import("@/_pages/lead-magnet/idea-clarity/solution")
);
const IdeaClarityTargetedAudiencePage = lazy(
  () => import("@/_pages/lead-magnet/idea-clarity/targeted-audience")
);
const IdeaClarityCompletedPage = lazy(
  () => import("@/_pages/lead-magnet/idea-clarity/completed")
);
const RiskScorePage = lazy(() => import("@/_pages/lead-magnet/risk-score"));

export default [
  {
    element: <StartLeadMagnetPage />,
    path: "lead-magnet/start",
    meta: {
      layout: "blank",
    },
  },

  {
    element: <RiskScorePage />,
    path: "lead-magnet/risk-score",
    meta: {
      layout: "blank",
    },
  },
  {
    element: <LeadMagnetLayout />,
    path: "/lead-magnet",
    children: [
      {
        index: true,
        element: <Navigate to="idea-clarity/problem" replace />,
      },
      {
        element: <IdeaClarityPage />,
        path: "idea-clarity",
        children: [
          {
            index: true,
            element: <Navigate to="problem" replace />,
          },
          {
            element: <IdeaClarityProblemPage />,
            path: "problem",
          },
          {
            element: <IdeaClaritySolutionPage />,
            path: "solution",
          },
          {
            element: <IdeaClarityTargetedAudiencePage />,
            path: "targeted-audience",
          },
          {
            element: <IdeaClarityCompetitorsPage />,
            path: "competitors",
          },
          {
            element: <IdeaClarityCompletedPage />,
            path: "completed",
          },
        ],
      },
    ],
    meta: {
      layout: "blank",
    },
  },
];
