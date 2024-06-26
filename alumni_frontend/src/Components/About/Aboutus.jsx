import React from "react";
import "./Aboutus.css";
import connect from "../../Assets/connect.png";
import communincate from "../../Assets/communicate.png";
import collaborate from "../../Assets/collaborate.png";

function Aboutus() {
  return (
    <div className='about-container'>
      <div className='left'>
        <h1>What are we doing !</h1>
        <p>
          IISE , in entirety, is committed to identifying young people with
          professional and entrepreneurial aspirations, talents and
          determination and trigger them off to become excellent inspirational
          leaders in their chosen pursuits by developing in them skills, and
          clear vision.
        </p>
      </div>
      <div className='cards'>
        <div className='card card-txt-style'>
          <h1>Connect</h1>
          <img src={connect} alt='' className='card-img ' />
          <span className='sh-1'>Past</span>
          <span className='sh-2'>Present</span>
          <span className='sh-3'>Future</span>
        </div>
        <div className='card card-txt-style' id='mid-card'>
          <h1>Communicate</h1>
          <img src={communincate} alt='' className='card-img' />
          <span className='sh-1'>Tradition</span>
          <span className='sh-2'>Information</span>
          <span className='sh-3'>Experience</span>
        </div>
        <div className='card card-txt-style padding-2vw'>
          <h1>Collaborate</h1>
          <img src={collaborate} alt='' className='card-img' />
          <span className='sh-1'>Career Development</span>
          <span className='sh-2'>entrepreneurship</span>
          <span className='sh-3'>social upliftment</span>
        </div>
      </div>

      <p className='padding-2vw'>
        <strong>&quot; </strong>
        <em>
          Networking is a key activity that is not only fun, but also critical
          to an individual's personal growth and professional development.
        </em>
        <strong> &quot;</strong>
      </p>
    </div>
  );
}

export default Aboutus;
