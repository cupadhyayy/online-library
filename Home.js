// Importing React to use JSX syntax and Link for routing
import React from 'react';
import { Link } from 'react-router-dom';

// Home component function
const Home = () => {
  return (
    <div className="container">
      {/* Header for the page */}
      <h1>Welcome to the Online Library!</h1>
      
      {/* Subheader for browsing categories */}
      <h3>Browse by Category:</h3>
      
      {/* List of categories with links to corresponding routes */}
      <ul>
        <li><Link to="/books/fiction">Fiction</Link></li>
        <li><Link to="/books/non-fiction">Non-Fiction</Link></li>
        <li><Link to="/books/sci-fi">Sci-Fi</Link></li>
      </ul>
      
      {/* Subheader for popular books */}
      <h3>Popular Books:</h3>
      
      {/* List of popular books with links to detailed pages */}
      <ul>
        <li><Link to="/books/fiction/1">The Great Gatsby</Link></li>
        <li><Link to="/books/sci-fi/1">Dune</Link></li>
      </ul>
    </div>
  );
}

// Exporting the Home component as the default export
export default Home;
