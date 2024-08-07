import {
  CircleHelp,
  Home,
  LayoutGrid,
  MessageSquareMore,
  UsersRound,
  Zap,
} from "lucide-react";
import { LinkItem } from "./link-item";
import { useAuth } from "@/utils/hooks";

const navLinks = [
  {
    name: "Community",
    path: "/dashboard/community",
    roles: ["innovator", "mentor", "expert"],
    Icon: Home,
  },

  {
    name: "My Projects",
    path: "/dashboard/my-projects",
    roles: ["innovator"],
    Icon: LayoutGrid,
  },
  {
    name: "Product Launch",
    path: "/dashboard/product-launch",
    roles: ["innovator", "mentor", "expert"],
    Icon: Zap,
  },

  {
    name: "My Team",
    path: "/dashboard/my-team",
    roles: ["innovator"],
    Icon: UsersRound,
  },

  {
    name: "FAQ",
    path: "/dashboard/faq",
    roles: ["innovator", "mentor", "expert"],
    Icon: CircleHelp,
  },
  {
    name: "Chats",
    path: "/dashboard/chats",
    roles: ["innovator", "mentor", "expert"],
    Icon: MessageSquareMore,
  },
];

export const NavLinks = () => {
  const auth = useAuth();

  if (!auth?.isAuthenticated) return null;

  const userNavLinks = navLinks.filter((link) =>
    link.roles.includes(auth?.user?.role)
  );
  
  return (
    <div className="flex flex-col gap-1">
      <h6 className="px-4 text-muted-foreground text-sm tracking-wider mb-1">
        Dashboard
      </h6>
      {userNavLinks.map((navLink, index) => (
        <LinkItem key={index} {...navLink} />
      ))}
    </div>
  );
};
