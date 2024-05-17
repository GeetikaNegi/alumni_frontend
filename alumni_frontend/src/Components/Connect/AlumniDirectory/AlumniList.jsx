import React, { useState } from "react";
import "./Directory.css";
import "./AlumniList.css";
import leftArrow from "../../../Assets/svgs/left-arrow.svg";
import DepartmetDirectory from "./DepartmentDirectory";
import faculty1 from "../../../Assets/team/DEEPTI GUPTA.jpg";

import MyPopup from "../../Popup/MyPopup";
import AlumniProfile from "./AlumniProfile";

const AlumniList = (props) => {
  const Team_data = [
    {
      name: `Arshad Shrivastava ANAND`,
      image: faculty1,
      collegeName: `FIeMITS`,
    },

    {
      name: `Prof. Deepti Gupta`,
      image: faculty1,
      collegeName: `IISE`,
    },
    {
      name: `Prof. Naveen Upreti`,
      image: faculty1,
      collegeName: `IISE LU`,
    },
    {
      name: `Prof(Dr).Vishal Srivastava`,
      image: faculty1,
      collegeName: `FIeMITS`,
    },
    {
      name: `Prof. Saurabh Srivastava`,
      image: faculty1,
      collegeName: `IISE`,
    },
  ];
  const [back, setBack] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
  const handleBackButton = () => setBack(true);
  const handleViewMoreBtn = () => {
    setViewProfile((current) => !current);
  };

  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP
    setViewProfile(false);
  };

  if (back) {
    //here data is all the deptNames
    return <DepartmetDirectory data={`data`} />;
  }

  return (
    <div className=' dir-container'>
      <div className='upper-division'>
        <span>Year Book</span>
        <span>IISE Group of Institutions</span>
      </div>
      <div id='view-batch-btn' className='display-flex'>
        <img
          src={leftArrow}
          alt='leftarrow'
          className='left-arrow '
          onClick={handleBackButton}
        />

        <button className='dir-container'>MY BATCHMATES</button>
      </div>
      <div className='cards-container' id='alumnilist-container'>
        {/* {props.items.map((member, index) */}
        {Team_data.map((member, index) => (
          <div
            key={index}
            className='alumniList-cards  alumniList-card card-txt-style dir-cards-bg'
          >
            <span>
              <img src={member.image} alt='error' />
            </span>
            <span>{member.name}</span>

            <span className='smaller'>{member.collegeName}</span>

            <button
              key={index}
              className='viewmore-btn'
              onClick={handleViewMoreBtn}
            >
              View More
            </button>
          </div>
        ))}
      </div>

      {viewProfile && (
        <MyPopup component={<AlumniProfile />} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default AlumniList;
