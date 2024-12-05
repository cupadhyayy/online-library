// Import React to build the components and ReactDOM to render the app in the DOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the global CSS styles for the app
import './index.css';

// Import the main App component to be rendered
import App from './App';

// Import the reportWebVitals function to measure app performance
import reportWebVitals from './reportWebVitals';

// Get the root element from the HTML file to render the React app inside it
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Call reportWebVitals to log or send performance metrics
reportWebVitals();
