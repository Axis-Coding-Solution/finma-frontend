import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="bg-[url('/assets/backgrounds/main-bg.png')] w-full h-screen overflow-hidden bg-no-repeat bg-top bg-contain flex justify-center items-center bg-foreground/70 bg-blend-overlay">
      <div className="min-w-48 max-w-[1084px]" role="dialog">
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
