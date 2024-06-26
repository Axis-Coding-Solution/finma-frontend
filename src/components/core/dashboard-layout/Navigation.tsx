import { NavLogo } from "./NavLogo";
import { NavLink } from "./NavLink";
import { NavFooter } from "./NavFooter";

export const Navigation = () => {
  return (
    <div className="sticky top-0 left-0 hidden w-full border-r bg-background lg:block h-full max-h-screen overflow-auto">
      <nav className="flex flex-col h-full  gap-8 px-2 text-lg font-medium lg:px-4 py-3">
        <NavLogo />
        <NavLink />
        <NavFooter />
      </nav>
    </div>
  );
};
