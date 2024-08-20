import { lazy } from "react";

const ExpertsOnboardingPage = lazy(() => import("@/_pages/onboarding/experts"));
const ExpertsPublicViewPage = lazy(
  () => import("@/_pages/onboarding/experts/public-view")
);
const InnovatorsOnboardingPage = lazy(
  () => import("@/_pages/onboarding/innovators")
);
const MentorsOnboardingPage = lazy(() => import("@/_pages/onboarding/mentors"));
const TermsAndConditionsPage = lazy(
  () => import("@/_pages/onboarding/terms-conditions")
);
const UserQuestionaryPage = lazy(
  () => import("@/_pages/onboarding/user-questionary")
);

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
    },
  },
  {
    element: <ExpertsOnboardingPage />,
    path: "/onboarding/experts",
    meta: {
      layout: "blank",
    },
  },
  {
    element: <MentorsOnboardingPage />,
    path: "/onboarding/mentors",
    meta: {
      layout: "blank",
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
    },
  },
];
