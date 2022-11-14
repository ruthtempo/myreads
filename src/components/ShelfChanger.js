import PropTypes from "prop-types";
import { useState } from "react";

const options = [
  {
    value: "currentlyReading",
    text: "Currently Reading",
  },
  {
    value: "wantToRead",
    text: "Want to Read",
  },
  {
    value: "read",
    text: "Read",
  },
  {
    value: "none",
    text: "None",
  },
];

export const ShelfChanger = ({ book, upsertBook }) => {
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    upsertBook(book, e.target.value);
  };

  const [selectedOption, setSelectedOption] = useState(book.shelf);

  return (
    <div className="book-shelf-changer">
      <select value={selectedOption} onChange={handleChange}>
        <option value="" disabled>
          Move to...
        </option>
        {options.map((option) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  );
};

ShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  upsertBook: PropTypes.func.isRequired,
};
