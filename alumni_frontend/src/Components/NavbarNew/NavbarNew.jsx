import "./NavbarNew.css";
import { Link, NavLink } from "react-router-dom";
import logoiise from "../../../src/Assets/logoiise.png";
import React, { useEffect, useState } from "react";

import { useCookies } from "react-cookie";

import top from "../../../src/Assets/top.jpg";
import LoginSign from "../RegisterLogin/LoginSign";
import MyPopup from "../Popup/MyPopup";import downArrow from "../../../src/Assets/down-arrow.svg";



export const NavbarNew = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [submenu_career, setSubmenu_career] = useState(false);
  const [submenu_about, setSubmenu_about] = useState(false);
  const [submenu_connect, setSubmenu_connect] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(true);  const[toggleMain_menu,setToggleMain_menu]=useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const toggleSubmenu_career = () => {
    setSubmenu_career((current) => !current);
    setSubmenu_about(false);
    setSubmenu_connect(false);
  }

  const toggleSubmenu_about=()=>{
    setSubmenu_about((current) => !current);
    setSubmenu_career(false);
    setSubmenu_connect(false);
  }

  const toggleSubmenu_connect=()=>{
    setSubmenu_connect((current) => !current);
    setSubmenu_about(false);
    setSubmenu_career(false);
  }

  return (
  <>    
      <img className={`${sticky? "sticky": ""}`} id='top-img' src={top} alt='Sorry'></img>
      <nav className={`upr_nav ${sticky? "sticky": ""}`} >
      <Link  to="/" className="logo">
        <img id='logo' className={`${sticky? "sticky": ""}`} src={logoiise} alt='Sorry'/>
              </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`inner_ul ${menuOpen? "open" : ""}`}>
        <li>
          <span onClick={() => setMenuOpen(!menuOpen)}>
            <NavLink to="/">Home</NavLink>
          </span>
        </li>
        <li>
         <span onClick={toggleSubmenu_about}><NavLink to="/">About <img className="downarr" src={downArrow}/></NavLink></span>
          <ul id={`${submenu_about? "career_submenu": "abc"}`} className={`${sticky? "sticky": ""}`} >
            <li><NavLink to="/aboutus" onClick={()=>{toggleSubmenu_about();setMenuOpen(!menuOpen)
            }}>About Us</NavLink></li>
            <li><NavLink to="/ourteam" onClick={toggleSubmenu_about}>Our Team</NavLink></li>
          </ul>
        </li>
        <li>
        <span onClick={toggleSubmenu_career}><NavLink to="/">Career <img className="downarr" src={downArrow}/></NavLink></span>
          <ul id={`${submenu_career? "career_submenu": "abc"}`}>
            <li><NavLink to="/jobs" onClick={toggleSubmenu_career}>Jobs</NavLink></li>
            <li><NavLink to="/internship" onClick={toggleSubmenu_career}>Internship</NavLink></li>
          </ul>
        </li>
        <li>
        <span onClick={toggleSubmenu_connect}><NavLink to="/">Connect <img className="downarr" src={downArrow}/></NavLink></span>
          <ul id={`${submenu_connect? "career_submenu": "abc"}`}>
            <li><NavLink to="/alumnidirectory" onClick={toggleSubmenu_connect}>Year Book</NavLink></li>
            <li><NavLink to="/invitebatchmate" onClick={toggleSubmenu_connect}>Invite Batchmate</NavLink></li>
          </ul>
        </li>
        <li>
          <span onClick={() => setMenuOpen(!menuOpen)}>
            <NavLink to="/gallery">Gallery</NavLink>
          </span>
        </li>
      </ul>
    </nav>
    </>
  );
};
