import React from "react";
import { useState, useEffect } from "react";
import "./LoginSign.css";
import closeBtn from "../../../Assets/svgs/cancel.svg";

const LoginSignUpPop = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [isOpen]);

  const togglePopup = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const [action, setAction] = useState("Login");

  return (
    <div>
      {isOpen && (
        <>
          <div className='overlay' onClick={togglePopup}></div>
          <div className='popup'>
            <div className='popup-inner'>
              <div className='close_btn'>
                <img
                  src={closeBtn}
                  alt='close'
                  className='thick-stroke-svg'
                  onClick={togglePopup}
                />
              </div>
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
                          <input
                            type='password'
                            placeholder='Confirm Password'
                          />
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
                      className={
                        action === "Sign Up" ? "submit-gray" : "submit"
                      }
                      onClick={() => {
                        setAction("Login");
                      }}
                    >
                      Login
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginSignUpPop;
