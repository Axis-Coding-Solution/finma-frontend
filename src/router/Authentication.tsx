import AuthLayout from "@/layouts/AuthLayout";
import ResetPassword from "@/pages/authentication/reset-password";
import SignUpWithGoogle from "@/pages/authentication/sign-up/google";
import SignUpWithEmail from "@/pages/authentication/sign-up/email";
import { PasswordChanged } from "@/pages/components/auth/changed-password/password-changed";
import { PasswordChange } from "@/pages/components/auth/change-password/password-change";
import { lazy } from "react";
import PersonalInfo from "@/pages/authentication/on-boarding";

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
        path: "/auth/sign-up",
      },
      {
        element: <SignUpWithEmail />,
        path: "/auth/sign-up/email",
      },
      {
        element: <SignUpWithGoogle />,
        path: "/auth/sign-up/google",
      },
      {
        element: <ResetPassword />,
        path: "/auth/reset-password",
      },
      {
        element: <PasswordChange />,
        path: "/auth/reset-password/change",
      },
      {
        element: <PasswordChanged />,
        path: "/auth/reset-password/completed",
      },
      {
        element: <PersonalInfo />,
        path: "/auth/personal-info",
      },
    ],
    meta: {
      layout: "blank",
    },
  },
];
