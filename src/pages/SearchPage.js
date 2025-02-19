import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { search } from "../BooksAPI";
import { Book } from "../components/Book";
import PropTypes from "prop-types";

export const SearchPage = ({ upsertBook, myReadsLibrary }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleQuery = (event) => {
    setQuery(event.target.value);
  };
  const setDefaultShelf = (searchedBooks, myBooks) => {
    return searchedBooks.map((searchedBook) => {
      for (let i = 0; i < myBooks.length; i++) {
        if (myBooks[i].id === searchedBook.id) {
          return { ...searchedBook, shelf: myBooks[i].shelf };
        }
      }
      return { ...searchedBook, shelf: "none" };
    });
  };

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      search(query, 10)
        .then((results) => {
          setIsLoading(false);
          results.error
            ? setSearchResults([])
            : setSearchResults(
                setDefaultShelf(results, myReadsLibrary) //returns new array made of combining the books in myReads and search ( to track the shelves they are in)
              );
        })
        .catch((err) => console.log("search error", err));
    } else {
      setSearchResults([]);
    }
  }, [query, myReadsLibrary]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={"/"}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title"
            value={query}
            onChange={handleQuery}
          />
        </div>
      </div>

      <div className="search-books-results">
        <ol className="books-grid">
          {query && searchResults.length > 0
            ? searchResults?.map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    upsertBook={upsertBook}
                    myReadsLibrary={myReadsLibrary}
                  />
                </li>
              ))
            : !isLoading && searchResults.length === 0 && query
            ? "No matches for this search"
            : ""}
        </ol>
      </div>
    </div>
  );
};

SearchPage.propTypes = {
  upsertBook: PropTypes.func.isRequired,
  myReadsLibrary: PropTypes.array.isRequired,
};
