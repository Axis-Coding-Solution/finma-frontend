import {
  CircleHelp,
  LayoutGrid,
  Sparkles,
  } from "lucide-react";
import { LinkItem } from "./link-item";
import { myTeamIcon, ProductIcon, chatIcon } from "@/components/icons";

const navLinks = [
  {
    name: "My Startups",
    path: "/dashboard/my-startups",
    roles: ["innovator"],
    Icon: LayoutGrid,
  },
  {
    name: "The Community",
    path: "/dashboard/community",
    roles: ["innovator", "mentor", "expert"],
    Icon: Sparkles,
  },
  {
    name: "Product Launch",
    path: "/dashboard/product-launch",
    roles: ["innovator", "mentor", "expert"],
    Icon: ProductIcon,
  },

  {
    name: "My Team",
    path: "/dashboard/my-team",
    roles: ["innovator"],
    Icon: myTeamIcon,
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
    Icon: chatIcon,
  },
];
type Props = {
  mobileMode?: boolean;
  handleChange?: () => void;
};
export const NavLinks = ({ handleChange, mobileMode }: Props) => {
  // const auth = useAuth();

  // if (!auth?.isAuthenticated) return null;

  // const userNavLinks = navLinks.filter((link) =>
  // link.roles.includes(auth?.user?.role)
  // );
  const userNavLinks = navLinks;
  return (
    <div className="flex flex-col gap-1">
      {/* <h6 className="px-4 text-muted-foreground text-sm tracking-wider mb-1">
        Dashboard
      </h6> */}
      {userNavLinks.map((navLink, index) => (
        <LinkItem
          key={index}
          mobileMode={mobileMode}
          handleChange={handleChange}
          {...navLink}
        />
      ))}
    </div>
  );
};
