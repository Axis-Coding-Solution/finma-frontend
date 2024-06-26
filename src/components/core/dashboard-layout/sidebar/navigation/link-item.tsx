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
    <Link
      to={path}
      className={cn(
        "group flex items-center gap-5 rounded-lg px-4 py-3 text-base text-foreground transition hover:bg-success/10 hover:text-success",
        pathname === path && "bg-success/10 text-success"
      )}
    >
      <Icon
        className={cn(
          "h-6 w-6 text-muted-foreground group-hover:text-success",
          pathname === path && "text-success"
        )}
      />
      {name}
    </Link>
  );
};
