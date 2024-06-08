import React from 'react'
import { useEffect,useState } from 'react';
import { DataImage } from './ImageData';
import './ImageSlide.css'

function ImageSlide() {
    const [index, setIndex] = useState(0);
  let Image = DataImage[index];

  useEffect(() => {
    setTimeout(() => {
      if (index < DataImage.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 5000);
  }, [index]);

  const styles = {
    backgroundImage: `url(${Image.img})`,
  };

  return (
    <img src={Image.img} className='Image'  width="98%">
    </img>
  )
}

export default ImageSlide
