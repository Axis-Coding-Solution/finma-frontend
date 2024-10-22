import { lazy } from "react";

const LoginPage = lazy(() => import("@/pages/authentication/login"));
const SignUpPage = lazy(() => import("@/pages/authentication/sign-up"));
const SignUpCompletedPage = lazy(
  () => import("@/pages/authentication/sign-up/completed")
);
const ForgetPasswordPage = lazy(
  () => import("@/pages/authentication/forget-password")
);
const ResetPasswordPage = lazy(
  () => import("@/pages/authentication/reset-password")
);
const EmailVerificationPage = lazy(
  () => import("@/pages/authentication/email-verification")
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
  {
    element: <SignUpCompletedPage />,
    path: "/auth/sign-up/completed",
  },
  {
    element: <EmailVerificationPage />,
    path: "/auth/email-verification",
  },
];

export default AuthenticationRoutes;
