import ExpertsOnboardingPage from "@/pages/onboarding/experts";
import ExpertsPublicViewPage from "@/pages/onboarding/experts/public-view";
import InnovatorsOnboardingPage from "@/pages/onboarding/innovators";
import MentorsOnboardingPage from "@/pages/onboarding/mentors";
import TermsAndConditionsPage from "@/pages/onboarding/terms-conditions";
import UserQuestionaryPage from "@/pages/onboarding/user-questionary";

export default [
  {
    element: <UserQuestionaryPage />,
    path: "/user-questionary",
    meta: {
      layout: "blank",
    },
  },
  {
    element: <InnovatorsOnboardingPage />,
    path: "/onboarding/innovators",
    meta: {
      layout: "blank",
      isRestrictedRoute: true,
    },
  },
  {
    element: <ExpertsOnboardingPage />,
    path: "/onboarding/experts",
    meta: {
      layout: "blank",
      isRestrictedRoute: true,
    },
  },
  {
    element: <MentorsOnboardingPage />,
    path: "/onboarding/mentors",
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
    },
  },
  {
    element: <TermsAndConditionsPage />,
    path: "/onboarding/terms-conditions",
    meta: {
      layout: "blank",
      isRestrictedRoute: true,
    },
  },
];
