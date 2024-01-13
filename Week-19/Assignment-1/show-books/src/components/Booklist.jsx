import React, { useState } from 'react';
import Book from './Book';
import BookForm from './Bookform';
import BookDetail from './BookDetail';

const Booklist = () => {
    const style = {

    }
  const [books, setBooks] = useState([
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 },
    // Add more books if you'd like
  ]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };
  const deleteBook = (index) => {
    const updatedBooks = [...books]
    updatedBooks.splice(index, 1)
    setBooks(updatedBooks)
    // console.log("index deleted", index)
  }

  return (
    <div>
      {/* <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Book List</h1> */}
      <BookForm addBook={addBook} />
      {books.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No books available</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {books.map((item, index) => (
            <div key={index} style={{margin:'20px'}}>
                <BookDetail book={item} />
                <button type='submit' onClick={() => deleteBook(index)} style={{background:'red', color:'white',  borderRadius:'4px',marginBottom:'10px',padding:'3px'}}>Delete</button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Booklist;
