import React, { useState, useContext, useEffect } from 'react';
import BookForm from './Bookform';
import BookDetail from './BookDetail';
import { ThemeContext } from '../App';
import BookDataLoader from './BookDataLoader';

const Booklist = () => {
  const theme = useContext(ThemeContext);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    BookDataLoader()
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching book data:', error));
  }, []);

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
                <BookDetail book={item} theme={theme} />
                <button type='submit' onClick={() => deleteBook(index)} style={{background:'red', color:'white',  borderRadius:'4px',marginBottom:'10px',padding:'3px'}}>Delete</button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Booklist;
