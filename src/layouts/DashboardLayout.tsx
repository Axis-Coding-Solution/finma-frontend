import {
  BellDot,
  Home,
  Info,
  LayoutGridIcon,
  LineChart,
  Menu,
  Package,
  Package2,
  SearchIcon,
  ShoppingCart,
  Users,
} from "lucide-react";
import applogo from "@/assets/images/app-logo.png";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Avatar } from "@/components/ui/avatar";
import {
  userAvatar1Image,
  userAvatar2Image,
  userAvatar3Image,
  userAvatar4Image,
  userAvatar5Image,
} from "@/assets/images";
import { cn } from "@/utils";
import PerfectScrollbar from "react-perfect-scrollbar";

function DashboardLayout() {
  const { pathname } = useLocation();
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      {/* <PerfectScrollbar> */}
      <div className="sticky top-0 left-0 hidden w-full border-r bg-background lg:block h-full max-h-screen overflow-auto">
        <nav className="flex flex-col h-full  gap-8 px-2 text-lg font-medium lg:px-4 py-3">
          <section className="h-24 px-2 flex justify-start items-center">
            <img src={applogo} className="w-24 h-10" />
          </section>
          <section className="flex-grow">
            <div>
              <h6 className="px-4 text-muted-foreground text-sm tracking-wider mb-2">
                Dashboard
              </h6>
              <Link
                to="/dashboard/overview"
                className={cn(
                  "flex items-center gap-5 rounded-lg px-4 py-3 text-foreground transition hover:bg-success/10 hover:text-success",
                  pathname === "/dashboard/overview" &&
                    "bg-success/10 text-success"
                )}
              >
                <LayoutGridIcon className="h-6 w-6" />
                Overview
              </Link>
              <Link
                to="/dashboard/about"
                className={cn(
                  "flex items-center gap-5 rounded-lg px-4 py-3 text-foreground transition hover:bg-success/10 hover:text-success",
                  pathname === "/dashboard/about" &&
                    "bg-success/10 text-success"
                )}
              >
                <Info className="h-6 w-6" />
                About
              </Link>
            </div>
            <div className="text-foreground">
              <h6 className="px-4 text-muted-foreground text-sm tracking-wider mb-2">
                Connect with experts
              </h6>
              <Link
                to="/dashboard/chat/salama"
                className={cn(
                  "px-4 py-3 flex gap-5 rounded-lg tran items-center hover:bg-success/10 hover:text-success",
                  pathname === "/dashboard/chat/salama" &&
                    "bg-success/10 text-success"
                )}
              >
                <Avatar image={userAvatar2Image} size="lg" active />
                <span>Salama M.</span>
              </Link>
              <Link
                to="/dashboard/chat/jim"
                className={cn(
                  "px-4 py-3 flex gap-5 rounded-lg tran items-center hover:bg-success/10 hover:text-success",
                  pathname === "/dashboard/chat/jim" &&
                    "bg-success/10 text-success"
                )}
              >
                <Avatar image={userAvatar3Image} size="lg" active />
                <div className="flex flex-col">
                  <span>Jim Smith</span>
                  <span className="text-muted-foreground text-sm">
                    Venture Analyst
                  </span>
                </div>
              </Link>
              <Link
                to="/dashboard/chat/vivan"
                className={cn(
                  "px-4 py-3 flex gap-5 rounded-lg tran items-center hover:bg-success/10 hover:text-success",
                  pathname === "/dashboard/chat/vivan" &&
                    "bg-success/10 text-success"
                )}
              >
                <Avatar image={userAvatar4Image} size="lg" active />
                <div className="flex flex-col">
                  <span>Vivan Violet</span>
                  <span className="text-muted-foreground text-sm">
                    Market Intelligence
                  </span>
                </div>
              </Link>
              <Link
                to="/dashboard/chat/jackie"
                className={cn(
                  "px-4 py-3 flex gap-5 rounded-lg tran items-center hover:bg-success/10 hover:text-success",
                  pathname === "/dashboard/chat/jackie" &&
                    "bg-success/10 text-success"
                )}
              >
                <Avatar image={userAvatar5Image} size="lg" active />
                <div className="flex flex-col">
                  <span>Jackie Jess</span>
                  <span className="text-muted-foreground text-sm">
                    Business Strategist
                  </span>
                </div>
              </Link>
            </div>
          </section>
          <div>
            <Link
              to="/dashboard/overview"
              className={cn(
                "flex items-center gap-5 rounded-lg px-4 py-3 text-foreground transition hover:bg-success/10 hover:text-success",
                pathname === "/dashboard/overview" &&
                  "bg-success/10 text-success"
              )}
            >
              <LayoutGridIcon className="h-6 w-6" />
              Overview
            </Link>
            <Link
              to="/dashboard/about"
              className={cn(
                "flex items-center gap-5 rounded-lg px-4 py-3 text-foreground transition hover:bg-success/10 hover:text-success",
                pathname === "/dashboard/about" && "bg-success/10 text-success"
              )}
            >
              <Info className="h-6 w-6" />
              About
            </Link>
          </div>
        </nav>
      </div>
      {/* </PerfectScrollbar> */}
      <div className="flex flex-col relative">
        <header className="sticky  top-0 z-10 bg-background flex h-14 items-center lg:justify-end justify-between gap-7 border-b px-4 lg:h-16 lg:px-10 py-4">
          <Sheet>
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
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  to="/"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  to="/"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  to="/"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  to="/"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  to="/"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex gap-4 items-center">
            {/* <div className=" text-sm text-muted-foreground flex gap-2 items-center w-full flex-1">
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-foreground font-semibold cursor-pointer hover:underline">
              Overview
            </span>
          </div> */}
            <div className="hidden  bg-muted md:flex gap-3 items-center px-5 py-2 rounded-lg">
              <span>Public Status:</span>
              <span className="text-destructive font-semibold">
                😢 Stuck with 'idea clarity' score
              </span>
            </div>
            <div className="text-muted-foreground flex gap-5 items-center">
              <span role="button">
                <SearchIcon />
              </span>
              <div className="h-7 border border-border" />
              <span role="button">
                <BellDot />
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div role="button">
                  <Avatar image={userAvatar1Image} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="container flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
