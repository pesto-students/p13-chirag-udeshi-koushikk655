import React, {Component} from 'react'
import Book from './Book';

const WithLogging = (WrappedComponent) => {
    return class extends Component {
      componentDidMount() {
        console.log(`${WrappedComponent.name} is rendered.`);
      }
  
      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
  };
  
  // Booklist component
  class Booklist extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        books: [
          { title: 'Book 1', author: 'Author 1', year: 2020 },
          { title: 'Book 2', author: 'Author 2', year: 2018 },
          { title: 'Book 3', author: 'Author 3', year: 2022 },
          // Add more books if you'd like
        ],
      };
    }
  
    render() {
      return (
        <div>
          <ul>
            {this.state.books.map((item, index) => (
              <Book key={index} item={item} />
            ))}
          </ul>
        </div>
      );
    }
  }
  
  // Apply the WithLogging HOC to the Booklist component
  const BooklistWithLogging = WithLogging(Booklist);
  
  export default BooklistWithLogging;
