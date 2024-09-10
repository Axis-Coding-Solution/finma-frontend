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
};

export const LinkItem = ({
  path,
  name,
  Icon,
  mobileMode,
  handleChange,
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
        to={path}
        onClick={() =>
          mobileMode ? setTimeout(() => handleChange?.(), 250) : null
        }
        className={cn(
          "group flex items-center gap-5 2xl:rounded-lg rounded-2xl md:px-4 px-3 md:py-3 py-2 md:text-base text-sm text-background transition hover:bg-warning hover:text-foreground",
          pathname.startsWith(path) && "bg-warning text-foreground "
        )}
      >
        <Icon
          className={cn(
            "md:h-6 md:w-6 h-5 w-5 text-background group-hover:text-foreground",
            pathname.startsWith(path) && "text-foreground"
          )}
        />
        {name}
      </Link>
    </div>
  );
};
