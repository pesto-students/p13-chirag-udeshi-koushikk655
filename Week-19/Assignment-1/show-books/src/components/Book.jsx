import React, { PureComponent } from 'react';

class Book extends PureComponent {
  render() {
    const { title, author, year } = this.props.item;

    return (
      <li style={{ listStyle: 'none', marginBottom: '10px' }}>
        Title: {title} -- Author: {author} -- Year: {year}
      </li>
    );
  }
}

export default Book;

