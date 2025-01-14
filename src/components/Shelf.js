import { Book } from "./Book";
import PropTypes from "prop-types";

export const Shelf = ({ books, title, upsertBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} upsertBook={upsertBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  upsertBook: PropTypes.func.isRequired,
};
