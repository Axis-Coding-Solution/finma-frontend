import { lazy } from "react";

import AuthLayout from "@/_layouts/AuthLayout";
const SignUpWithEmailPage = lazy(
  () => import("@/_pages/authentication/sign-up/email")
);
const LoginWithEmailPage = lazy(
  () => import("@/_pages/authentication/login/email")
);
const ResetPasswordCompletedPage = lazy(
  () => import("@/_pages/authentication/reset-password/completed")
);
const ForgetPasswordCompleted = lazy(
  () => import("@/_pages/authentication/forget-password/completed")
);
const SelectRolePage = lazy(
  () => import("@/_pages/authentication/select-role")
);

const ForgetPasswordPage = lazy(
  () => import("@/_pages/authentication/forget-password")
);
const LoginPage = lazy(() => import("@/_pages/authentication/login"));
const ResetPasswordPage = lazy(
  () => import("@/_pages/authentication/reset-password")
);
const SignUpPage = lazy(() => import("@/_pages/authentication/sign-up"));

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
