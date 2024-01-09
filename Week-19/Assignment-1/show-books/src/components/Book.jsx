import React from 'react'

function Book(props) {
    let item = props.item
  return (
    <li style={{listStyle:'none',marginBottom:'10px'}}>Title : {item.title} -- Author : {item.author} -- Year : {item.year}</li>
  )
}

export default Book
