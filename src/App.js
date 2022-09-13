import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SingleMovie } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/:id" element={<SingleMovie />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
