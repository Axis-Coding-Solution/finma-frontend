import { Button } from "@/components/_ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/_ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { BellDot, Menu, Settings } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/_ui/dropdown-menu";
import { Avatar } from "@/components/_ui/avatar";
import { useAuth, useModal } from "@/utils/hooks";
import ProfileEditModal from "./profile-edit-modal";
import { successToast } from "@/utils";
import Navigation from "../sidebar/navigation";
import NavLogo from "../sidebar/nav-logo";
import NavFooter from "../sidebar/nav-footer";
import { SearchInput } from "@/components/ui/search-input";

const AppHeader = () => {
  const navigate = useNavigate();
  const drawer = useModal();
  const auth = useAuth();

  let userData = auth?.user;
  userData = {
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    email: userData?.email,
    entrepreneurType: userData?.entrepreneurType ?? null,
    profilePicture: userData?.profilePicture,
    role: userData?.role,
    status: userData?.status ?? null,
  };

  const handleLogin = () => {
    auth?.handleLogout();
    navigate("/auth/login");
    successToast("Logout successfully!");
  };
  return (
    <header className="sticky w-full right-0  top-0 z-10 bg-background flex  items-center  justify-between gap-7 border-b px-6  2xl:px-10 py-3">
      <div className="flex items-center gap-4">
        <Sheet onOpenChange={drawer.setShow} open={drawer.show}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 lg:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-dark flex flex-col border-0">
            <nav className="flex flex-col h-full gap-8 pl-2 text-lg font-medium lg:pl-4 py-3 ">
              <NavLogo />
              <Navigation handleChange={drawer.toggle} mobileMode />
              <NavFooter />
            </nav>
          </SheetContent>
        </Sheet>
        <div className="hidden md:block">
          <SearchInput />
        </div>
      </div>
      <div className="flex 2xl:gap-12 gap-8 items-center">
        <div className="text-muted-foreground flex 2xl:gap-10 gap-8 items-center">
          <span role="button">
            <BellDot />
          </span>
          <Link to="/dashboard/settings">
            <span role="button">
              <Settings />
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div role="button" className="border border-border rounded-full">
                <Avatar
                  className="object-cover 2xl:min-w-14 min-w-10 2xl:h-14 h-10"
                  image={userData?.profilePicture}
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogin}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-start gap-1">
            <div className="flex flex-col gap-1">
              <h2
                title={userData?.firstName + " " + userData?.lastName}
                className="2xl:text-[22px] text-base font-semibold text-foreground overflow-hidden max-w-36 whitespace-nowrap text-ellipsis"
              >
                {userData?.firstName + " " + userData?.lastName}
              </h2>
              <span className="flex gap-0 items-center 2xl:text-lg text-xs font-normal text-muted-foreground">
                {userData?.status?.value ?? "😤 Not Provided."}
              </span>
            </div>
            <ProfileEditModal
              userData={userData}
              updateUser={auth?.updateUser}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
