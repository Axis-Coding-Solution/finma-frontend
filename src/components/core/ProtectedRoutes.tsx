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
      console.log("🚀 ~ useEffect ~ token && user:", user)
      const parsedUser = JSON.parse(user);
      if (
        parsedUser.role &&
        parsedUser.firstName &&
        parsedUser.lastName &&
        parsedUser.entrepreneurType
      ) {
        auth?.handleLogin({ user: parsedUser, token });
        if (pathname.includes("/onboarding")) {
          navigate("/dashboard/my-startups", options);
        } else {
          navigate(pathname, options);
        }
      } else {
        if (pathname.includes("/dashboard")) {
          navigate("/onboarding/select-role", options);
        } else {
          navigate(pathname, options);
        }
        auth?.handleLoginToSession({ user: parsedUser, token });
      }
    }
    if (!token && !user && !auth?.isAuthenticated && !auth?.user)
      navigate("/auth/login", options);
    else if (
      pathname.includes("/dashboard") &&
      (!auth?.user?.role || !auth?.user?.firstName || !auth?.user?.lastName)
    ) {
      navigate("/onboarding/select-role", options);
    } else if (
      pathname.includes("/onboarding") &&
      auth?.user?.role &&
      auth?.user?.firstName &&
      auth?.user?.lastName
    ) {
      navigate("/dashboard/my-startups", options);
    }

    setIsMounted(true);
    return () => setIsMounted(false);
  }, [token, user]);

  return isMounted ? children : null;
};
