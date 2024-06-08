import React from 'react'
import ImageSlide from './LandingPage/imgSlider/ImageSlide';
import ImgCarousel from './LandingPage/AlumniCards/ImgCarousel';
import AlumniVision from './AlumniVision/AlumniVision'
import Cards from './LandingPage/AlumniCards/Cards';


function Home() {
  return (
    <div>
      <ImageSlide/>
      <Cards/>
      <AlumniVision />
    </div>
  )
}

export default Home
