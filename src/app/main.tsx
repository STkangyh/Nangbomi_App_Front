import { createRoot } from "react-dom/client";
import "./index.css";
import AppProvider from "./App.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppProvider />
  </BrowserRouter>
);
