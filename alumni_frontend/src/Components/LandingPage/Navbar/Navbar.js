import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Aboutdrop from './Aboutdrop'
import Careerdrop from './Careerdrop'
import Connectdrop from './Connectdrop'
import logoiise from '../../../Assets/logoiise.png'
import top from '../../../Assets/top.jpg'

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
    <img className={`${sticky? "sticky": ""}`} src={top} alt='Sorry'></img>
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
              <Link to='/'>About</Link>
              {aboutdropdown && <Aboutdrop/>}
            </li>
            <li key={3} className='nav-item'
            onMouseEnter={()=>setConnectdropdown(true)}
            onMouseLeave={()=>setConnectdropdown(false)}>
              <Link to='/'>Connect</Link>
              {connectdropdown && <Connectdrop/>}
            </li>
            <li key={4} className='nav-item'
            onMouseEnter={()=>setCareerdropdown(true)}
            onMouseLeave={()=>setCareerdropdown(false)}>
              <Link to='/'>Career</Link>
              {careerdropdown && <Careerdrop/>}
            </li>
            <li key={5} className='nav-item'>
              <Link to='/gallery'>Gallery</Link>
            </li>
      </ul>
      </nav>
      </>
  )
}

export default Navbar
