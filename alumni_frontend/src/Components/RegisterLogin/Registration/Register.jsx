import React, { useState } from "react";

import SignupInfo from "./SignupInfo";
import SocialInfo from "./SocialInfo";
import ProfilePic from "./ProfilePic";

function Register() {
  const [page, setPage] = useState(0);

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

  const getEnrollFromChild = (enroll) => {
    console.log("this is data ", enroll);
    setEnrollNo(enroll);
  };

  const display = () => {
    if (page === 0) {
      return (
        <SignupInfo
          onData={getSuccessFromChild}
          onEnroll={getEnrollFromChild}
        />
      );
    } else if (page === 1) {
      return <SocialInfo onData={getSuccessFromChild} enroll={enrollNo} />;
    } else {
      return <ProfilePic enroll={enrollNo} />;
    } //..
  };

  return (
    <div>
      <div className='signup-container'>
        <h1 className='signup-header'>
          <u>Alumni Registration</u>
        </h1>
        <div className='signup-header'>
          {headers[page]}
          <hr />
        </div>

        <div className='body'>
          {display()}
          <br />
        </div>
        <div className='footer'>
          <div className='progressbar'>
            <div
              style={{
                width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
              }}
            ></div>
          </div>
          <button
            disabled={!showNext}
            onClick={() => {
              setPage((cur) => cur + 1);
              setShowNext(false);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
