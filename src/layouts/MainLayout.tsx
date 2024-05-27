import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Outlet />
      <Button variant="default">Click me</Button>
    </div>
  );
};

export default MainLayout;
