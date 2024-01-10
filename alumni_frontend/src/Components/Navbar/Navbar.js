import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Aboutdrop from './Aboutdrop'
import LoremIpsum from 'react-lorem-ipsum'
import Careerdrop from './Careerdrop'
import Connectdrop from './Connectdrop'

function Navbar() {
  const[dropdown,setDropdown]=useState(false);
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
    <img className={`${sticky? "sticky": ""}`} src="https://static.zollege.in/public/college_data/images/appImage/18083_IISEL_APP.jpg?tr=h-250,w-400,c-force" alt='Sorry'></img>
      <nav className={`${sticky? "sticky": ""}`}>
      <Link  to="/" className="logo">
        <img id='logo' className={`${sticky? "sticky": ""}`} src='https://scontent.fslv1-4.fna.fbcdn.net/v/t39.30808-6/303138733_479753647493592_7577112457423299985_n.png?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=AazoiQPpnEgAX9oScFW&_nc_ht=scontent.fslv1-4.fna&oh=00_AfBhYxsYCZfA_BPni20wpAeYNw9x-L7LqSqQrh8BdsF8kw&oe=65A294FF' alt='Sorry'/>
              </Link>
      <ul className='nav-items'>
            <li key={1} className='nav-item'>
              <Link to='/'>Home</Link>
            </li>
            <li key={2} className='nav-item'
            onMouseEnter={()=>setDropdown(true)}
            onMouseLeave={()=>setDropdown(false)}>
              <Link to='/about'>About</Link>
              {dropdown && <Aboutdrop/>}
            </li>
            <li key={3} className='nav-item'>
              <Link to='/connect'>Connect</Link>
            </li>
            <li key={4} className='nav-item'>
              <Link to='/career'>Career</Link>
            </li>
            <li key={5} className='nav-item'>
              <Link to='/career'>Gallery</Link>
            </li>
      </ul>
      </nav>
      <p>
        <LoremIpsum/>
        <LoremIpsum/>
        <LoremIpsum/>
        <LoremIpsum/>
        <LoremIpsum/>
        <LoremIpsum/>
        <LoremIpsum/>
        <LoremIpsum/>
        <LoremIpsum/>
        <LoremIpsum/>
        <LoremIpsum/>
        <LoremIpsum/>
      </p>
      </>
  )
}

export default Navbar
