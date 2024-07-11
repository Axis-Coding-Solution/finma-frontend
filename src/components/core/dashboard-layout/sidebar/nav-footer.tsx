import { Settings } from "lucide-react";

import { LinkItem } from "./navigation/link-item";
// import { SelectProject } from "./select-project";

const NavFooter = () => {
  return (
    <section className="pb-4 flex flex-col gap-1">
      <LinkItem name="Settings" path="/dashboard/settings" Icon={Settings} />
      {/* <SelectProject /> */}
    </section>
  );
};

export default NavFooter;
