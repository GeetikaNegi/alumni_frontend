import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Aboutdrop from './Aboutdrop'
import LoremIpsum from 'react-lorem-ipsum'
import Careerdrop from './Careerdrop'
import Connectdrop from './Connectdrop'
import logoiise from '../../Assets/logoiise.png'

function Navbar() {
  const[aboutdropdown,setAboutdropdown]=useState(false);
  const[connectdropdown,setConnectdropdown]=useState(false);
  const[careerdropdown,setCareerdropdown]=useState(false);
  const[sticky,setSticky]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>
    {
    setSticky(window.scrollY>0)
  };
  window.addEventListener("scroll",handleScroll);
  return()=>window.removeEventListener("scroll",handleScroll);
  });
  return (
    <>
    <img className={`${sticky? "sticky": ""}`} src="https://static.zollege.in/public/college_data/images/appImage/18083_IISEL_APP.jpg?tr=h-250,w-400,c-force" alt='cannotload image'></img>
      <nav className={`${sticky? "sticky": ""}`}>
      <Link  to="/" className="logo">
        <img id='logo' className={`${sticky? "sticky": ""}`} src={logoiise} alt='Sorry'/>
              </Link>
      <ul className='nav-items'>
            <li key={1} className='nav-item'>
              <Link to='/'>Home</Link>
            </li>
            <li key={2} className='nav-item'
            onMouseEnter={()=>setAboutdropdown(true)}
            onMouseLeave={()=>setAboutdropdown(false)}>
              <Link to='/about'>About</Link>
              {aboutdropdown && <Aboutdrop/>}
            </li>
            <li key={3} className='nav-item'
            onMouseEnter={()=>setConnectdropdown(true)}
            onMouseLeave={()=>setConnectdropdown(false)}>
              <Link to='/connect'>Connect</Link>
              {connectdropdown && <Connectdrop/>}
            </li>
            <li key={4} className='nav-item'
            onMouseEnter={()=>setCareerdropdown(true)}
            onMouseLeave={()=>setCareerdropdown(false)}>
              <Link to='/career'>Career</Link>
              {careerdropdown && <Careerdrop/>}
            </li>
            <li key={5} className='nav-item'>
              <Link to='/career'>Gallery</Link>
            </li>
      </ul>
      </nav>
      </>
  )
}

export default Navbar
