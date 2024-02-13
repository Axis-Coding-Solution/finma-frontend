import LoginPage from "@/pages/authentication/login";
import RegisterPage from "@/pages/authentication/register";

export default [
  {
    element: <LoginPage />,
    path: "/app/login",
    meta: {
      layout: 'blank',
    }
  },
  {
    element: <RegisterPage />,
    path: "/app/register",
    meta: {
      layout: 'blank'
    }
  },
];
