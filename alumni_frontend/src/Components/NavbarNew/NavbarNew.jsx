import "./NavbarNew.css";
import { Link, NavLink } from "react-router-dom";
import logoiise from "../../../src/Assets/logoiise.png";
import React, { useEffect, useState } from "react";

import { useCookies } from "react-cookie";

import top from "../../../src/Assets/top.jpg";
import LoginSign from "../RegisterLogin/LoginSign";
import MyPopup from "../Popup/MyPopup";

export const NavbarNew = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [submenu_career, setSubmenu_career] = useState(false);
  const [submenu_about, setSubmenu_about] = useState(false);
  const [submenu_connect, setSubmenu_connect] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(true);

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
  };

  const toggleSubmenu_about = () => {
    setSubmenu_about((current) => !current);
    setSubmenu_career(false);
    setSubmenu_connect(false);
  };

  const toggleSubmenu_connect = () => {
    setSubmenu_connect((current) => !current);
    setSubmenu_about(false);
    setSubmenu_career(false);
  };

  const [cookies, setCookies] = useCookies("accessToken");
  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP
    setShowLogin(false);
  };

  const handleLogout = () => {
    setShowLogout(true);
    setCookies("accessToken", "", { expires: new Date() }, { path: "/" });
  };

  useEffect(() => {
    if (cookies.accessToken) {
      setShowLogout(false);
    } else {
      console.log("in else");
    }
  }, []);

  return (
    <>
      <img
        className={`${sticky ? "sticky" : ""}`}
        id='top-img'
        src={top}
        alt='Sorry'
      ></img>
      <nav className={`upr_nav ${sticky ? "sticky" : ""}`}>
        <Link to='/' className='logo'>
          <img
            id='logo'
            className={`${sticky ? "sticky" : ""}`}
            src={logoiise}
            alt='Sorry'
          />
        </Link>
        <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`inner_ul ${menuOpen ? "open" : ""}`}>
          <li>
            <span>
              <NavLink to='/'>Home</NavLink>
            </span>
          </li>
          <li>
            <span onClick={toggleSubmenu_about}>About ⩛</span>
            <ul id={`${submenu_about ? "career_submenu" : "abc"}`}>
              <li>
                <NavLink to='/aboutus'>About Us</NavLink>
              </li>
              <li>
                <NavLink to='/ourteam'>Our Team</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <span onClick={toggleSubmenu_career}>Career ⩛</span>
            <ul id={`${submenu_career ? "career_submenu" : "abc"}`}>
              <li>
                <NavLink to='/jobs'>Jobs</NavLink>
              </li>
              <li>
                <NavLink to='/internship'>Internship</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <span onClick={toggleSubmenu_connect}>Connect ⩛</span>
            <ul id={`${submenu_connect ? "career_submenu" : "abc"}`}>
              <li>
                <NavLink to='/alumnidirectory'>Year Book</NavLink>
              </li>
              <li>
                <NavLink to='/invitebatchmate'>Invite Batchmate</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <span>
              <NavLink to='/gallery'>Gallery</NavLink>
            </span>
          </li>
          <li>
            {showLogout ? (
              <span
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                Login
              </span>
            ) : (
              <span onClick={handleLogout}>Logout</span>
            )}
          </li>
        </ul>
      </nav>
      {showLogin && (
        <MyPopup component={<LoginSign />} onClose={handleClosePopup} />
      )}
    </>
  );
};
