import React from "react";
import "./Directory.css";
import { useState } from "react";
import { selectYear, selectCollege, selectDept } from "../../Data/YearBook";
import leftArrow from "../../Assets/svgs/left-arrow.svg";
function Directory() {
  const [isCollegeActive, setIsCollegeActive] = useState(false);
  const [isYearActive, setIsYearActive] = useState(true);
  const [isDeptActive, setIsDeptActive] = useState(false);

  const handleClickOnYear = () => {
    setIsCollegeActive((current) => !current);
    setIsYearActive((current) => !current);

    // Toggle the state
  };

  const handleClickOnCOllege = () => {
    setIsDeptActive((current) => !current);
    setIsCollegeActive((current) => !current); // Toggle the state
  };
  const handleBackButton = () => {
    //yr>clg>dept
    setIsDeptActive((current) => (current ? setIsCollegeActive(true) : false));
    setIsCollegeActive((current) => (current ? setIsYearActive(true) : false));
  };
  return (
    <div className='dir-container'>
      <div className='upper-division'>
        <span>Year Book</span>
        <span>IISE Group of Institutions</span>
      </div>

      <img
        src={leftArrow}
        alt='leftarrow'
        className='left-arrow dir-backbtn'
        onClick={handleBackButton}
      />
      <div className='cards-container'>
        {selectYear.map((member, index) => (
          <div
            key={index}
            className='cards card card-txt-style dir-cards-bg '
            id={isYearActive ? "active-year" : "inactive-year"}
            onClick={handleClickOnYear}
          >
            <span>{member.year}</span>
            <span>Total Member : {member.count}</span>
          </div>
        ))}
        {selectCollege.map((member, index) => (
          <div
            key={index}
            className='cards card card-txt-style dir-cards-bg'
            id={isCollegeActive ? "active-college" : "inactive-college"}
            onClick={handleClickOnCOllege}
          >
            <span>{member.name}</span>
            <span>Total Member : {member.count}</span>
          </div>
        ))}
        {selectDept.map((member, index) => (
          <div
            key={index}
            className='cards card card-txt-style dir-cards-bg '
            id={isDeptActive ? "active-dept" : "inactive-dept"}
            // onClick={handleClickOnDept}
          >
            <span>{member.name}</span>
            <span>Total Member : {member.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Directory;
