import { Outlet, useNavigate } from "react-router-dom";

import AppHeader from "@/components/core/dashboard-layout/app-header";
import Sidebar from "@/components/core/dashboard-layout/sidebar";
import { useEffect } from "react";
import { useAuth } from "@/utils/hooks";

function DashboardLayout() {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (auth?.user && auth?.isAuthenticated) {
      const onboarding = auth.user.onboarding;
      const role = auth?.user?.role;
      if (!onboarding) navigate(`/onboarding/${role}s`, { replace: true });
    }
  }, [auth?.isAuthenticated]);

  return (
    <div className="flex lg:flex-row flex-col h-screen overflow-hidden">
      <div className="w-96">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col relative overflow-y-auto">
        <AppHeader />
        <main className="container flex flex-1 flex-col gap-4 lg:gap-6 lg:p-6 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
