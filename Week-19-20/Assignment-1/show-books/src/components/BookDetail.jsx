import React, { useState } from "react";
function BookDetail(props) {
    const style = {
        spacing: {
            marginRight: '20px',
        },
        top: {
            display:'block',
            margin: '10px 0px',
            fontWeight: "bold"
        }
    }
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };
const book = props.book
const theme = props.theme
  return (
    <li style={{border:"1px solid black", padding:'20px', borderRadius:'5px', background:'#ccc', marginBottom:'5px', backgroundColor: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black'}}>
      <span style={style.top}>Title : {book.title}</span>
      <span style={style.spacing}>Author: {book.author}</span>
      <span style={style.spacing}>Year: {book.year}</span>
      <button onClick={toggleDetails} style={{ marginRight: '10px' }}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div style={{ marginTop: '10px' }}>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Genre: Fiction</p>
        </div>
      )}
    </li>
  );
}

export default BookDetail;
