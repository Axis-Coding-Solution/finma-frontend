import { Outlet } from "react-router-dom";

import AppHeader from "@/components/core/dashboard-layout/app-header/index";
import Sidebar from "@/components/core/dashboard-layout/sidebar";
import { Suspense } from "react";
import { CgSpinner } from "@/assets/icons";

function DashboardLayout() {
  return (
    <div className="flex lg:flex-row flex-col h-screen overflow-hidden">
      <div className="w-96">
        <Sidebar />
      </div>
      <div className=" w-full flex flex-col relative overflow-y-auto bg-card">
        <AppHeader />
        <main className="container flex flex-1 flex-col gap-4 lg:gap-6 2xl:py-10 py-6">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-full">
                <CgSpinner className="animate-spin mt-4 w-10 h-10" />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
