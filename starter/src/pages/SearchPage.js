import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { search } from "../BooksAPI";
import { Book } from "../components/Book";
import PropTypes from "prop-types";

export const SearchPage = ({ myReadsLibrary }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    search(query, 10)
      .then((results) =>
        results.error ? setSearchResults([]) : setSearchResults(results)
      )
      .catch((err) => console.log("search error", err));
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={"/"}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={handleQuery}
          />
        </div>
      </div>

      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.length > 0 &&
            searchResults.map((book) => (
              <li key={book.id}>
                <Book book={book} myReads={myReadsLibrary} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

SearchPage.propTypes = {
  myReadsLibrary: PropTypes.array.isRequired,
};
