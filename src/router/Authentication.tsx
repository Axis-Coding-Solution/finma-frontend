import { lazy } from "react";

import AuthLayout from "@/layouts/AuthLayout";
import SignUpWithEmailPage from "@/pages/authentication/sign-up/email";
import LoginWithEmailPage from "@/pages/authentication/login/email";
import ResetPasswordCompletedPage from "@/pages/authentication/reset-password/completed";
import ForgetPasswordCompleted from "@/pages/authentication/forget-password/completed";

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
