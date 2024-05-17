import React, { useState } from "react";
import leftArrow from "../../../Assets/svgs/left-arrow.svg";

import { selectDept } from "../../../Data/YearBook";
import AlumniList from "./AlumniList";
import Directory from "./Directory";

const DepartmentDirectory = (props) => {
  const [isAlumniListActive, setIsAlumniListActive] = useState(false);
  const [back, setBack] = useState(false);

  const handleClickOnDept = () => {
    setIsAlumniListActive(true);
  };

  const handleBackButton = () => {
    setBack(true);
  };
  if (back) {
    return <Directory data={`this data`} />;
  }

  if (isAlumniListActive) {
    // setBack(false);

    return <AlumniList data={`Team_data`} />;
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
      <div className='cards-container'>
        {/* props.items.map((member, index) => (
          <div */}
        {selectDept.map((member, index) => (
          <div
            key={index}
            className='cards card  card-txt-style dir-cards-bg  '
            // id={isDeptActive ? "active-dept" : "inactive-dept"}
            id={member.name}
            onClick={handleClickOnDept}
          >
            <span>{member.name}</span>
            <span>Total Member : {member.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentDirectory;
