import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./button";
import React from "react";

export const WizardDialog = ({
  children,
  show,
  text,
}: {
  children: React.ReactNode;
  show?: boolean;
  text?: string;
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (!show) return children;
  return (
    <>
      <div className="relative sm:w-auto w-full">
        {children}
        <div className="bg-secondary z-20 sm:w-[400px] w-full flex justify-between items-center absolute rounded-sm sm:right-12 right-0 top-14 px-3 py-2   before:size-6 before:bg-secondary before:absolute before:-top-2 sm:before:right-20 before:right-1/2 before:translate-x-1/2 before:rotate-45 before:-z-10">
          <span>{text}</span>
          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate(pathname);
            }}
            type="button"
            size="sm"
          >
            Got It
          </Button>
        </div>
      </div>
      <div className="z-10 w-full h-screen bg-black/60 fixed top-0 left-0"></div>
    </>
  );
};
