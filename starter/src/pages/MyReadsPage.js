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
          <Shelf books={currentlyReading} title={"Currently Reading"} />
          <Shelf books={wantToRead} title={"Want to Read"} />
          <Shelf books={readBooks} title={"Read"} />
        </div>
      </div>
      <SearchButton />
    </div>
  );
};
