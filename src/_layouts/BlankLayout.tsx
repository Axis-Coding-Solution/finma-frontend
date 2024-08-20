import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { appLogoPath } from "@/assets/images";
import { Button } from "@/components/_ui/button";

import { HamburgerMenu } from "@/_pages/components/common/hamburger-menu";
import { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/_ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { ArrowConnerLeft } from "@/assets/svgs";
import { useAuth } from "@/utils/hooks";

const BlankLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const auth = useAuth();

  const handleGoBack = () => {
    const { state } = window.history;
    if (pathname !== "/onboarding/terms-conditions" && auth?.isAuthenticated)
      return null;

    if (pathname === "/onboarding/terms-conditions" && auth?.isAuthenticated) {
      return navigate(`/onboarding/${auth?.user?.role}s?redirectedFrom=t&c`, { replace: true });
    }
    if (state && state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/auth/login", { replace: true });
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      navigate("/auth/login", { replace: true });
    }
  }, []);
  return (
    <div className="container flex flex-col gap-5">
      <header className="flex justify-between items-center md:py-4 py-2">
        <img src={appLogoPath} alt="Your Company" className="w-20 h-10" />
        <nav className="flex gap-10 items-center ">
          <ul className="lg:flex gap-10 hidden">
            <Link to="https://finma.ai/">
              <li>Home</li>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus-visible:outline-none">
                <span className=" flex items-center gap-3">
                  For Innovators
                  <ChevronDown size={20} />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link to="https://finma.ai/knowledge-base/">
                  <DropdownMenuItem>Knowledge Base</DropdownMenuItem>
                </Link>
                <Link to="https://finma.ai/tech-toolkit/">
                  <DropdownMenuItem>Tech toolkit</DropdownMenuItem>
                </Link>
                <Link to="https://finma.ai/events/">
                  <DropdownMenuItem>Events and Programs</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus-visible:outline-none">
                <span className=" flex items-center gap-3">
                  Company <ChevronDown size={20} />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link to="https://finma.ai/about-us/">
                  <DropdownMenuItem>About</DropdownMenuItem>
                </Link>
                <Link to="https://finma.ai/blog/">
                  <DropdownMenuItem>Blog</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>Join the community</DropdownMenuItem>
                <DropdownMenuItem>Share your expertise</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>
          {auth?.isAuthenticated ? (
            <Button
              className="lg:flex gap-4 hidden"
              variant="default"
              onClick={auth?.handleLogout}
            >
              Sign Out
            </Button>
          ) : (
            <Button
              tag={Link}
              to="/auth/login"
              className="lg:flex gap-4 hidden"
              variant="default"
            >
              Sign in
            </Button>
          )}
          <HamburgerMenu />
        </nav>
      </header>
      <main className="h-full">
        <Button
          variant="link"
          className="!p-0 flex items-center gap-2"
          onClick={handleGoBack}
        >
          <img src={ArrowConnerLeft} alt="" />
          <span>Back</span>
        </Button>
        <div className="rounded-lg md:p-5 p-3 h-auto bg-muted mt-0.5">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default BlankLayout;
