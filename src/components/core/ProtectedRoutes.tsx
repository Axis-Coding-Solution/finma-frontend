import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/utils/hooks";
import { useEffect, useState } from "react";

const options = {
  replace: true,
};

export const ProtectedRoutes = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const auth = useAuth();

  const token = searchParams.get("token");
  const user = searchParams.get("user");

  useEffect(() => {
    if (token && user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.role) {
        auth?.handleLogin({ user: parsedUser, token });
      } else {
        auth?.handleLoginToSession({ user: parsedUser, token });
      }
      navigate(pathname, options);
    }
    if (!token && !user && !auth?.isAuthenticated && !auth?.user)
      navigate("/auth/login", options);
    setIsMounted(true);
    return () => setIsMounted(false);
  }, [token, user]);

  return isMounted ? children : null;
};
