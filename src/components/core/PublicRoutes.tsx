import React from "react";
import { getHomeRoute } from "@/utils";
import { useAuth } from "@/utils/hooks";
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  if (auth?.isAuthenticated && auth?.user)
    return <Navigate to={getHomeRoute()} replace />;

  return children;
};
