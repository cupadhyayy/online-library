import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // We are linking the CSS file for styles.

const Header = () => {
  // State to toggle the menu open/closed (for responsive behavior on small screens)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo link that takes the user to the homepage */}
        <Link to="/" className="navbar-logo">Online Library</Link>
        
        {/* Hamburger icon for small screens that toggles the menu */}
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        
        {/* Navigation links - shown as a list when the menu is open */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/browse-books">Browse Books</Link></li>
          <li><Link to="/add-book">Add Book</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
