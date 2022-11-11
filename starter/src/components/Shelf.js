import { Book } from "./Book";

export const Shelf = ({ books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book myBook={book} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
