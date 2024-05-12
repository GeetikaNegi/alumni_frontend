import React, { useState } from "react";
import "./OurTeam.css";
import faculty1 from "../../Assets/team/DEEPTI GUPTA.jpg";
import faculty2 from "../../Assets/team/NAVEEN UPRETI.jpg";
import faculty3 from "../../Assets/team/VISHAL SRIVASTAVA.jpg";
import faculty4 from "../../Assets/team/SAURABH SRIVASTAVA.png";
import { Team_data } from "../../Data/Team-data";
function OurTeam() {
  const [selectedFaculty, setSelectedFaculty] = useState(0);
  return (
    <div className='team-container'>
      <div className='left-panel'>
        {/* <div id='right'>tdjyrdytjytd</div> */}
        <div className='team-cards'>
          <div
            className='team-card'
            onClick={() => {
              setSelectedFaculty(1);
            }}
          >
            <img src={faculty1} alt='' />
            <span>PROF. DEEPTI GUPTA</span>
          </div>
          <div
            className='team-card'
            onClick={() => {
              setSelectedFaculty(2);
            }}
          >
            <img src={faculty2} alt='' />
            <span>PROF. NAVEEN UPRETI</span>
          </div>
        </div>
        <div className='team-cards'>
          <div
            className='team-card'
            onClick={() => {
              setSelectedFaculty(3);
            }}
          >
            <img src={faculty3} alt='' />
            <span>PROF.(DR.) VISHAL SRIVASTAVA</span>
          </div>
          <div
            className='team-card'
            onClick={() => {
              setSelectedFaculty(4);
            }}
          >
            <img src={faculty4} alt='' />
            <span>PROF.Saurabh Srivastava</span>
          </div>
        </div>
      </div>

      <div className='right-inner-panel'>
        <span>{Team_data[selectedFaculty].name}</span>
        <img src={Team_data[selectedFaculty].image} alt='error' />
        <span>{Team_data[selectedFaculty].desig}</span>
        <span>{Team_data[selectedFaculty].dept}</span>
        <span className='display-flex'>
          <a
            href={Team_data[selectedFaculty].link2}
            target='_blank'
            rel='noopener noreferrer'
            id='contact'
          >
            <img
              src={Team_data[selectedFaculty].whatsapp_label}
              alt='Whatsapp'
              id='contact-img'
            />
          </a>
          <a
            href={Team_data[selectedFaculty].link1}
            target='_blank'
            rel='noopener noreferrer'
            id='contact'
          >
            <img
              src={Team_data[selectedFaculty].phone_label}
              alt='call'
              id='contact-img'
            />
          </a>
        </span>
      </div>
    </div>
  );
}

export default OurTeam;
