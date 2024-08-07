import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/utils/hooks";
import { useEffect } from "react";

const options = {
  replace: true,
};

export const ProtectedRoutes = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const auth = useAuth();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");
  const user = searchParams.get("user");

  useEffect(() => {
    if (token && user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.onboarding) {
        auth?.handleLogin({ user: parsedUser, token });
      } else {
        auth?.handleLoginToSession({ user: parsedUser, token });
      }
      navigate(pathname, options);
    }
    if (!token && !user && !auth?.isAuthenticated && !auth?.user)
      navigate("/auth/login", options);
  }, [token, user, auth?.isAuthenticated, auth?.user]);

  return children;
};
