import AuthLayout from "@/layouts/AuthLayout";
import ExpertsOnboardingPage from "@/pages/onboarding/experts";
import ExpertsPublicViewPage from "@/pages/onboarding/experts/public-view";
import InnovatorsOnboardingPage from "@/pages/onboarding/innovators";
import MentorsOnboardingPage from "@/pages/onboarding/mentors";
import UserQuestionaryPage from "@/pages/onboarding/user-questionary";

export default [
  {
    element: <UserQuestionaryPage />,
    path: "/user-questionary",
    meta: {
      layout: "blank",
      isRestrictedRoute: true,
    },
  },
  {
    element: <AuthLayout />,
    path: "/onboarding",
    children: [
      {
        element: <InnovatorsOnboardingPage />,
        path: "innovators",
      },
      {
        element: <ExpertsOnboardingPage />,
        path: "experts",
      },
      {
        element: <MentorsOnboardingPage />,
        path: "mentors",
      },
    ],
    meta: {
      layout: "blank",
      isRestrictedRoute: true,
    },
  },
  {
    element: <ExpertsPublicViewPage />,
    path: "/onboarding/experts/public-view",
    meta: {
      layout: "blank",
      isRestrictedRoute: true,
    },
  },
];
