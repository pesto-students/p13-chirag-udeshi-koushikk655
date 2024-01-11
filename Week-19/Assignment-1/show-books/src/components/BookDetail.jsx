import React from 'react';

function BookDetail({ title, author, year }) {
  return (
    <li>
      <h3>Title : {title}</h3>
      <p>Author: {author}</p>
      <p>Year: {year}</p>
    </li>
  );
}

export default BookDetail;
