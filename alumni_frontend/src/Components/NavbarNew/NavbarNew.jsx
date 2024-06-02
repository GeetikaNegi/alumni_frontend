import "./NavbarNew.css";
import { Link, NavLink } from "react-router-dom";
import logoiise from '../../../src/Assets/logoiise.png'
import React,{useEffect, useState} from 'react'
import top from '../../../src/Assets/top.jpg'


export const NavbarNew = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const[sticky,setSticky]=useState(false);
  const[submenu_career,setSubmenu_career]=useState(false);
  const[submenu_about,setSubmenu_about]=useState(false);
  const[submenu_connect,setSubmenu_connect]=useState(false);


  useEffect(()=>{
    const handleScroll=()=>
    {
    setSticky(window.scrollY>0)
  };
  window.addEventListener("scroll",handleScroll);
  return()=>window.removeEventListener("scroll",handleScroll);
  });

  const toggleSubmenu_career=()=>{
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
          <span>
            <NavLink to="/">Home</NavLink>
          </span>
        </li>
        <li>
         <span onClick={toggleSubmenu_about}><NavLink to="/about">About X</NavLink></span>
          <ul id={`${submenu_about? "career_submenu": "abc"}`}>
            <li><NavLink to="/aboutus">About Us</NavLink></li>
            <li><NavLink to="/ourteam">Our Team</NavLink></li>
          </ul>
        </li>
        <li>
        <span onClick={toggleSubmenu_career}><NavLink to="/career">Career X</NavLink></span>
          <ul id={`${submenu_career? "career_submenu": "abc"}`}>
            <li><NavLink to="/jobs">Jobs</NavLink></li>
            <li><NavLink to="/internship">Internship</NavLink></li>
          </ul>
        </li>
        <li>
        <span onClick={toggleSubmenu_connect}><NavLink to="/connect">Connect X</NavLink></span>
          <ul id={`${submenu_connect? "career_submenu": "abc"}`}>
            <li><NavLink to="/alumnidirectory">Year Book</NavLink></li>
            <li><NavLink to="/invitebatchmate">Invite Batchmate</NavLink></li>
          </ul>
        </li>
        <li>
          <span>
            <NavLink to="/gallery">Gallery</NavLink>
          </span>
        </li>
      </ul>
    </nav>
    </>
  );
};
