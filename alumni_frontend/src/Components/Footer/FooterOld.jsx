import React from "react";
import "./Footer.css";
import twitter from "../../Assets/twitter.png";
import Instagram from "../../Assets/instagram.png";
import LinkdIn from "../../Assets/linkedin.png";
import Facebook from "../../Assets/facebook.png";
import Youtube from "../../Assets/youtube.png";

const Footer = () => {
  return (
    <div className='footer-container'>
      {/* <hr /> */}
      <br />
      <div className='social-links'>
        <a href='https://github.com'>
          <img src={twitter} alt='twitter' />
        </a>
        <a href='https://instagram.com'>
          <img src={Instagram} alt='instagram.png' />
        </a>
        <a href='https://linkedin.com'>
          <img src={LinkdIn} alt='Linkedin.png' />
        </a>
        <a href='https://facebook.com'>
          <img src={Facebook} alt='facebook.png' />
        </a>
        <a href='https://youtube.com'>
          <img src={Youtube} alt='youtube.png' />
        </a>
      </div>
      <div className='footer-headings'>
        <p>Home</p>
        <span> | </span>
        <p>About</p>
        <span> | </span>
        <p>Contact</p>
        <span> | </span>
        <p>Sitemap</p> <span> | </span>
        <p>Terms</p>
        <span> | </span>
        <p>Privacy</p>
      </div>
    </div>
  );
};

export default Footer;
