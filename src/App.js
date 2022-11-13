import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MyReadsPage } from "../src/pages/MyReadsPage";
import { SearchPage } from "../src/pages/SearchPage";
import { useState, useEffect } from "react";
import { getAll, update } from "./BooksAPI";

function App() {
  const [myReadsLibrary, setMyReadsLibrary] = useState([]); //my reads

  const upsertBook = (book, newShelf) => {
    update(book, newShelf);

    let updatedLibrary = [];

    const updateInLibrary = () => {
      updatedLibrary = myReadsLibrary.map((myBook) => {
        if (myBook.id === book.id) {
          return { ...myBook, shelf: newShelf };
        }
        return myBook;
      });
    };

    const addToLibrary = () => {
      updatedLibrary = myReadsLibrary.concat({ ...book, shelf: newShelf });
    };

    if (myReadsLibrary.some((myBook) => myBook.id === book.id)) {
      updateInLibrary();
    } else {
      addToLibrary();
    }

    setMyReadsLibrary(updatedLibrary);
  };

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
          element={
            <MyReadsPage
              myReadsLibrary={myReadsLibrary}
              upsertBook={upsertBook}
            />
          }
        />
        <Route path="search" element={<SearchPage upsertBook={upsertBook} />} />
      </Routes>
    </div>
  );
}

export default App;
