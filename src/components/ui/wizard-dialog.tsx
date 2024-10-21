import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./button";
import { createPortal } from "react-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

export const WizardDialog = ({
  children,
  show,
  text,
  nextWizard,
}: {
  children: React.ReactNode;
  show?: boolean;
  text?: any;
  nextWizard?: string;
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (!show) return children;
  return (
    <>
      <div className="relative sm:w-auto w-full">
        <TooltipProvider>
          <Tooltip defaultOpen={true} open={show}>
            <TooltipTrigger asChild>{children}</TooltipTrigger>
            <TooltipContent
              asChild
              className="before:size-6 before:bg-secondary before:absolute data-[side=top]:before:-bottom-1 data-[side=bottom]:before:top-0 sm:before:right-1/2 before:right-1/2 before:translate-x-1/2 before:rotate-45 before:-z-10 mt-1 border-0 bg-secondary text-secondary-foreground rounded-sm px-3 py-2"
              side="bottom"
            >
              <div className="sm:w-[400px] w-full flex justify-between items-center">
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
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {createPortal(
        <div className="z-10 w-full h-screen bg-black/60 fixed top-0 left-0"></div>,
        document.body
      )}
    </>
  );
};
