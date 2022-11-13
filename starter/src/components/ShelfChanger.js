import PropTypes from "prop-types";

export const ShelfChanger = ({ currentShelf, book, upsertBook }) => {
  const handleChange = (e) => {
    upsertBook(book, e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={currentShelf} onChange={handleChange}>
        <option value="nada" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

ShelfChanger.propTypes = {
  currentShelf: PropTypes.string.isRequired,
  book: PropTypes.object.isRequired,
  upsertBook: PropTypes.func.isRequired,
};
