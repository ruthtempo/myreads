import { ShelfChanger } from "./ShelfChanger";

export const Book = ({ book }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: 'url( "${book.previewLink}")',
          }}
        ></div>
        <ShelfChanger />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};
