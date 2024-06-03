import React, { useState } from "react";

import { useCookies } from "react-cookie";

import UpdateSignupInfo from "./UpdateSignupInfo";
import SocialInfo from "./UpdateSocialInfo";
import ProfilePic from "./UpdateProfilePic";
import { jwtDecode } from "jwt-decode";

function UpdateProfileHome() {
  const [page, setPage] = useState(0);
  const [isBasicActive, setIsBasicActive] = useState(true);
  const [isProfessionalActive, setIsProfessionalActive] = useState(false);
  const [isPicActive, setIsPicActive] = useState(false);

  const headers = [
    "Academic Details",
    "Professional Details",
    "Profile Picture",
  ];

  const [showNext, setShowNext] = useState(false);
  const [enrollNo, setEnrollNo] = useState(2);
  const getSuccessFromChild = (data) => {
    console.log("this is data ", data);
    setShowNext(data);
  };

  const display = () => {
    if (page === 0) {
      return (
        <UpdateSignupInfo />
      );
    } else if (page === 1) {
      return <SocialInfo  />;
    } else {
      return <ProfilePic  />;
    } //..
  };

  return (
    <div>
      <div className='signup-container'>
        <h1 className='signup-header'>
          <u>Edit Profile</u>
        </h1>
        <div className='updation-nav'>
          <div
            className={
              "updation-nav-element " + (isBasicActive ? "active-page" : "")
            }
            onClick={() => {
              setPage(0);
              setIsPicActive(false);
              setIsBasicActive((current) => !current);
              setIsProfessionalActive(false);
            }}
          >
            Basic Detail
          </div>
          <div
            className={
              "updation-nav-element " +
              (isProfessionalActive ? "active-page" : "")
            }
            onClick={() => {
              setPage(1);
              setIsPicActive(false);
              setIsBasicActive(false);
              setIsProfessionalActive((current) => !current);
            }}
          >
            Professional Detail
          </div>
          <div
            className={
              "updation-nav-element " + (isPicActive ? "active-page" : "")
            }
            onClick={() => {
              setPage(2);
              setIsPicActive((current) => !current);
              setIsBasicActive(false);
              setIsProfessionalActive(false);
            }}
          >
            Profile Image
          </div>
        </div>
        <div className='signup-header'>
          {headers[page]}
          <hr />
        </div>

        <div className='body'>
          {display()}
          <br />
        </div>
      </div>
    </div>
  );
}

export default UpdateProfileHome;
