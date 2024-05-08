import React from 'react'
import ImageSlide from '../Components/imgSlider/ImageSlide';
import ImgCarousel from '../Components/AlumniCards/ImgCarousel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Aboutus from './Aboutus';


function Home() {
  return (
    <div>
      <ImageSlide/>
      <ImgCarousel/>
    </div>
  )
}

export default Home
