import "./theme/theme.scss";
import "./assets/css/global.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Component } from "./components/Component";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Component />
  </StrictMode>
);
