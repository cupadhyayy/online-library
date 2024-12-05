// Importing React library to use React features
import React from 'react';
// Importing Link component from react-router-dom for navigation
import { Link } from 'react-router-dom';

// NotFound component function definition
const NotFound = () => {
  return (
    <div>
      {/* Display a message indicating the page was not found */}
      <h1>Page Not Found</h1>
      
      {/* Link component to navigate back to the home page */}
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

// Exporting the NotFound component to be used in other parts of the app
export default NotFound;
