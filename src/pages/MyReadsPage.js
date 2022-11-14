import { Shelf } from "../components/Shelf";
import { SearchButton } from "../components/SearchButton";
import PropTypes from "prop-types";

export const MyReadsPage = ({ myReadsLibrary, upsertBook }) => {
  const currentlyReading = myReadsLibrary.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = myReadsLibrary.filter(
    (book) => book.shelf === "wantToRead"
  );
  const readBooks = myReadsLibrary.filter((book) => book.shelf === "read");

  const shelves = [
    {
      books: currentlyReading,
      title: "Currently Reading",
    },
    { books: wantToRead, title: "Want to Read" },
    {
      books: readBooks,
      title: "Read",
    },
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <Shelf
              books={shelf.books}
              title={shelf.title}
              upsertBook={upsertBook}
            />
          ))}
        </div>
      </div>
      <SearchButton />
    </div>
  );
};

MyReadsPage.propTypes = {
  myReadsLibrary: PropTypes.array.isRequired,
  upsertBook: PropTypes.func.isRequired,
};
