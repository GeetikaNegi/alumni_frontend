import React from 'react'
import ImageSlide from '../Components/imgSlider/ImageSlide';
import ImgCarousel from '../Components/AlumniCards/ImgCarousel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Aboutus from './Aboutus';
import AlumniVision from './AlumniVision/AlumniVision';


function Home() {
  return (
    <div>
      <ImageSlide/>
      <ImgCarousel/>
      <AlumniVision />
    </div>
  )
}

export default Home
