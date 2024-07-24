import { lazy } from "react";

import AuthLayout from "@/layouts/AuthLayout";
const SignUpWithEmailPage = lazy(
  () => import("@/pages/authentication/sign-up/email")
);
const LoginWithEmailPage = lazy(
  () => import("@/pages/authentication/login/email")
);
const ResetPasswordCompletedPage = lazy(
  () => import("@/pages/authentication/reset-password/completed")
);
const ForgetPasswordCompleted = lazy(
  () => import("@/pages/authentication/forget-password/completed")
);
const SelectRolePage = lazy(() => import("@/pages/authentication/select-role"));

const ForgetPasswordPage = lazy(
  () => import("@/pages/authentication/forget-password")
);
const LoginPage = lazy(() => import("@/pages/authentication/login"));
const ResetPasswordPage = lazy(
  () => import("@/pages/authentication/reset-password")
);
const SignUpPage = lazy(() => import("@/pages/authentication/sign-up"));

export default [
  {
    element: <SelectRolePage />,
    path: "/select-role",
    meta: {
      layout: "blank",
      isRestrictedRoute: true,
    },
  },
  {
    element: <AuthLayout />,
    path: "/auth",
    children: [
      {
        element: <LoginPage />,
        path: "login",
      },
      {
        element: <LoginWithEmailPage />,
        path: "login/email",
      },
      {
        element: <SignUpPage />,
        path: "sign-up",
      },
      {
        element: <SignUpWithEmailPage />,
        path: "sign-up/email",
      },
      {
        element: <ResetPasswordPage />,
        path: "reset-password",
      },
      {
        element: <ForgetPasswordPage />,
        path: "forget-password",
      },
      {
        element: <ForgetPasswordCompleted />,
        path: "forget-password/completed",
      },
      {
        element: <ResetPasswordCompletedPage />,
        path: "reset-password/completed",
      },
    ],
    meta: {
      layout: "blank",
      isRestrictedRoute: true,
    },
  },
];
