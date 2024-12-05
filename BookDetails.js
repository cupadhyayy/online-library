// Importing necessary React components and hooks
import React from 'react';
import { useParams, Link } from 'react-router-dom'; // useParams to access URL parameters and Link for navigation

// Dummy data to simulate book information (could be replaced with real data from an API or database)
const dummyBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A novel about the American dream.', rating: 4.5 },
  { id: 2, title: '1984', author: 'George Orwell', description: 'A dystopian novel set in totalitarian society.', rating: 4.7 },
];

// BookDetails component to display details of a specific book
const BookDetails = () => {
  // Using useParams to extract the bookId parameter from the URL
  const { bookId } = useParams();

  // Finding the book in the dummyBooks array based on the bookId from the URL
  const book = dummyBooks.find(b => b.id === parseInt(bookId));

  // If the book is not found, return a message indicating the book does not exist
  if (!book) return <p>Book not found.</p>;

  return (
    <div>
      {/* Displaying the book details */}
      <h1>{book.title}</h1> {/* Displaying the title of the book */}
      <p><strong>Author:</strong> {book.author}</p> {/* Displaying the author */}
      <p><strong>Description:</strong> {book.description}</p> {/* Displaying the description */}
      <p><strong>Rating:</strong> {book.rating}</p> {/* Displaying the rating of the book */}

      {/* Link to navigate back to the browse-books page */}
      <Link to="/browse-books">Back to Browse</Link>
    </div>
  );
}

// Exporting the component to be used in other parts of the application
export default BookDetails;
