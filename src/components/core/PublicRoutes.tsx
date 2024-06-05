import { useAuth } from "@/utils/hooks";
import React from "react";

export const PublicRoutes = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  if (auth?.isAuthenticated) return null;
  return children;
};
