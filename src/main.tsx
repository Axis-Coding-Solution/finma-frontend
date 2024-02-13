// ** react imports
import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

// ** main app imports (lazy loading)
const App = lazy(() => import("./App.tsx"));

// ** styles import
import "@/assets/css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>
);
