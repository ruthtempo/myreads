import { Shelf } from "../components/Shelf";
import { SearchButton } from "../components/SearchButton";

export const MyReadsPage = ({ myReadsLibrary }) => {
  const currentlyReading = myReadsLibrary.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = myReadsLibrary.filter(
    (book) => book.shelf === "wantToRead"
  );
  const readBooks = myReadsLibrary.filter((book) => book.shelf === "read");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf books={currentlyReading} />
          <Shelf books={wantToRead} />
          <Shelf books={readBooks} />
        </div>
      </div>
      <SearchButton />
    </div>
  );
};
