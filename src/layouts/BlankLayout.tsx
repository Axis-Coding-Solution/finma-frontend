import { Outlet, useNavigate } from "react-router-dom";
import { appLogoPath, starImgPath, ArrowPic } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "@/assets/icons";

const BlankLayout = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    const { state } = window.history;
    if (state && state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/auth/login", { replace: true });
    }
  };
  return (
    <div className="container flex flex-col gap-5">
      <header className="flex justify-between items-center h-24">
        <img src={appLogoPath} alt="Your Company" className="w-20 h-10" />
        <nav className="flex gap-10 items-center">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About Us</li>
            <li className="flex font-bold">
              <span>Get Free founder Toolkit</span>
              <img src={starImgPath} className="w-5" />
            </li>
            <li>Blog</li>
          </ul>
          <Button variant="default">Sign in</Button>
        </nav>
      </header>
      <main className="h-[calc(100vh-11rem)]">
        <Button variant="link" className="!p-0" onClick={handleGoBack}>
          <ArrowLeft size="20" />
          <span>Back</span>
        </Button>
        <div className="rounded-lg p-5 h-full bg-muted mt-0.5">
          <div className=" flex gap-16 bg-background h-full rounded-lg px-3 py-2 items-center">
            <img src={ArrowPic} className="w-96 h-96 mt-20" />
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlankLayout;
