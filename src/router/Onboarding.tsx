import StartOnboardingPage from "@/pages/onboarding/start-onboarding";
import OnboardingLayout from "@/layouts/OnboardingLayout";
import IdeaClarityPage from "@/pages/onboarding/idea-clarity";
import IdeaClarityCompetitorsPage from "@/pages/onboarding/idea-clarity/competitors";
import IdeaClarityProblemPage from "@/pages/onboarding/idea-clarity/problem";
import IdeaClaritySolutionPage from "@/pages/onboarding/idea-clarity/solution";
import IdeaClarityTargetedAudiencePage from "@/pages/onboarding/idea-clarity/targeted-audience";

export default [
  {
    element: <StartOnboardingPage />,
    path: "/start-onboarding",
    meta: {
      layout: "blank",
    },
  },
  {
    element: <OnboardingLayout />,
    path: "/onboarding",
    children: [
      {
        element: <IdeaClarityPage />,
        path: "idea-clarity",
        children: [
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
        ],
      },
    ],
    meta: {
      layout: "blank",
    },
  },
];
