import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppLayout from "./AppLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>{/* <App /> */}</StrictMode>
);
