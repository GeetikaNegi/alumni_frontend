import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='nav_container'>
      <div className='logo'>Logo</div>
      <div className='nav_right'>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Connect</h2>
        <h2>Gallery</h2>
      </div>
    </div>
  );
};

export default Navbar;
