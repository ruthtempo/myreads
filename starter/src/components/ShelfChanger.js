import { useState } from "react";

export const ShelfChanger = ({ myReads, currentShelf }) => {
  const [current, setCurrent] = useState(currentShelf);

  const handleChange = (e) => {
    setCurrent(e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={current} onChange={handleChange}>
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
