import React, { useEffect, useState } from "react";
import "./Directory.css";
import "./AlumniList.css";
import leftArrow from "../../../Assets/svgs/left-arrow.svg";
import DepartmetDirectory from "./DepartmentDirectory";
import faculty1 from "../../../Assets/svgs/user-image.svg";

import MyPopup from "../../Popup/MyPopup";
import AlumniProfile from "./AlumniProfile";
import axios from "axios";

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
  const [memberIndex, setMemberIndex] = useState(null);

  const [viewProfile, setViewProfile] = useState(false);
  const handleBackButton = () => setBack(true);
  const [alumniProfileList, setAlumniProfileList] = useState([
    {
      enrollNo: "", // Default selection
      fname: "",
      lname: "",
      email: "",
      password: "",
      dateOfJoining: "",
      dateOfCompletion: "",
      course: "",
      mobileNo: "",
      collegeNo: "",
      profile_pic_name: "",
    },
  ]);
  const [imgNames, setImgNames] = useState(null);

  const [alumniImage, setAlumniImage] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  const handleViewMoreBtn = (index) => {
    setMemberIndex(index);
    setViewProfile((current) => !current);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log(props.course);
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/alumni/get-batch",
          {
            params: {
              college_no: props.college_no,
              year: props.year,
              course: props.course,
            },
          }
        );
        console.log(response.data);
        // setCourseData(response.data.data);
        // console.log(courseData);

        setAlumniProfileList(response.data.data);
        console.log(alumniProfileList);
        if (response.data.status.success) {
          console.log("success is ours");
          //...hh
          alumniProfileList.map((member, index) => {
            console.log("in map");
            setImgNames(member.profile_pic_name);
          });
          console.log(imgNames);
        }
      } catch (error) {
        console.log(error); //..x`,,
      }
    };
    fetchData();
  }, []);
  //..


  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP
    setViewProfile(false);
  };

  if (back) {
    //here data is all the deptNames ///gggg
    return (
      <DepartmetDirectory college_no={props.college_no} year={props.year} />
    );
  }
  console.log(`props are : ${props.college_no},${props.year},${props.course}`);

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
      {console.log(alumniProfileList)}
      <div className='cards-container' id='alumnilist-container'>
        {/* {props.items.map((member, index) */}
        {alumniProfileList.map((member, index) => (
          <div
            key={index}
            className='alumniList-cards  alumniList-card card-txt-style dir-cards-bg'
          >
            <span>
              {/* <img src={Team_data[index].image} alt='error' />              */}
              {/* <img src={imageUrl} alt='this alumni' /> */}
              <img
                className='alumnilist-image'
                src={
                  member.profile_pic_name === null
                    ? faculty1
                    : "http://localhost:8080/api/v1/alumni/image?fileName=" +
                      member.profile_pic_name
                }
                alt='alumniImage'
              />
            </span>

            <span className='smaller'>
              {member.fname} {member.lname}
            </span>
            <span> Alumni Since-{member.dateOfJoining}</span>

            <button
              key={index}
              className='viewmore-btn'
              onClick={() => {
                handleViewMoreBtn(index);
              }}
            >
              View More
            </button>
          </div>
        ))}
      </div>

      {viewProfile && (
        <MyPopup
          component={<AlumniProfile data={alumniProfileList[memberIndex]} />}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default AlumniList;
