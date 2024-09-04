import { lazy } from "react";

const LoginPage = lazy(() => import("@/pages/authentication/login"));
const SignUpPage = lazy(() => import("@/pages/authentication/sign-up"));
const ForgetPasswordPage = lazy(
  () => import("@/pages/authentication/forget-password")
);
const ResetPasswordPage = lazy(
  () => import("@/pages/authentication/reset-password")
);

const AuthenticationRoutes = [
  {
    element: <LoginPage />,
    path: "/auth/login",
    meta: {
      isRestrictedRoute: true,
    },
  },
  {
    element: <SignUpPage />,
    path: "/auth/sign-up",
    meta: {
      isRestrictedRoute: true,
    },
  },
  {
    element: <ResetPasswordPage />,
    path: "/auth/reset-password",
    meta: {
      isRestrictedRoute: true,
    },
  },
  {
    element: <ForgetPasswordPage />,
    path: "/auth/forget-password",
    meta: {
      isRestrictedRoute: true,
    },
  },
];

export default AuthenticationRoutes;
