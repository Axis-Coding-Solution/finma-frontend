import { Outlet } from "react-router-dom";
import { AppHeader } from "@/components/core/dashboard-layout/AppHeader";
import { Navigation } from "@/components/core/dashboard-layout/Navigation";

function DashboardLayout() {
  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden">
      <div className="2xl:col-span-2 lg:col-span-3 col-span-12">
      <Navigation />
      </div>
      <div className="2xl:col-span-10 lg:col-span-9 col-span-12 flex flex-col relative overflow-y-auto">
        <AppHeader />
        <main className="container flex flex-1 flex-col gap-4  lg:gap-6 lg:p-6 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
