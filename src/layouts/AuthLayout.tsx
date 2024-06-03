import { ArrowPic } from "@/assets/images";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

function AuthLayout() {
  const location = useLocation();
  const [showArrow, setShowArrow] = useState(true);
  useEffect(() => {
    const hideImageRoutes = [
      "/auth/reset-password/change",
      "/auth/reset-password/completed",
    ];

    if (hideImageRoutes.includes(location.pathname)) {
      setShowArrow(false);
    } else {
      setShowArrow(true);
    }
  }, [location.pathname]);

  return (
    <div className="lg:flex flex-col lg:flex-row lg:gap-16 gap-10 bg-background h-full rounded-lg px-3 py-6 lg:items-center items-start">
      {showArrow && <img src={ArrowPic} className=" lg:rotate-0 rotate-90  lg:w-96 md:w-32 w-20 lg:h-96 md:h-32 h-20 lg:mt-20 mt-0 lg:mb-0 mb-6" />}
      <section
        className={`flex flex-col gap-5 ${
          showArrow ? "w-full xl:w-1/2" : "w-full"
        }`}
      >
        <Outlet />
      </section>
    </div>
  );
}

export default AuthLayout;
