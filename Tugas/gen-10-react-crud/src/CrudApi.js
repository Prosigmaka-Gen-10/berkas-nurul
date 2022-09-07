import axios from "axios";
import { useEffect, useState } from "react";

export default function CrudApi() {
  const originalForm = {
    title: " ",
    author: " ",
    publisher: " ",
  };

  const [books, setBooks] = useState([]);
  const [formInput, setFormInput] = useState({ ...originalForm });

  function getBookList() {
    axios.get("http://localhost:3000/books").then((res) => {
      // console.log(res.data)
      setBooks(res.data);
    });
  }

  function createBookData() {
    axios.post("http://localhost:3000/books", formInput).then(() => {
      getBookList();
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formInput.id) {
      updateBook();
    } else {
      createBookData();
    }

    setFormInput({ ...originalForm });
  }

  useEffect(() => {
    getBookList();
  });

  function updateBook() {
    axios
      .put("http://localhost:3000/books/" + formInput.id, formInput)
      .then(() => {
        getBookList();
      });
  }

  function deleteBook(bookId) {
    axios.delete("http://localhost:3000/books/" + bookId).then(() => {
      getBookList();
    });
  }

  function handleInput(event, propName) {
    const currentFormInput = { ...formInput };
    currentFormInput[propName] = event.target.value;
    setFormInput(currentFormInput);
  }

  function prepareUpdate(book) {
    setFormInput({ ...book });
  }

  useEffect(() => {
    getBookList();
  });

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <h2>Form Data Buku </h2>

        <label>
          Judul Buku :
          <input
            type="text"
            value={formInput.title}
            onChange={(event) => handleInput(event, "title")}
          />
        </label>

        <br />
        <br />

        <label>
          Penulis :
          <input
            type="text"
            value={formInput.author}
            onChange={(event) => handleInput(event, "author")}
          />
        </label>

        <br />
        <br />

        <label>
          Penerbit :
          <input
            type="text"
            value={formInput.publisher}
            onChange={(event) => handleInput(event, "publisher")}
          />
        </label>

        <br />
        <br />

        <button>Submit</button>
      </form>

      <br />
      <hr />
      <br />

      <h2> Daftar Buku </h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} | {book.author} | {book.publisher}
            &nbsp;&nbsp;
            <button onClick={() => prepareUpdate(book)}>Update</button>
            &nbsp;&nbsp;
            <button onClick={() => deleteBook(book)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
