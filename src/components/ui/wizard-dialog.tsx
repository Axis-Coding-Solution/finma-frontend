import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./button";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const WizardDialog = ({
  children,
  show,
  text,
  nextWizard,
}: {
  children: React.ReactNode;
  show?: boolean;
  text?: string;
  nextWizard?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [parentPosition, setParentPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
  });
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (ref.current && show) {
      const container = ref.current;
      const boundingRects = container.getBoundingClientRect();
      setParentPosition({
        x: boundingRects.left,
        y: boundingRects.top,
        width: boundingRects.width,
      });
    }
  }, [show]);

  console.log(parentPosition);

  if (!show) return children;
  return (
    <>
      <div ref={ref} className="relative sm:w-auto w-full">
        {children}
        {parentPosition.x &&
          parentPosition.y &&
          createPortal(
            <div
              className="bg-secondary z-20 sm:w-[400px] w-full flex justify-between items-center absolute rounded-sm px-3 py-2 before:size-6 before:bg-secondary before:absolute before:-top-2 sm:before:right-20 before:right-1/2 before:translate-x-1/2 before:rotate-45 before:-z-10"
              style={{
                left: parentPosition.x - 300,
                top: parentPosition.y + 60,
                marginRight: parentPosition.width,
              }}
            >
              <span>{text}</span>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  navigate(
                    nextWizard
                      ? `${pathname}?wizardType=${nextWizard}`
                      : pathname
                  );
                }}
                type="button"
                size="sm"
              >
                Got It
              </Button>
            </div>,
            document.body
          )}
      </div>
      {createPortal(
        <div className="z-10 w-full h-screen bg-black/60 fixed top-0 left-0"></div>,
        document.body
      )}
    </>
  );
};
