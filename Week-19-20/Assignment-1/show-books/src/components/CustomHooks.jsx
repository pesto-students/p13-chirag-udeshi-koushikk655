// hooks.js
import { useMemo } from 'react';

export const useBookFilter = (books, searchTerm) => {
  return useMemo(() => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [books, searchTerm]);
};

export const useBookSorter = (books, sortingCriteria) => {
  return useMemo(() => {
    return [...books].sort((a, b) => a[sortingCriteria] - b[sortingCriteria]);
  }, [books, sortingCriteria]);
};
