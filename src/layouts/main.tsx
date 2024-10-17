import { FetchLoader } from "@/pages/components/common";
import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [overFlowing, setOverFlowing] = useState(false);
  const { pathname } = useLocation();

  const checkOverflow = () => {
    const container = containerRef.current;
    console.log(
      container?.scrollHeight,
      container?.clientHeight,
      container?.offsetHeight
    );
    if (container && container.scrollHeight > container.offsetHeight) {
      setOverFlowing(true);
    } else {
      setOverFlowing(false);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [pathname]);

  return (
    <main className="bg-[url('/assets/backgrounds/main-bg.png')] w-full h-screen bg-no-repeat bg-top bg-contain flex justify-center items-center bg-foreground/70 bg-blend-overlay overflow-hidden">
      <div
        ref={containerRef}
        className={`xl:max-w-[1084px] xl:px-0 md:px-10 px-4 max-w-full flex justify-center ${
          overFlowing ? "items-start h-full overflow-y-auto" : "items-center h-screen overflow-hidden"
        } md:py-10 py-4`}
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
