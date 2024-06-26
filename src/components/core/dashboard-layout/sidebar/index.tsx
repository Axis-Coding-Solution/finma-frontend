import PerfectScrollbar from "react-perfect-scrollbar";

import NavLogo from "./nav-logo";
import Navigation from "./navigation";
import NavFooter from "./nav-footer";

const Sidebar = () => {
  return (
    <div className="sticky top-0 left-0 hidden w-full border-r bg-background lg:block h-full max-h-screen overflow-auto">
      <PerfectScrollbar>
        <nav className="flex flex-col h-full gap-8 px-2 text-lg font-medium lg:px-4 py-3">
          <NavLogo />
          <Navigation />
          <NavFooter />
        </nav>
      </PerfectScrollbar>
    </div>
  );
};
export default Sidebar;
