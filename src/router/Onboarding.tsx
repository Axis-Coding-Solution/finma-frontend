import StartOnboardingPage from "@/pages/onboarding/start-onboarding";
import OnboardingLayout from "@/layouts/OnboardingLayout";
import IdeaClarityPage from "@/pages/onboarding/idea-clarity";
import IdeaClarityCompetitorsPage from "@/pages/onboarding/idea-clarity/competitors";
import IdeaClarityProblemPage from "@/pages/onboarding/idea-clarity/problem";
import IdeaClaritySolutionPage from "@/pages/onboarding/idea-clarity/solution";
import IdeaClarityTargetedAudiencePage from "@/pages/onboarding/idea-clarity/targeted-audience";
import { Navigate } from "react-router-dom";
import IdeaClarityCompletedPage from "@/pages/onboarding/idea-clarity/completed";
import RiskScorePage from "@/pages/onboarding/Risk-Score";
import UserQuestionaryPage from "@/pages/onboarding/user-questionary";

export default [
  {
    element: <StartOnboardingPage />,
    path: "/start-onboarding",
    meta: {
      layout: "blank",
      isRestrictedRoute: true,
    },
  },
  {
    element: <UserQuestionaryPage />,
    path: "/user-questionary",
    meta: {
      layout: "blank",
    },
  },
  {
    element: <RiskScorePage />,
    path: "/risk-score",
    meta: {
      layout: "blank",
      isRestrictedRoute: true,
    },
  },
  {
    element: <OnboardingLayout />,
    path: "/onboarding",
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
