import {
  CircleHelp,
  Home,
  LayoutGrid,
  Lightbulb,
  MessageSquareMore,
  UsersRound,
  Zap,
} from "lucide-react";
import { LinkItem } from "./link-item";

const navLinks = [
  {
    name: "Community",
    path: "/dashboard/community",
    Icon: Home,
  },

  {
    name: "My Projects",
    path: "/dashboard/my-projects",
    Icon: LayoutGrid,
  },
  {
    name: "Product Launch",
    path: "/dashboard/product-launch",
    Icon: Zap ,
  },

  {
    name: "My Team",
    path: "/dashboard/my-team",
    Icon: UsersRound ,
  },

  {
    name: "FAQ",
    path: "/dashboard/faq",
    Icon: CircleHelp,
  },
  {
    name: "Chats",
    path: "/dashboard/chats",
    Icon: MessageSquareMore,
  },
];

export const NavLinks = () => {
  return (
    <div className="flex flex-col gap-1">
      <h6 className="px-4 text-muted-foreground text-sm tracking-wider mb-1">
        Dashboard
      </h6>
      {navLinks.map((navLink, index) => (
        <LinkItem key={index} {...navLink} />
      ))}
    </div>
  );
};
