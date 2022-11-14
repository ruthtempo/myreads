import { ShelfChanger } from "./ShelfChanger";
import PropTypes from "prop-types";

export const Book = ({ book, upsertBook }) => {
  const hasThumbnail = book.imageLinks ? book.imageLinks.thumbnail : "";

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url( "${hasThumbnail}")`,
          }}
        ></div>
        <ShelfChanger book={book} upsertBook={upsertBook} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors &&
          book.authors.map((author) => <p key={author}>{author}</p>)}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  upsertBook: PropTypes.func.isRequired,
};
