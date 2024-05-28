import AuthLayout from "@/layouts/AuthLayout";
import ResetPassword from "@/pages/authentication/reset-password";
import SignUpWithEmail from "@/pages/authentication/sign-up/email";
import { PasswordChange } from "@/pages/components/auth/changed-password/password-change";
import { PersonalInfo } from "@/pages/components/auth/personal-Information/personal-info";
import { lazy } from "react";

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
        element: <ForgetPasswordPage />,
        path: "forget-password",
      },
      {
        element: <LoginPage />,
        path: "login",
      },

      {
        element: <ResetPasswordPage />,
        path: "reset-password",
      },

      {
        element: <SignUpPage />,
        path: "sign-up",
      },
      {
        element: <SignUpWithEmail />,
        path: "sign-up/email",
      },
      {
        element: <ResetPassword />,
        path: "reset-password",
      },
      {
        element: <PasswordChange />,
        path: "changed-password",
      },
      {
        element: <PersonalInfo />,
        path: "personal-info",
      },
    ],
    meta: {
      layout: "blank",
    },
  },
];
