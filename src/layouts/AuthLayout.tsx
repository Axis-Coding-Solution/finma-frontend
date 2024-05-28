import { ArrowPic } from "@/assets/images";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex gap-16 bg-background h-full rounded-lg px-3 py-2 items-center">
      <img src={ArrowPic} className="w-96 h-96 mt-20" />
      <section className="flex flex-col gap-5 w-1/2">
        <Outlet />
      </section>
    </div>
  );
}

export default AuthLayout;
