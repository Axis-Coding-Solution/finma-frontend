import { Outlet } from "react-router-dom";

import AppHeader from "@/components/core/dashboard-layout/app-header";
import Sidebar from "@/components/core/dashboard-layout/sidebar";

function DashboardLayout() {
  return (
    // <div className="grid grid-cols-12 h-screen overflow-hidden">
    //   <div className="2xl:col-span-2 lg:col-span-3 col-span-12">
    //     <Sidebar />
    //   </div>
    //   <div className="2xl:col-span-10 lg:col-span-9 col-span-12 flex flex-col relative overflow-y-auto">
    //     <AppHeader />
    //     <main className="container flex flex-1 flex-col gap-4 lg:gap-6 lg:p-6 p-4">
    //       <Outlet />
    //     </main>
    //   </div>
    // </div>
    <div className="flex lg:flex-row flex-col h-screen overflow-hidden">
    <div className="2xl:w-[20%] lg:w-[20%] w-full">
      <Sidebar />
    </div>
    <div className="2xl:w-[80%] lg:w-[80%] w-full flex flex-col relative overflow-y-auto">
      <AppHeader />
      <main className="container flex flex-1 flex-col gap-4 lg:gap-6 lg:p-6 p-4">
        <Outlet />
      </main>
    </div>
  </div>
  );
}

export default DashboardLayout;
