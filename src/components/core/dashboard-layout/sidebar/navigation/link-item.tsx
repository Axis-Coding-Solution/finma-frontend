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
};

export const LinkItem = ({ path, name, Icon }: PropTypes) => {
  const { pathname } = useLocation();
  return (
    <div className={cn(
      "lg:pr-4 pr-2 border-r-transparent border-r-4 ",
      pathname.startsWith(path) && " border-r-warning border-r-4"
    )}>
    <Link
      to={path}
      className={cn(
        "group flex items-center gap-5 rounded-lg px-4 py-3 text-base text-background transition hover:bg-warning hover:text-foreground",
        pathname.startsWith(path) && "bg-warning text-foreground "
      )}
    >
      <Icon
        className={cn(
          "h-6 w-6 text-background group-hover:text-foreground",
          pathname.startsWith(path) && "text-foreground"
        )}
      />
      {name}
    </Link>
    </div>
  );
};
