import { Navigate } from "react-router-dom";

import StartLeadMagnetPage from "@/pages/lead-magnet/start";
import LeadMagnetLayout from "@/layouts/LeadMagnetLayout";
import IdeaClarityPage from "@/pages/lead-magnet/idea-clarity";
import IdeaClarityCompetitorsPage from "@/pages/lead-magnet/idea-clarity/competitors";
import IdeaClarityProblemPage from "@/pages/lead-magnet/idea-clarity/problem";
import IdeaClaritySolutionPage from "@/pages/lead-magnet/idea-clarity/solution";
import IdeaClarityTargetedAudiencePage from "@/pages/lead-magnet/idea-clarity/targeted-audience";
import IdeaClarityCompletedPage from "@/pages/lead-magnet/idea-clarity/completed";
import RiskScorePage from "@/pages/lead-magnet/risk-score";

export default [
  {
    element: <StartLeadMagnetPage />,
    path: "lead-magnet/start",
    meta: {
      layout: "blank",
      isRestrictedRoute: true,
    },
  },
 
  {
    element: <RiskScorePage />,
    path: "lead-magnet/risk-score",
    meta: {
      layout: "blank",
      isRestrictedRoute: true,
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
      isRestrictedRoute: true,
    },
  },
];
