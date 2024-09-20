import { FetchLoader } from "@/pages/components/common";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="bg-[url('/assets/backgrounds/main-bg.png')] w-full h-screen bg-no-repeat bg-top bg-contain flex justify-center items-center bg-foreground/70 bg-blend-overlay overflow-hidden">
      <div
        className="xl:max-w-[1084px] xl:px-0 md:px-10 px-4 max-w-full flex justify-center items-center h-screen py-10 overflow-auto"
        role="dialog"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <Suspense
          fallback={
            <div className="rounded-lg bg-secondary w-[500px] h-[300px] flex justify-center items-center">
              <FetchLoader noMessage />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default MainLayout;
