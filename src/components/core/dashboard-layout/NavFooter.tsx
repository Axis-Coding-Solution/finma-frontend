import {  Rocket, Settings } from "lucide-react";

import { Link, useLocation } from "react-router-dom";

import { cn } from "@/utils";
export const NavFooter = () => {
    const { pathname } = useLocation();
  return (
    <section className="pb-4">
    <Link
      to="/dashboard/overview"
      className={cn(
        "flex items-center gap-5 rounded-lg px-4 py-3 text-foreground transition hover:bg-success/10 hover:text-success",
        pathname === "/dashboard/overview" && "bg-success/10 text-success"
      )}
    >
      <Settings className="h-6 w-6" />
      Settings
    </Link>
    <Link
      to="/dashboard/faq"
      className={cn(
        "flex items-center gap-5 rounded-lg px-4 py-3 text-foreground transition hover:bg-success/10 hover:text-success",
        pathname === "/dashboard/faq" && "bg-success/10 text-success"
      )}
    >
      <Rocket className="h-6 w-6" />
      Project 1
    </Link>
  </section>
  )
}
