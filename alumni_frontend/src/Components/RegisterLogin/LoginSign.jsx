import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import MyPopup from "../Popup/MyPopup";
import { useCookies } from "react-cookie";
import axios from "axios";
import ForgotPassword from "../RegisterLogin/PasswordForgot";
import "./LoginSign.css";

function LoginSign() {
  const [cookies, setCookie] = useCookies(["myToken"]);
  const [viewProfile, setViewProfile] = useState(false);
  const [loginBody, setLoginBody] = useState({
    userId: "",
    password: "",
  });
  const navigate = useNavigate();
  // const [action, setAction] = useState("Login");

  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP
    setViewProfile(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const pattern1 = /^^[a-zA-Z0-9_]+[@][a-z]+[/.][a-z]{2,3}|^[6789]\d{9}$"/;
    const pattern2 = /^[6789]\d{9}$/;

    if (pattern1.test(loginBody.userId) || pattern2.test(loginBody.userId)) {
      const toastId = toast.loading("Getting You In !", {
        position: `bottom-right`,
        duration: 4000,
      });
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/alumni/login",
          loginBody
        );

        if (response.data.status.success) {
          toast.success(` ${response.data.status.message}`, {
            id: toastId,
            position: `bottom-right`,
            duration: 4000,
          });
          setCookie(
            "accessToken",
            response.data.data.token,
            { expires: new Date(Date.now() + 1200000) },
            { path: "/" }
          );
          document.body.classList.remove("body-no-scroll");
          window.location.reload();

          // console.log(`token ${response.data.data.token}`);
        } else {
          toast.error(` ${response.data.data}`, {
            id: toastId,
            position: `bottom-right`,
            duration: 4000,
          });
        }
      } catch (error) {
        console.error("Error sending data:", error); // Log any
        toast.error(` Network Error`, {
          id: toastId,
          position: `bottom-right`,
          duration: 4000,
        });
      }
    } else {
      // Invalid input
      // Display an error message or take appropriate action
      toast.error("User Id can only email or mobile", {
        position: "bottom-right",
        duration: 4000,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setLoginBody((prevLoginBody) => ({
      ...prevLoginBody,
      [name]: type === "checkbox" ? value : value,
    }));
  };

  const handleForgotPassword = () => {
    console.log(`clicked`);
    setViewProfile(true);
  };

  return (
    <div className='login-container signup-container '>
      <h1 className='signup-header'>Login To Alumni Connect</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <div>
          <label htmlFor='userId'>Enter User Id :</label>
          <input
            type='text'
            id='userId'
            name='userId'
            placeholder='email or mobile goes here'
            value={loginBody.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Enter Password :</label>
          <input
            type='password'
            id='password'
            name='password'
            value={loginBody.password}
            onChange={handleChange}
            required
          />
        </div>
        <span>
          Forgot Password? 👉{" "}
          <span onClick={handleForgotPassword} id='forgot-pass'>
            Click Here
          </span>{" "}
          👈
        </span>
        <button onSubmit={handleSubmit} id='loginBtn'>
          Login
        </button>
        <span>
          Don't Have an Account? 👉
          <a href='/register' id='register'>
            Create One Here!
          </a>
        </span>
      </form>
      {viewProfile && (
        <MyPopup component={<ForgotPassword />} onClose={handleClosePopup} />
      )}
      <Toaster />
    </div>
  );
}

export default LoginSign;
