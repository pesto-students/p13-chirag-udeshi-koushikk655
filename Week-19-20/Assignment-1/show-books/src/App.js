// App.js
import React, { useState, useEffect, useMemo, createContext, useContext } from 'react';
import BookDataLoader from './components/BookDataLoader';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useBookFilter, useBookSorter } from './components/CustomHooks';
import Booklist from './components/Booklist';

// Theme Context
export const ThemeContext = createContext();

const App = () => {
  const [books, setBooks] = useState([]);
  const [theme, setTheme] = useState('light');


  const filteredBooks = useBookFilter(books, 'searchTerm'); 
  const sortedBooks = useBookSorter(filteredBooks, 'sortingCriteria');

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App ${theme}`}>
        <h1 style={{margin:'20px', textAlign:'center'}}>Book Library</h1>
        <ThemeSwitcher setTheme={setTheme} />
        <Booklist />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
