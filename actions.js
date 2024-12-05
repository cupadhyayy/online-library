// Action creator to add a new book to the state
export const addBook = (book) => ({
  type: 'ADD_BOOK', // The action type indicating that a book is being added
  payload: book,    // The payload contains the book object to be added
});
