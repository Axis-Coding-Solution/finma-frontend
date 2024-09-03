import { LogOut } from "lucide-react";

import { LinkItem } from "./navigation/link-item";
// import { SelectProject } from "./select-project";

const NavFooter = () => {
  return (
    <section className="pb-4 flex flex-col gap-1">
      <LinkItem name="Log out" path="/dashboard/settings"  Icon={LogOut}/>
    </section>
  );
};

export default NavFooter;
