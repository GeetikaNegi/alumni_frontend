import React from "react";
import "./Directory.css";
import { useState } from "react";
import { selectYear } from "../../../Data/YearBook";
import leftArrow from "../../../Assets/svgs/left-arrow.svg";
import DepartmentDirectory from "./DepartmentDirectory";
import CollegeDirectory from "./CollegeDirectory";

function Directory() {
  const [isDeptActive, setIsDeptActive] = useState(false);
  const [back, setBack] = useState(false);

  const handleClickOnYear = () => {
    setIsDeptActive(true);
  };

  const handleBackButton = () => {
    setBack(true);
    //yr>clg>dept
  };

  if (isDeptActive) {
    return <DepartmentDirectory data={`this is my data`} />;
  }

  if (back) {
    return <CollegeDirectory data={`this is my data`} />;
  }

  return (
    <div className='dir-container'>
      <div className='upper-division'>
        <span>Year Book</span>
        <span>IISE Group of Institutions</span>
      </div>
      <div id='view-batch-btn' className="display-flex">
        <img
          src={leftArrow}
          alt='leftarrow'
          className='left-arrow '
          onClick={handleBackButton}
        />

        <button className='dir-container'>MY BATCHMATES</button>
      </div>
      <div className='cards-container'>
        {selectYear.map((member, index) => (
          <div
            key={index}
            className='cards card  card-txt-style dir-cards-bg'
            onClick={handleClickOnYear}
          >
            <span>{member.year}</span>
            <span>Total Member : {member.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Directory;
