import IdeaClarity from "@/pages/idea-clarity-new";
import StartStartup from "@/pages/idea-clarity-new/start-startup";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const StartLeadMagnetPage = lazy(() => import("@/pages/lead-magnet/start"));
const LeadMagnetLayout = lazy(() => import("@/layouts/LeadMagnetLayout"));
const IdeaClarityPage = lazy(() => import("@/pages/lead-magnet/idea-clarity"));
const IdeaClarityCompetitorsPage = lazy(
  () => import("@/pages/lead-magnet/idea-clarity/competitors")
);
const IdeaClarityProblemPage = lazy(
  () => import("@/pages/lead-magnet/idea-clarity/problem")
);
const IdeaClaritySolutionPage = lazy(
  () => import("@/pages/lead-magnet/idea-clarity/solution")
);
const IdeaClarityTargetedAudiencePage = lazy(
  () => import("@/pages/lead-magnet/idea-clarity/targeted-audience")
);
const IdeaClarityCompletedPage = lazy(
  () => import("@/pages/lead-magnet/idea-clarity/completed")
);
const RiskScorePage = lazy(() => import("@/pages/lead-magnet/risk-score"));

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
    path: "lead-magnet",
    children: [
      {
        index: true,
        element: <Navigate to="idea-clarity/problem" replace />,
      },
      {
        element: <IdeaClarityPage />,
        path: "old-idea-clarity",
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
  {
    element: <StartStartup />,
    path: "start-startup",
    // children: [
    //   {
    //     element: <IdeaClarity />,
    //     path: "idea-clarity",
       
    //   },
    // ],
    meta: {
      layout: "blank",
    },
  },
  {
    element: <IdeaClarity />,
    path: "idea-clarity",
    // children: [
    //   {
    //     element: <IdeaClarity />,
    //     path: "idea-clarity",
       
    //   },
    // ],
    meta: {
      layout: "blank",
    },
  },
];
