import React from "react";
import "./Ourteam.css";
const RIghtPanel = (props) => {
  return (
    <div className='team-container'>
      <div className='right-inner-panel'>
        <span>{props.items.name}</span>
        <img src={props.items.image} alt='error' />
        <span>{props.items.desig}</span>
        <span>{props.items.dept}</span>
        <span className='display-flex'>
          <a
            href={props.items.link2}
            target='_blank'
            rel='noopener noreferrer'
            id='contact'
          >
            <img
              src={props.items.whatsapp_label}
              alt='Whatsapp'
              id='contact-img'
            />
          </a>
          <a
            href={props.items.link1}
            target='_blank'
            rel='noopener noreferrer'
            id='contact'
          >
            <img src={props.items.phone_label} alt='call' id='contact-img' />
          </a>
        </span>
      </div>
    </div>
  );
};

export default RIghtPanel;
