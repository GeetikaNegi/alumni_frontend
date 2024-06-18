import "./NavbarNew.css";
import { Link, NavLink } from "react-router-dom";
import logoiise from "../../../src/Assets/logoiise.png";
import React, { useEffect, useState, useRef } from "react";
import top from "../../../src/Assets/top.jpg";
import downArrow from "../../../src/Assets/down-arrow.svg";
import LoginSign from "../RegisterLogin/LoginSign";
import MyPopup from "../Popup/MyPopup";

import { useCookies } from "react-cookie";

export const NavbarNew = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [submenu_career, setSubmenu_career] = useState(false);
  const [submenu_about, setSubmenu_about] = useState(false);
  const [submenu_connect, setSubmenu_connect] = useState(false);
  const menuRef = useRef(null); // Create a ref for the menu container

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setSubmenu_career(false);
        setSubmenu_about(false);
        setSubmenu_connect(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Use 'mousedown' for better compatibility

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array ensures useEffect runs only once

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
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(true);
  const [toggleMain_menu, setToggleMain_menu] = useState(false);

  const [cookies, setCookies] = useCookies("accessToken");
  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP
    setShowLogin(false);
  };
  const handleLogout = () => {
    setShowLogout(true);
    setCookies("accessToken", "", { expires: new Date() }, { path: "/" });
    window.location.reload();
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
      />
      <nav className={`upr_nav ${sticky ? "sticky" : ""}`} ref={menuRef}>
        {" "}
        {/* Pass ref to the menu container */}
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
            <span onClick={() => setMenuOpen(!menuOpen)}>
              <NavLink to='/'>Home</NavLink>
            </span>
          </li>
          <li>
            <span onClick={toggleSubmenu_about}>
              <NavLink>
                About <img className='downarr' src={downArrow} />
              </NavLink>
            </span>
            <ul id={`${submenu_about ? "career_submenu" : "abc"}`}>
              <li>
                <NavLink
                  to='/aboutus'
                  onClick={() => {
                    toggleSubmenu_about();
                    setMenuOpen(false); // Close main menu on sub-item click
                  }}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/ourteam'
                  onClick={() => {
                    toggleSubmenu_about();
                    setMenuOpen(false);
                  }}
                >
                  Our Team
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <span onClick={toggleSubmenu_career}>
              <NavLink>
                Career <img className='downarr' src={downArrow} />
              </NavLink>
            </span>
            <ul id={`${submenu_career ? "career_submenu" : "abc"}`}>
              <li>
                <NavLink
                  to='/jobs'
                  onClick={() => {
                    toggleSubmenu_career();
                    setMenuOpen(false);
                  }}
                >
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/internship'
                  onClick={() => {
                    toggleSubmenu_career();
                    setMenuOpen(false);
                  }}
                >
                  Internship
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <span onClick={toggleSubmenu_connect}>
              <NavLink to='/'>
                Connect <img className='downarr' src={downArrow} />
              </NavLink>
            </span>
            <ul id={`${submenu_connect ? "career_submenu" : "abc"}`}>
              <li>
                <NavLink
                  to='/alumnidirectory'
                  onClick={() => {
                    toggleSubmenu_connect();
                    setMenuOpen(false);
                  }}
                >
                  Year Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/invitebatchmate'
                  onClick={() => {
                    toggleSubmenu_connect();
                    setMenuOpen(false);
                  }}
                >
                  Invite Batchmate
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <span onClick={() => setMenuOpen(!menuOpen)}>
              <NavLink to='/events'>Events</NavLink>
            </span>
          </li>
          <li>
            <span onClick={() => setMenuOpen(!menuOpen)}>
              <NavLink to='/gallery'>Gallery</NavLink>
            </span>
          </li>
          <li>
            <span onClick={() => setMenuOpen(!menuOpen)}>
              <NavLink to='/'>Login</NavLink>
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
