import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing routing components
import { Provider } from 'react-redux'; // Importing the Provider component to integrate Redux store
import store from './redux/store'; // Importing the Redux store configuration
import Header from './components/Header'; // Importing the Header component
import Home from './components/Home'; // Importing the Home component (the landing page)
import BrowseBooks from './components/BrowseBooks'; // Importing the BrowseBooks component to display books by category
import BookDetails from './components/BookDetails'; // Importing the BookDetails component to show details of a specific book
import AddBook from './components/AddBook'; // Importing the AddBook component for adding a new book
import NotFound from './components/NotFound'; // Importing the NotFound component for handling unmatched routes

const App = () => {
  return (
    <Provider store={store}> {/* Providing the Redux store to the application */}
      <Router> {/* Wrapping the app with Router to enable routing */}
        <Header /> {/* Rendering the Header component, visible on all pages */}
        <Routes> {/* Defining the route paths */}
          <Route path="/" element={<Home />} /> {/* Route for the Home page */}
          <Route path="/books/:category" element={<BrowseBooks />} /> {/* Route to browse books by category */}
          <Route path="/book/:bookId" element={<BookDetails />} /> {/* Route for viewing individual book details */}
          <Route path="/add-book" element={<AddBook />} /> {/* Route for adding a new book */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 page if no route matches */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;  // Exporting the App component as default
