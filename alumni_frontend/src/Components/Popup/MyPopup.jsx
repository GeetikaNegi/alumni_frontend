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
      // document.body.classList.remove("body-no-scroll");
    }
  }, [isOpen]); //''dsjdf

  const togglePopup = () => {
    setIsOpen((isOpen) => !isOpen);
    document.body.classList.remove("body-no-scroll");
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
              <span className='component'>{props.component}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyPopup;
