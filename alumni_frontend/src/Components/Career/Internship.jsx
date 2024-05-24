import React, { useState } from "react";
import MyPopup from "../Popup/MyPopup";
import { useCookies } from "react-cookie";
import LoginSign from "./LoginSignup/LoginSign";

function Internship() {
  const [viewProfile, setViewProfile] = useState(true);
  const [cookies, setCookie] = useCookies(["myToken"]);

  const token = cookies.accessToken;

  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP
    setViewProfile(false);
  };
  return (
    <div>
      <h1>INTERNSHIP</h1>
      {token === undefined && (
        <MyPopup component={<LoginSign />} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default Internship;
