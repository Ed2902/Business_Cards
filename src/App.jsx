import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CardsPage from "./pages/Cards";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CardsPage />} />
      <Route path="/cards/:slug" element={<CardsPage />} />
      <Route path="*" element={<div className="p-6"><p>Ruta no encontrada. Volver al <Link to="/" className="underline">inicio</Link>.</p></div>} />
    </Routes>
  );
}
