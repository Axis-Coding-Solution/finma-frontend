import {
  CircleHelp,
  Home,
  LayoutGridIcon,
  Lightbulb,
  MessageSquareMore,
} from "lucide-react";
import { LinkItem } from "./link-item";

const navLinks = [
  {
    name: "Overview",
    path: "/dashboard/overview",
    Icon: LayoutGridIcon,
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
  {
    name: "Community Feeds",
    path: "/dashboard/community-feeds",
    Icon: Home,
  },
  {
    name: "Innovators",
    path: "/dashboard/innovators",
    Icon: Lightbulb,
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
