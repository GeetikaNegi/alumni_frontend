import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming you're using Axios for API calls
import "./PasswordForgot.css";
import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";
const ForgotPassword = () => {
  const [stage, setStage] = useState(1); // Track the current stage (1: email, 2: OTP, 3: reset password)
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // const [cookies] = useCookies(["accessToken"]);
  // // console.log(`access token :${cookies.accessToken}`);
  // const decoded = jwtDecode(cookies.accessToken);
  // const enrollNo = decoded.sub;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/alumni/forgot-pass?email=" + email
      ); // Replace with your API endpoint
      if (response.status === 200) {
        setStage(2);
        setSuccess("OTP sent successfully! Please check your email.");
      } else {
        setError(response.data || "An error occurred.");
      }
    } catch (error) {
      console.error(error);
      setError("An unexpected error occurred.");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/alumni/verify-otp?otp=" + otp
      ); // Replace with your API endpoint
      console.log(response);
      if (response.status === 200) {
        //response.status === 200;
        setStage(3);
        setSuccess("OTP verified successfully!");
      } else {
        setError(response.data || "Invalid OTP.");
      }
    } catch (error) {
      console.error(error.response.data);
      setError(`${error.response.data}`);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/alumni/reset-password",
        { email, newPassword, otp }
      ); // Replace with your API endpoint
      if (response.status === 200) {
        setSuccess("Password reset successfully! You can now log in.");
        // Optionally, redirect to login page here
      } else {
        setError(response.data.message || "An error occurred.");
      }
    } catch (error) {
      console.error(error);
      setError("An unexpected error occurred.");
    }
  };

  useEffect(() => {
    // Clear state on component unmount (optional for better memory management)
    return () => {
      setEmail("");
      setOtp("");
      setNewPassword("");
      setConfirmPassword("");
      setError(null);
      setSuccess(null);
    };
  }, []);

  // ... rest of the component code ...

  const renderContent = () => {
    switch (stage) {
      // ... cases for stage 1 and 2 ...
      case 1:
        return (
          <form onSubmit={handleSubmit} className='form-forgot-password'>
            <label htmlFor='email'>Email Address:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type='submit'>Send OTP</button>
          </form>
        );
      case 2:
        return (
          <form onSubmit={handleVerifyOtp} className='form-forgot-password'>
            <label htmlFor='otp'>Enter OTP:</label>
            <input
              type='number'
              id='otp'
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type='submit'>Verify OTP</button>
          </form>
        );
      case 3:
        return (
          <form
            onSubmit={handleResetPassword}
            className='form-forgot-password flex-direction-col'
          >
            <label htmlFor='new-password' id='newpassword'>
              New Password:
            </label>
            <input
              type='password' // Use type="password" for security
              id='new-password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className={error ? "input-error" : ""} // Add error class if there's an error
            />
            <label htmlFor='confirm-password' id='newpassword'>
              Confirm Password:
            </label>
            <input
              type='password' // Use type="password" for security
              id='confirm-password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={error ? "input-error" : ""} // Add error class if there's an error
            />
            <button type='submit' id='resetPassBtn'>
              Reset Password
            </button>
          </form>
        );
      default:
        return <p>Invalid stage</p>;
    }
  };

  return (
    <div className='forgot-password-container'>
      <h1 className='signup-header'>Forgot Password</h1>
      {renderContent()}
      {error && <p className='error-message'>{error}</p>}
      {success && <p className='success-message'>{success}</p>}
    </div>
  );
};

export default ForgotPassword;
