import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MyReadsPage } from "../src/pages/MyReadsPage";
import { SearchPage } from "../src/pages/SearchPage";
import { useState, useEffect } from "react";
import { getAll } from "./BooksAPI";

function App() {
  const [myReadsLibrary, setMyReadsLibrary] = useState([]); //my reads

  useEffect(() => {
    getAll().then((results) => {
      setMyReadsLibrary(results);
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<MyReadsPage myReadsLibrary={myReadsLibrary} />}
        />
        <Route
          path="search"
          element={<SearchPage myReadsLibrary={myReadsLibrary} />}
        />
      </Routes>
    </div>
  );
}

export default App;
