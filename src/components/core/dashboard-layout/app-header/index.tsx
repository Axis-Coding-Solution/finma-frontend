import { Button } from "@/components/_ui/button";
import { Badge } from "@/components/_ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/_ui/sheet";
import { Link } from "react-router-dom";
import {
  BellDot,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  SearchIcon,
  ShoppingCart,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/_ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/_ui/dropdown-menu";
import { Avatar } from "@/components/_ui/avatar";
import { userAvatar1Image } from "@/assets/images";
import { useAuth } from "@/utils/hooks";
import StatusModal from "./status-modal";
import { useGetStatusForUser } from "@/api/hooks/dashboard";

const AppHeader = () => {
  const auth = useAuth();

  const { data } = useGetStatusForUser();
  return (
    <header className="sticky w-full right-0  top-0 z-10 bg-background flex h-14 items-center lg:justify-end justify-between gap-7 border-b px-4 lg:h-16 lg:px-10 py-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
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
                  Unlock all features and get unlimited access to our support
                  team.
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
        <div className="hidden md:flex flex-col rounded-lg">
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground text-xs">Public Status</span>
            <StatusModal userStatus={data} />
          </div>
          <p className="w-full text-foreground font-semibold underline text-sm">
            {data ? data.label : "Please set up your public status"}
          </p>
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
              <Avatar className="object-cover" image={auth?.user?.profilePicture || userAvatar1Image} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={auth?.handleLogout}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AppHeader;
