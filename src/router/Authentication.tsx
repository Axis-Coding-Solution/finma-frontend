import ResetPassword from "@/pages/authentication/reset-password";
import SignUpWithEmail from "@/pages/authentication/sign-up/email";
import { PasswordChange } from "@/pages/components/auth/changed-password/password-change";
import { PersonalInfo } from "@/pages/components/auth/personal-Information/personal-info";
import { GoogleForm } from "@/pages/components/auth/sign-up/google-form";
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
    element: <ForgetPasswordPage />,
    path: "/auth/forget-password",
    meta: {
      layout: "blank",
    },
  },
  {
    element: <LoginPage />,
    path: "/auth/login",
    meta: {
      layout: "blank",
    },
  },

  {
    element: <ResetPasswordPage />,
    path: "/auth/reset-password",
    meta: {
      layout: "blank",
    },
  },

{
    element: <SignUpPage />,
    path: "/auth/sign-up",
    meta: {
      layout: "blank",
    },
  },
{
    element: <SignUpWithEmail />,
    path: "/auth/sign-up/email",
    meta: {
      layout: "blank",
    },
  },
{
    element: <ResetPassword />,
    path: "/auth/reset-password",
    meta: {
      layout: "blank",
    },
  },
{
    element: <PasswordChange />,
    path: "/auth/changed-password",
    meta: {
      layout: "blank",
    },
  },
{
    element: <PersonalInfo/>,
    path: "/auth/personal-info",
    meta: {
      layout: "blank",
    },
  },
];
