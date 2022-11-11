import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { search } from "../BooksAPI";
import { Book } from "../components/Book";

export const SearchPage = ({ library }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
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
                <Book book={book} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};
