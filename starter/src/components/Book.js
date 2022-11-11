import { ShelfChanger } from "./ShelfChanger";

export const Book = ({ myBook, searchBook }) => {
  console.log("myBook", myBook);
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url( "${myBook.imageLinks.thumbnail}")`,
          }}
        ></div>
        <ShelfChanger />
      </div>
      <div className="book-title">{myBook.title}</div>
      <div className="book-authors">{myBook.authors}</div>
    </div>
  );
};
