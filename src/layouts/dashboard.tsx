import { Outlet, useNavigate } from "react-router-dom";

import AppHeader from "@/components/core/dashboard-layout/app-header/index";
import Sidebar from "@/components/core/dashboard-layout/sidebar";
import { Suspense, useEffect } from "react";
import { useAuth } from "@/utils/hooks";
import { CgSpinner } from "@/assets/icons";

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
        <main className=" flex flex-1 flex-col gap-4 lg:gap-6 2xl:p-10 p-6  bg-card">
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
