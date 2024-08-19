import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/_ui/button";
import appLogo from "@/assets/images/app-logo.png";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/_ui/sheet";
import { Link } from "react-router-dom";
import { useState } from "react";

export const HamburgerMenu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (dropdownId: any) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownId);
    }
  };

  return (
    <div className="lg:hidden block">
      <Sheet>
        <SheetTrigger>
          <Menu className="flex lg:hidden" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <img src={appLogo} className="w-20 mt-4" />
            <SheetDescription>
              <nav className="flex flex-col gap-10 mt-4">
                <ul className="flex flex-col items-start  gap-4 ">
                  <Link to="https://finma.ai/">
                    <li>Home</li>
                  </Link>
                  <li>
                    <span
                      onClick={() => handleToggle("innovators")}
                      className="flex items-center gap-3"
                    >
                      For Innovators
                      <ChevronDown
                        size={20}
                        className={`transition duration-300 ${
                          openDropdown === "innovators" ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    {openDropdown === "innovators" && (
                      <ul className="transition flex flex-col gap-2 text-left mt-3 ml-2">
                        <Link to="https://finma.ai/knowledge-base/">
                          <li>Knowledge Base</li>
                        </Link>
                        <Link to="https://finma.ai/tech-toolkit/">
                          <li>Tech toolkit</li>
                        </Link>
                        <Link to="https://finma.ai/events/">
                          <li>Events and Programs</li>
                        </Link>
                      </ul>
                    )}
                  </li>
                  <li>
                    <span
                      onClick={() => handleToggle("company")}
                      className="flex items-center gap-3"
                    >
                      Company
                      <ChevronDown
                        size={20}
                        className={`transition duration-300 ${
                          openDropdown === "company" ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    {openDropdown === "company" && (
                      <ul className="flex flex-col gap-2 text-left mt-3 ml-2">
                        <Link to="https://finma.ai/about-us/">
                          <li>About</li>
                        </Link>
                        <Link to="https://finma.ai/blog/">
                          <li>Blog</li>
                        </Link>
                        <li>Join the community</li>
                        <li>Share your expertise</li>
                      </ul>
                    )}
                  </li>
                </ul>
                <Link to="/auth/login">
                  <Button variant="default" className="w-full">
                    Sign in
                  </Button>
                </Link>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

{
  /* <Sheet>
            <SheetTrigger>
              <Menu className="flex lg:hidden" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu-Bar</SheetTitle>
                <SheetDescription>
                  <nav className="flex flex-col gap-10 ">
                    <ul className="flex flex-col items-start  gap-4 ">
                      <li>Home</li>
                      <li>About Us</li>
                      <li className="flex font-bold">
                        <span>Get Free founder Toolkit</span>
                        <img src={starImgPath} className="w-5" />
                      </li>
                      <li>Blog</li>
                    </ul>
                    <Button variant="default">Sign in</Button>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet> */
}
