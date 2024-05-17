import React, { useState } from "react";
import { selectCollege } from "../../../Data/YearBook";
import Directory from "./Directory";

const CollegeDirectory = (props) => {
  const [isDeptActive, setIsDeptActive] = useState(false);

  const handleClickOnCOllege = () => {
    setIsDeptActive(true);
  };
  if (isDeptActive) {
    return <Directory data={`this is my data`} />;
  }

  return (
    <div className=' dir-container'>
      <div className='upper-division'>
        <span>Year Book</span>
        <span>IISE Group of Institutions</span>
      </div>
      <div id='view-batch-btn'>
        <button className='dir-container'>MY BATCHMATES</button>
      </div>

      <div className='cards-container'>
        {/* props.items.map((member, index) => (
          <div */}
        {selectCollege.map((member, index) => (
          <div
            key={index}
            className='cards card  card-txt-style dir-cards-bg'
            // id={isCollegeActive ? "active-college" : "inactive-college"}
            onClick={handleClickOnCOllege}
          >
            <span>{member.name}</span>
            <span>Total Member : {member.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeDirectory;
