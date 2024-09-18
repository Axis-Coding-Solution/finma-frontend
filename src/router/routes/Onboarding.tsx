import { lazy } from "react";

const OnboardingSelectRolePage = lazy(
  () => import("@/pages/onboarding/select-role")
);
const OnboardingProfilePage = lazy(() => import("@/pages/onboarding/profile"));
const TermsAndConditionsPage = lazy(() => import("@/pages/onboarding/terms-conditions"));

const OnboardingRoutes = [
  {
    path: "onboarding/profile",
    element: <OnboardingProfilePage />,
  },
  {
    path: "onboarding/select-role",
    element: <OnboardingSelectRolePage />,
  },
  {
    path: "onboarding/terms-conditions",
    element: <TermsAndConditionsPage />,
  },
];

export default OnboardingRoutes;
