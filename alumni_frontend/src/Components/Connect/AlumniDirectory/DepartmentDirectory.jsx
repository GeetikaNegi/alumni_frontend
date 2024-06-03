import React, { useEffect, useState } from "react";
import leftArrow from "../../../Assets/svgs/left-arrow.svg";

import AlumniList from "./AlumniList";
import Directory from "./Directory";
import axios from "axios";

const DepartmentDirectory = (props) => {
  const [isAlumniListActive, setIsAlumniListActive] = useState(false);
  const [course, setCourse] = useState(null);
  const [courseData, setCourseData] = useState([
    {
      college_no: "",
      count: "",
      course: "",
    },
  ]);
  const [back, setBack] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/alumni/get-courseMember",
          {
            params: {
              year: props.year,
              college_no: props.college_no,
            },
          }
        );
        setCourseData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleClickOnDept = (value) => {
    setCourse(value);
    setIsAlumniListActive(true);
  };

  const handleBackButton = () => {
    setBack(true);
  };
  if (back) {
    return <Directory data={props.college_no} />;
  }

  if (isAlumniListActive) {
    // setBack(false);

    return (
      <AlumniList
        college_no={props.college_no}
        year={props.year}
        course={course}
      />
    );
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

      </div>
      <div className='cards-container'>
        {/* props.items.map((member, index) => (
          <div */}
        {courseData.map((member, index) => (
          <div
            key={index}
            className='cards card  card-txt-style dir-cards-bg  '
            // id={isDeptActive ? "active-dept" : "inactive-dept"}
            id={member.name}
            onClick={() => {
              handleClickOnDept(member.course);
            }}
          >
            <span>{member.course}</span>
            <span>Total Member : {member.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentDirectory;
