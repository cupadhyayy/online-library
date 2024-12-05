// Initial state of the Redux store, with an empty array of books
const initialState = {
  books: [], // This will hold the list of books
};

// Reducer function to handle actions and update the state
const reducer = (state = initialState, action) => {
// Switch statement to handle different action types
switch (action.type) {
  // When the action type is 'ADD_BOOK', we add a new book to the list
  case 'ADD_BOOK':
    // Return a new state with the added book in the 'books' array
    return { ...state, books: [...state.books, action.payload] };

  // Default case to return the current state if the action type doesn't match
  default:
    return state;
}
};

// Export the reducer function for use in the store configuration
export default reducer;
