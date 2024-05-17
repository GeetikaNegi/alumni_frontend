import React from 'react'
import ImageSlide from './LandingPage/imgSlider/ImageSlide';
import ImgCarousel from './LandingPage/AlumniCards/ImgCarousel';
import AlumniVision from './AlumniVision/AlumniVision'


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
