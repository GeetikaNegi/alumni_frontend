import React, { useState } from "react";
import "./Gallery.css"; // Import your CSS file

function Gallery() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDocumentClick = (event) => {
    if (event.target.className !== "nav-link") {
      setShowDropdown(false);
    }
  };

  document.addEventListener("click", handleDocumentClick);

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <a href='#' className='nav-brand'>
          {/* Add your brand name here */}
        </a>
        <ul className='nav-items'>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              Contact
            </a>
          </li>

          <li className='nav-item'>
            <a href='#' className='nav-link'>
              Engage
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              Galleries
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a href='#' className='nav-link' onClick={handleClick}>
              News
              <span className='dropdown-indicator'>⌄</span>
            </a>
            {showDropdown && (
              <ul className='dropdown-menu'>
                <li className='dropdown-item'>
                  <a href='#' className='dropdown-link'>
                    News & Stories
                  </a>
                </li>
                <li className='dropdown-item'>
                  <a href='#' className='dropdown-link'>
                    Noticeboard
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              Careers
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Gallery;
