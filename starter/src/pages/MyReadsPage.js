import { CurrentlyShelf } from "../components/CurrentlyShelf";
import { WantToReadShelf } from "../components/WantToReadShelf";
import { ReadShelf } from "../components/ReadShelf";
import { SearchButton } from "../components/SearchButton";
import { useState } from "react";

export const MyReadsPage = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyShelf />
          <WantToReadShelf />
          <ReadShelf />
        </div>
      </div>
      <SearchButton />
    </div>
  );
};
