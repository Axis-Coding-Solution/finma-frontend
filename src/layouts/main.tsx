import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="bg-[url('/assets/backgrounds/main-bg.png')] w-full min-h-screen h-full bg-no-repeat bg-top bg-contain flex justify-center items-center bg-foreground/70 bg-blend-overlay">
      <div className="min-w-48 max-w-[1084px]" role="dialog">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default MainLayout;
