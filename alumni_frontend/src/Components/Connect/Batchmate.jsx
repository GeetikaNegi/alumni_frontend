import React from "react";
import "./Batchmate.css";
import logo from "../../Assets/alumniconnlogo.png";
import fb from "../../Assets/facebook.png";
import whatsapp from "../../Assets/whatsap.png";
import x from "../../Assets/X.png";
import telegram from "../../Assets/telegram.png";
import linkedin from "../../Assets/linkedin.png";

function Batchmate() {
  return (
    <div>
      <div className='invite-container gradient-bg '>
        <div className='invite-header '>
          <span>
            <img src={logo} alt='' />
          </span>
          <span>Invite Your Connections to Join IISE Family</span>
        </div>
        <div className='invite-btns   '>
          <a href='https://twitter.com/intent/post?url=https://iisealumniconnect.in&text=Excited%20to%20share%20our%20alumni%20community%20website!%20Join%20us%20for%20networking%20and%20update'>
            <img className='invite-icons' src={x} alt='' />
          </a>
          <a href='https://www.facebook.com/sharer/sharer.php?u=https://iisealumniconnect.in'>
            <img className='invite-icons' src={fb} alt='' />
          </a>
        </div>
        <div className='invite-btns   '>
          <a href='https://t.me/share/url?url=https://iisealumniconnect.in&amp;text=Hey There,Join the IISE Family and stay connected with your fellow alumni and your alma mater'>
            <img className='invite-icons' src={telegram} alt='' />
          </a>
          <a href='https://www.addtoany.com/add_to/whatsapp?linkurl=https://iisealumniconnect.in&linkname=Hey There,Join the IISE Family and stay connected with your fellow alumni and your alma mater'>
            <img className='invite-icons' src={whatsapp} alt='' />
          </a>
          <a href='https://www.linkedin.com/sharing/share-offsite/?url=https://iisealumniconnect.in&text=Excited%20to%20share%20our%20alumni%20community%20website!%20Join%20us%20for%20networking%20and%20updates.'>
            <img className='invite-icons' src={linkedin} alt='' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Batchmate;
