import React, { useState } from "react";
import "./Ourteam.css";
import faculty1 from "../../Assets/team/DEEPTI GUPTA.jpg";
import faculty2 from "../../Assets/team/NAVEEN UPRETI.jpg";
import faculty3 from "../../Assets/team/VISHAL SRIVASTAVA.jpg";
import faculty4 from "../../Assets/team/SAURABH SRIVASTAVA.png";
import { Team_data } from "../../Data/Team-data";
import RIghtPanel from "./RIghtPanel";
import MyPopup from "../Popup/MyPopup";
function Ourteam() {
  const [selectedFaculty, setSelectedFaculty] = useState(0);
  const [viewProfile, setViewProfile] = useState(false);

  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP
    setViewProfile(false);
  };
  const handleClickOnViewMore = () => {
    setViewProfile((current) => !current);
  };
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
            <button className='viewMore' onClick={handleClickOnViewMore}>
              View More
            </button>
          </div>
          <div
            className='team-card'
            onClick={() => {
              setSelectedFaculty(2);
            }}
          >
            <img src={faculty2} alt='' />
            <span>PROF. NAVEEN UPRETI</span>
            <button className='viewMore' onClick={handleClickOnViewMore}>
              View More
            </button>
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
            <button className='viewMore' onClick={handleClickOnViewMore}>
              View More
            </button>
          </div>
          <div
            className='team-card'
            onClick={() => {
              setSelectedFaculty(4);
            }}
          >
            <img src={faculty4} alt='' />
            <span>PROF.Saurabh Srivastava</span>
            <button className='viewMore' onClick={handleClickOnViewMore}>
              View More
            </button>
          </div>
        </div>
      </div>

      <div className='right-panel-div'>
        <RIghtPanel items={Team_data[selectedFaculty]} />
      </div>

      {viewProfile && (
        <MyPopup
          component={<RIghtPanel items={Team_data[selectedFaculty]} />}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}

export default Ourteam;
