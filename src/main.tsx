import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import PlaylistPage from "./pages/PlaylistPage.tsx";
import SideBar from "./components/SideBar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SideBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/playlist/custom/:name" element={<PlaylistPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
