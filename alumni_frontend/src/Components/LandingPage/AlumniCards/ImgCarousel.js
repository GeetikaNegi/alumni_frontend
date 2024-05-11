import React from 'react'
import Cards from './Cards'
import './ImgCarousel.css'

function ImgCarousel() {


  let box=document.querySelector('.pro-container');


  const btnpressprev=()=>{
    let width=box.clientWidth;
    box.scrollLeft=box.scrollLeft-width;
  }

  const btnpressnext=()=>{
    let width=box.clientWidth;
    box.scrollLeft=box.scrollLeft+width;
  }


  return (
    <div className='product-carousel'> 
      <button className='pre-btn' onClick={btnpressprev}><p>&lt;</p></button>
      <button className='next-btn'onClick={btnpressnext}><p>&gt;</p></button>
      <div className='pro-container'>
        <Cards cardno='1'/>
        <Cards cardno='2'/>
        <Cards cardno='3'/>
        <Cards cardno='4'/>
        <Cards cardno='5'/>
        <Cards cardno='6'/>
        <Cards cardno='7'/>
        <Cards cardno='8'/>
        <Cards cardno='9'/>
        <Cards cardno='10'/>
      </div>
    </div>
  )
}

export default ImgCarousel
