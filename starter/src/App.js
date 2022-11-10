import "./App.css";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { MyReadsPage } from "./MyReadsPage";
import { SearchPage } from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MyReadsPage />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
