import React from 'react'
import ImageSlide from './LandingPage/imgSlider/ImageSlide';
import ImgCarousel from './LandingPage/AlumniCards/ImgCarousel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Home() {
  return (
    <div>
      <ImageSlide/>
      <ImgCarousel/>
    </div>
  )
}

export default Home
