// Importing necessary React hooks and libraries
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // To dispatch actions to the Redux store
import { addBook } from '../redux/actions'; // Importing the addBook action to add a book
import { useNavigate } from 'react-router-dom'; // To navigate programmatically after form submission

// Functional component for adding a new book
const AddBook = () => {
  // State hooks to manage form input values
  const [title, setTitle] = useState(''); // State to store the book title
  const [author, setAuthor] = useState(''); // State to store the author's name
  const [category, setCategory] = useState(''); // State to store the book's category

  // Redux dispatch hook to dispatch actions to the store
  const dispatch = useDispatch();

  // useNavigate hook to programmatically navigate after form submission
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Check if all required fields are filled
    if (!title || !author || !category) {
      alert('All fields are required!'); // Show an alert if any field is missing
      return; // Exit the function if validation fails
    }
    // Dispatch the addBook action with form data to the Redux store
    dispatch(addBook({ title, author, category }));
    // Navigate to the category page after successfully adding the book
    navigate(`/books/${category}`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Add a New Book</h1>
        {/* Input field for the book's title */}
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        {/* Input field for the author's name */}
        <input 
          type="text" 
          placeholder="Author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
        />
        {/* Dropdown select for the book's category */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="sci-fi">Sci-Fi</option>
        </select>
        {/* Submit button for the form */}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

// Export the component to use it in other parts of the application
export default AddBook;
