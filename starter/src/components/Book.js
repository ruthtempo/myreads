import { ShelfChanger } from "./ShelfChanger";
import PropTypes from "prop-types";

export const Book = ({ book, myReads }) => {
  const hasThumbnail = book.imageLinks ? book.imageLinks.thumbnail : "";
  const currentShelf = book.shelf ? book.shelf : "none";
  console.log("book", book);

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
        <ShelfChanger myReads={myReads} currentShelf={currentShelf} />
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
};
