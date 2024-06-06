import { useAuth } from "@/utils/hooks";
import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const auth = useAuth();

  if (!auth?.isAuthenticated && !auth?.user)
    return <Navigate to="/auth/login" replace />;

  return children;
};
