import { lazy } from "react";
const SelectRolePage = lazy(() => import("@/pages/authentication/select-role"));

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
  },
  {
    element: <SignUpPage />,
    path: "/auth/sign-up",
  },
  {
    element: <ResetPasswordPage />,
    path: "/auth/reset-password",
  },
  {
    element: <ForgetPasswordPage />,
    path: "/auth/forget-password",
  },
  {
    element: <SelectRolePage />,
    path: "/auth/select-role",
  },
];

export default AuthenticationRoutes;
