import PerfectScrollbar from "react-perfect-scrollbar";

import NavLogo from "./nav-logo";
import Navigation from "./navigation";
import NavFooter from "./nav-footer";

const Sidebar = () => {
  return (
    <div className="sticky top-0 left-0 hidden w-full border-r bg-dark lg:block h-full max-h-screen overflow-auto">
      <PerfectScrollbar>
        <nav className="flex flex-col h-full 2xl:gap-8 gap-4 pl-2 text-lg font-medium lg:pl-4 2xl:py-3 py-2">
          <NavLogo />
          <Navigation />
          <NavFooter />
        </nav>
      </PerfectScrollbar>
    </div>
  );
};
export default Sidebar;
