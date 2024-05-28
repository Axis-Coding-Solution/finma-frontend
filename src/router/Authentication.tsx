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
];
