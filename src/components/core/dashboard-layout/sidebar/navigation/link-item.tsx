import { cn } from "@/utils";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Link, useLocation } from "react-router-dom";

type PropTypes = {
  name: string;
  path: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  mobileMode?: boolean;
  handleChange?: () => void;
  iconDirection?: "rotate-90" | "rotate-180" | "rotate-270" | "none";
};

export const LinkItem = ({
  path,
  name,
  Icon,
  mobileMode,
  handleChange,
  iconDirection = "none",
}: PropTypes) => {
  const { pathname } = useLocation();
  return (
    <div
      className={cn(
        "md:pr-4 pr-2 border-r-transparent border-r-4 ",
        pathname.startsWith(path) && " border-r-warning border-r-4"
      )}
    >
      <Link
        to={path && path}
        onClick={() =>
          mobileMode
            ? setTimeout(() => handleChange?.(), 250)
            : handleChange?.()
        }
        className={cn(
          "group flex items-center gap-5 2xl:rounded rounded-xl 2xl:px-4 px-3 2xl:py-3 py-[10px] 2xl:text-base text-sm text-background transition hover:bg-warning hover:text-foreground",
          pathname.startsWith(path) && "bg-warning text-foreground "
        )}
      >
        <Icon
          className={cn(
            "2xl:h-6 2xl:w-6 h-5 w-5 text-background group-hover:text-foreground transform",
            pathname.startsWith(path) && "text-foreground",
            iconDirection !== "none" && iconDirection 
          )}
        />
        {name}
      </Link>
    </div>
  );
};
