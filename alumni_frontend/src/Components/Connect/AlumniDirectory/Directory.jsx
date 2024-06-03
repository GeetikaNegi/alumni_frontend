import React, { useEffect } from "react";
import "./Directory.css";
import { useState } from "react";
import { selectYear } from "../../../Data/YearBook";
import leftArrow from "../../../Assets/svgs/left-arrow.svg";
import axios from "axios";
import DepartmentDirectory from "./DepartmentDirectory";
import CollegeDirectory from "./CollegeDirectory";

function Directory(props) {
  const [isDeptActive, setIsDeptActive] = useState(false);
  const [back, setBack] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [yearData, setYearData] = useState([
    {
      count: "",
      date_of_joining: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/alumni/get-yearMember",
          {
            params: {
              college_no: props.data,
            },
          }
        );
        setYearData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleClickOnYear = (value) => {
    setSelectedYear(value);
    setIsDeptActive(true);
  };

  const handleBackButton = () => {
    setBack(true);
    //yr>clg>dept
  };

  if (isDeptActive) {
    return <DepartmentDirectory college_no={props.data} year={selectedYear} />;
  }

  if (back) {
    return <CollegeDirectory />;
  }

  return (
    <div className='dir-container'>
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
      </div>
      <div className='cards-container'>
        {yearData.map((member, index) => (
          <div
            key={index}
            className='cards card  card-txt-style dir-cards-bg'
            onClick={() => {
              handleClickOnYear(member.date_of_joining);
            }}
          >
            <span>{member.date_of_joining}</span>
            <span>Total Member : {member.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Directory;
