import React from "react";

export const ProtectedRoutes = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  console.log("protected Route");
  return children;
};
