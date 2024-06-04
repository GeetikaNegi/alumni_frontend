import React, { useEffect, useState } from "react";

import { useCookies } from "react-cookie";

import UpdateSignupInfo from "./UpdateSignupInfo";
import SocialInfo from "./UpdateSocialInfo";
import UpdateProfilePic from "./UpdateProfilePic";
import { jwtDecode } from "jwt-decode";

function UpdateProfileHome() {
  const [page, setPage] = useState(0);
  const [isBasicActive, setIsBasicActive] = useState(true);
  const [isProfessionalActive, setIsProfessionalActive] = useState(false);
  const [isPicActive, setIsPicActive] = useState(false);
  const [enroll, setEnroll] = useState("");
  const headers = [
    "Academic Details",
    "Professional Details",
    "Profile Picture",
  ];

  const getPicNameFromChild = (data) => {
    console.log(data);
    setEnroll(data);
  };

  const display = () => {
    if (page === 0) {
      return <UpdateSignupInfo onData={getPicNameFromChild} />;
    } else if (page === 1) {
      return <SocialInfo />;
    } else {
      return <UpdateProfilePic data={enroll} />;
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
