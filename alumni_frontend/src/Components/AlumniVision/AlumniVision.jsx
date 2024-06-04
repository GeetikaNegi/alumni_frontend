import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import "./AlumniVision.css";

import MyPopup from "../Popup/MyPopup";
import LoginSign from "../RegisterLogin/LoginSign";
import AlumniProfile from "../Connect/AlumniDirectory/AlumniProfile";
import userImg from "../../Assets/svgs/user-image.svg";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export default function AlumniVision() {
  const [showBatchmates, setShowBatchmates] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [renderPopup, setRenderPopup] = useState(false);
  const [enrollNo, setEnrollNo] = useState(null);

  const [alumniProfile, setAlumniProfile] = useState({
    enroll_no: "", // Default selection
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
  });

  const [cookies] = useCookies(["accessToken"]);

  let token = "";

  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP fvf
    setRenderPopup(false);
    setShowBatchmates(false);
    setShowProfile(false);
  };
  const handleClickOnMyBatchmate = () => {
    if (cookies.accessToken !== undefined) {
      console.log(showBatchmates);
      setShowBatchmates(true);
    } else {
      setRenderPopup(true);
    }
  };
  useEffect(() => {
    try {
      //.
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleClickOnViewProfile = () => {
    if (cookies.accessToken !== undefined) {
      setShowProfile(true);
    } else {
      setRenderPopup(true);
    }
  };

  useEffect(() => {
    token = cookies.accessToken;
    console.log(typeof cookies.accessToken);
    if (token === undefined) {
      console.log("if");
    } else {
      setEnrollNo(jwtDecode(token).sub);

      const getAlumniToView = async () => {
        try {
          const response = await axios.get(
            "http://localhost:8080/api/v1/alumni/get-profile/" +
              jwtDecode(token).sub,
            {
              headers: {
                Authorization: "Bearer " + cookies.accessToken,
              },
            }
          );
          setAlumniProfile(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      getAlumniToView();
    }
  }, []);

  

  return (
    <div className='alumni-vision-color center-align-txt'>
      <div>
        <h1> Alumni Platform Vision </h1>
        <p className='vision-txt '>
          A platform to bridge the gap of student - alumni interaction driven by
          the ideals and values that shall ensure the upliftment of both present
          and future alumnus.
        </p>
      </div>
      <div className='vision-card-container '>
        <div className='vision-card '>
          <span className='large-no '>500+</span>
          <span className=''>Members</span>

          <a className='link-decoration' href='/alumnidirectory'>
            <button className=' alumni-vision-color alumni-vision-card-btn'>
              View Directory
            </button>
          </a>
        </div>
        <div className='vision-card'>
          <span className='large-no'>50+</span>
          <span>Batches</span>
          <a href='/my-batchmate'>
            <button
              className=' alumni-vision-color alumni-vision-card-btn'
              onClick={handleClickOnMyBatchmate}
            >
              My Batchmates
            </button>
          </a>
        </div>
        <div className='vision-card'>
          <span className='large-no'>100+</span>
          <span>Cities</span>
          <button className='alumni-vision-card-btn'>View Alumni Map</button>
        </div>
        <div className='vision-card'>
          <span>
            <img
              id='alumnivision-profile-pic'
              src={
                alumniProfile.profile_pic_name === "" ||
                alumniProfile.profile_pic_name === null
                  ? userImg
                  : "http://localhost:8080/api/v1/alumni/image?fileName=" +
                    alumniProfile.profile_pic_name
              }
              alt='error '
            />
          </span>

          <button
            className=' alumni-vision-color alumni-vision-card-btn'
            onClick={handleClickOnViewProfile}
          >
            View Profile
          </button>
        </div>
      </div>
      {/* {viewProfile && (
        <MyPopup component={<LoginSign />} onClose={handleClosePopup} />
      )} */}
      {renderPopup && (
        <MyPopup component={<LoginSign />} onClose={handleClosePopup} />
      )}
      {showProfile &&
        (enrollNo === null ? (
          <MyPopup component={<LoginSign />} onClose={handleClosePopup} />
        ) : (
          <MyPopup
            component={<AlumniProfile data={alumniProfile} />}
            onClose={handleClosePopup}
          />
        ))}
    </div>
  );
}
