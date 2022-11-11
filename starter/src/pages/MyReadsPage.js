import { Shelf } from "../components/Shelf";
import { SearchButton } from "../components/SearchButton";

export const MyReadsPage = ({ library }) => {
  const currentlyReading = library.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = library.filter((book) => book.shelf === "wantToRead");
  const readBooks = library.filter((book) => book.shelf === "read");

  console.log("currently", currentlyReading);
  console.log("wanto", wantToRead);
  console.log("read", readBooks);

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
