const BookDataLoader = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = [
          { title: 'Book 1', author: 'Author 1', year: 2020 },
          { title: 'Book 2', author: 'Author 2', year: 2018 },
          { title: 'Book 3', author: 'Author 3', year: 2022 },
        ];
        resolve(data);
      }, 1000);
    });
  };
  
  export default BookDataLoader;
