import React, { useState } from "react";
import "./LoginSign.css";

function LoginSign() {
  const [action, setAction] = useState("Login");
  return (
    <form>
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
        </div>
        <div className='inputs'>
          {action === "Login" ? (
            <div className='innput'>
              <div className='input'>
                <input type='email' placeholder='Email' />
              </div>
              <div className='input'>
                <input type='password' placeholder='Password' />
              </div>
              <div className='forget-pass'>
                Lost Password? <span>Click Here!</span>
              </div>
            </div>
          ) : (
            <div className='innput gap-1vw'>
              <div className='input'>
                <input type='text' placeholder='First Name' />
              </div>
              <div className='input'>
                <input type='text' placeholder='Last Name' />
              </div>
              <div className='input'>
                <input type='email' placeholder='Email' />
              </div>
              <div className='input'>
                <select name='cars' className='list'>
                  <option value='volvo' selected disabled>
                    College
                  </option>
                  <option value='saab'>IISE</option>
                  <option value='mercedes'>FIEMITS</option>
                  <option value='audi'>IISE LU</option>
                </select>
              </div>
              <div className='input'>
                <input type='text' placeholder='College' />
              </div>
              <div className='input'>
                <input type='password' placeholder='Password' />
              </div>
              <div className='input'>
                <input type='password' placeholder='Confirm Password' />
              </div>
            </div>
          )}
        </div>
        <div className='submit-container'>
          <div
            className={action === "Login" ? "submit-gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit-gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginSign;
