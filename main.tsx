// ** react imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// ** main app imports
import App from "@/App.tsx";

// ** styles import
import "@/assets/css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
