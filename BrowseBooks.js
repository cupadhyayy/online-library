import React, { useState } from 'react';  // Importing React and useState hook
import { useParams, Link } from 'react-router-dom';  // Importing useParams for getting URL params and Link for navigation

// Dummy data simulating a collection of books
const dummyBooks = [
  { id: 1, category: 'fiction', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, category: 'fiction', title: '1984', author: 'George Orwell' },
  { id: 3, category: 'sci-fi', title: 'Dune', author: 'Frank Herbert' },
];

const BrowseBooks = () => {
  const { category } = useParams();  // Destructuring category from the URL parameters
  const [search, setSearch] = useState('');  // useState hook for managing search input

  // Filter the books based on the category from the URL and search input
  const filteredBooks = dummyBooks.filter(book => 
    book.category === category &&  // Ensure the book belongs to the selected category
    (book.title.toLowerCase().includes(search.toLowerCase()) ||  // Match search text in the title
     book.author.toLowerCase().includes(search.toLowerCase()))  // Or match search text in the author
  );

  return (
    <div className="container">
      <h1>Browse {category} Books</h1>  {/* Display the category name dynamically */}
      <input 
        type="text" 
        placeholder="Search by title or author" 
        value={search}  // Controlled input, binds value to state
        onChange={(e) => setSearch(e.target.value)}  // Update search state on input change
      />
      <ul>
        {/* Map through filtered books and display each as a list item with a link */}
        {filteredBooks.map(book => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title} by {book.author}</Link>  {/* Link to book details page */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrowseBooks;  // Export the BrowseBooks component for use in other parts of the app
