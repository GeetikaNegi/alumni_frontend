import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='footer-container'>
      <div>
        <h4>IISE Alumni Connect</h4>
        <div>
          <p>
            <em>
              A platform to bridge the gap of student - alumni interaction
              driven by the ideals and values that shall ensure the upliftment
              of both present and future alumnus.
            </em>
          </p>
        </div>
      </div>

      <div>
        <div className='footer-card'>
          <h4>Quick Links</h4>

          <div>
            <ul>
              <li>
                &gt; <a href='/'>Home</a>
              </li>
              <li>
                &gt; <a href='/Aboutus'>About us</a>
              </li>
              <li>
                &gt; <a href='/connect'>Connect</a>
              </li>
              <li>
                &gt; <a href='/career'> Career</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className='footer-card'>
          <h4>Career</h4>

          <div>
            <ul>
              <li>
                &gt; <a href='/jobs'>Jobs</a>
              </li>
              <li>
                &gt; <a href='/internships'>Internships</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className='footer-card'>
          <h4>Connect</h4>

          <div>
            <ul>
              <li>
                &gt; <a href='/alumni-directory'>Alumni Directory</a>
              </li>
              <li>
                &gt; <a href='invite-batchmate'>Invite Batchmate</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
