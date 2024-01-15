import React, { useState } from 'react';

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && year) {
      addBook({ title, author, year: parseInt(year) });
      setTitle('');
      setAuthor('');
      setYear('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', textAlign:'center' }}>
      <label style={{ marginRight: '10px' }}>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label style={{ marginRight: '10px' }}>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label>
        Year:
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
      </label>
      <button type="submit" style={{ marginLeft: '10px' }}>Add Book</button>
    </form>
  );
};

export default BookForm;
