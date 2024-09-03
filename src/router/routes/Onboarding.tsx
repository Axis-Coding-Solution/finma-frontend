import { lazy } from "react";

const OnboardingSelectRolePage = lazy(
  () => import("@/pages/onboarding/select-role")
);
const OnboardingProfilePage = lazy(() => import("@/pages/onboarding/profile"));

const OnboardingRoutes = [
  {
    path: "onboarding/profile",
    element: <OnboardingProfilePage />,
  },
  {
    path: "onboarding/select-role",
    element: <OnboardingSelectRolePage />,
  },
];

export default OnboardingRoutes;
