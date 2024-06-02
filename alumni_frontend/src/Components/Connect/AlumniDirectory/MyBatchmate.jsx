import React, { useEffect, useState } from "react";

import MyPopup from "../../Popup/MyPopup";
import AlumniProfile from "./AlumniProfile";
import axios from "axios";

import home from "../../../Assets/svgs/home.svg";
import CollegeDirectory from "./CollegeDirectory";

import userImg from "../../../Assets/svgs/user-image.svg";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

const MyBatchmate = () => {
  const [viewProfile, setViewProfile] = useState(false);

  const [back, setBack] = useState(false);
  const [memberIndex, setMemberIndex] = useState(null);
  const [showBatchmates, setShowBatchmates] = useState({});

  const [callFetchBatchDetails, setCallFetchBatchdetails] = useState(false);
  const [x, setX] = useState(true);
  const [count, setCount] = useState(1);

  const [cookie] = useCookies(["accessToken"]);
  const token = cookie.accessToken;
  const enroll_no = jwtDecode(token).sub;
  //jlj
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
      profile_pic_name: userImg,
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);
  const handleViewMoreBtn = (index) => {
    setMemberIndex(index);
    setViewProfile((current) => !current); //jj
  };

  useEffect(() => {
    const fetchBatchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/alumni/get-alumniBatch",
          {
            params: {
              enroll_no: enroll_no,
            },
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setShowBatchmates(response.data.data);

        setCallFetchBatchdetails(true);
        if (callFetchBatchDetails) {
          setX(false);
        }

        console.log(callFetchBatchDetails);
        console.log(showBatchmates);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBatchData();
  }, [callFetchBatchDetails]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true before the fetchkjkjb
      setCallFetchBatchdetails(false);
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/alumni/get-batch",
          {
            params: {
              college_no: showBatchmates?.collegeNo,
              year: showBatchmates?.date_of_joining,
              course: showBatchmates?.course, //
            },
          }
        );
        console.log(response.data);
        // setCourseData(response.data.data);
        // console.log(courseData);

        setAlumniProfileList(response.data.data);
        console.log(alumniProfileList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false); // Set lllkkkmloadinjlojjg to false after fetch (success or error)
      }
    };
    console.log("use effect called" + count);
    setCount(count + 1);
    console.log(showBatchmates);
    if (count == 2) {
      fetchData();
    }

    // fetchData();
  }, [x]);

  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP
    setViewProfile(false);
  };

  if (back) {
    //here data is all the deptNames
    return <CollegeDirectory />;
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading batch data...</p>
      ) : (
        <div className=' dir-container'>
          <div className='upper-division'>
            <span>Year Book</span>
            <span>IISE Group of Institutions</span>
          </div>
          <div id='view-batch-btn' className='display-flex'>
            <img
              src={home}
              alt='leftarrow'
              className='left-arrow '
              onClick={handleBackButton}
            />

            <button className='dir-container'>MY BATCHMATES</button>
          </div>
          <div className='cards-container' id='alumnilist-container'>
            {/* {props.items.map((member, index) */}
            {alumniProfileList.map((member, index) => (
              <div
                key={index}
                className='alumniList-cards  alumniList-card card-txt-style dir-cards-bg'
              >
                <span>
                  <img
                    src={
                      member.profile_pic_name === null
                        ? userImg
                        : "http://localhost:8080/api/v1/alumni/image?fileName=" +
                          member.profile_pic_name
                    }
                    alt='error'
                  />
                </span>
                <span className='smaller'>
                  {member.fname} {member.lname}
                </span>
                <span> Alumni Since-{member.course}</span>

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
              component={
                <AlumniProfile data={alumniProfileList[memberIndex]} />
              }
              onClose={handleClosePopup}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default MyBatchmate;
