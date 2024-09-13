import { LogOut } from "lucide-react";
import { LinkItem } from "./navigation/link-item";

const NavFooter = () => {
  return (
    <section className="2xl:pb-4 pb-2 flex flex-col gap-1">
      <LinkItem name="Log out" path="/" Icon={LogOut} />
    </section>
  );
};

export default NavFooter;
