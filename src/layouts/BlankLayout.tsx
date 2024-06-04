import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { appLogoPath } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "@/assets/icons";
import { HamburgerMenu } from "@/pages/components/common/hamburger-menu";
import { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const BlankLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleGoBack = () => {
    const { state } = window.history;
    if (state && state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/auth/login", { replace: true });
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      navigate("/start-onboarding", { replace: true });
    }
  }, []);
  return (
    <div className="container flex flex-col gap-5">
      <header className="flex justify-between items-center md:py-4 py-2">
        <img src={appLogoPath} alt="Your Company" className="w-20 h-10" />
        <nav className="flex gap-10 items-center ">
          <ul className="lg:flex gap-10 hidden">
            <li>Home</li>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus-visible:outline-none">
                <span className=" flex items-center gap-3">
                  For Innovators
                  <ChevronDown size={20} />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus-visible:outline-none">
                <span className=" flex items-center gap-3">
                  Company <ChevronDown size={20} />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>
          <Link to="/auth/login">
            <Button className="lg:flex gap-4 hidden" variant="default">
              Sign in
            </Button>
          </Link>
          <HamburgerMenu />
        </nav>
      </header>
      <main className="h-full">
        <Button variant="link" className="!p-0" onClick={handleGoBack}>
          <ArrowLeft size="20" />
          <span>Back</span>
        </Button>
        <div className="rounded-lg md:p-5 p-3  h-auto bg-muted mt-0.5">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default BlankLayout;
