import { Link, Outlet } from "react-router-dom";

function IdeaClarityPage() {
  return (
    <>
      <div className="flex justify-end items-end text-secondary">
        <span className="text-foreground font-semibold text-2xl">1</span>
        / <span>4</span>
      </div>
      <div className="flex items-center gap-2 mt-2 mb-5">
        <div className="h-2 w-full rounded-full bg-primary"></div>
        <div className="h-2 w-full rounded-full bg-primary"></div>
        <div className="h-2 w-full rounded-full bg-secondary"></div>
        <div className="h-2 w-full rounded-full bg-secondary"></div>
      </div>
      <Outlet />
    </>
  );
}

export default IdeaClarityPage;
