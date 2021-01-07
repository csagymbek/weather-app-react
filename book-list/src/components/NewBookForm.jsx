import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

export default function NewBookForm() {
  const { dispatch } = useContext(BookContext);
  const [title, seTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, author );
    dispatch({
      type: "ADD_BOOK",
      book: {
        author,
        title,
      },
    });
    seTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => seTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add book" />
    </form>
  );
}
