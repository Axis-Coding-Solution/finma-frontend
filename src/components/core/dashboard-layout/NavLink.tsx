import { Info, LayoutGridIcon } from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { Avatar } from "@/components/ui/avatar";
import {
  userAvatar2Image,
  userAvatar3Image,
  userAvatar4Image,
  userAvatar5Image,
} from "@/assets/images";
import { cn } from "@/utils";

export const NavLink = () => {
    const { pathname } = useLocation();
  return (
    <section className="flex-grow">
    <div>
      <h6 className="px-4 text-muted-foreground text-sm tracking-wider mb-2">
        Dashboard
      </h6>
      <Link
        to="/dashboard/overview"
        className={cn(
          "flex items-center gap-5 rounded-lg px-4 py-3 text-foreground transition hover:bg-success/10 hover:text-success",
          pathname === "/dashboard/overview" && "bg-success/10 text-success"
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
    <div className="text-foreground mt-4">
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
          pathname === "/dashboard/chat/jim" && "bg-success/10 text-success"
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
  )
}
