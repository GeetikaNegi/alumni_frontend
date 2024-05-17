import React from "react";
import { useState, useEffect } from "react";
import "./MyPopup.css";
import closeBtn from "../../Assets/svgs/cancel.svg";

const MyPopup = (props) => {
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
    props.onClose();
  };

  return (
    <div>
      {isOpen && (
        <>
          <div className='overlay' onClick={togglePopup}></div>
          <div className='popup'>
            <div className='popup-inner'>
              <span className='close_btn'>
                <img
                  src={closeBtn}
                  alt='close'
                  className='thick-stroke-svg'
                  onClick={togglePopup}
                />
              </span>
              {props.component}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyPopup;
