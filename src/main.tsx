// ** react imports
import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

// ** main app imports (lazy loading)
const App = lazy(() => import("./App.tsx"));

// ** styles import
import "@/assets/css/index.css";
import { CgSpinner } from "./assets/icons/cg-spinner.tsx";
import appLogo from "./assets/images/app-logo.png";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense
      fallback={
        <>
          <div className=" flex flex-col justify-center items-center h-screen">
            <img src={appLogo} className="w-40" />
            <CgSpinner className="animate-spin mt-4 w-10 h-10" />
          </div>
        </>
      }
    >
      <App />
    </Suspense>
  </StrictMode>
);
