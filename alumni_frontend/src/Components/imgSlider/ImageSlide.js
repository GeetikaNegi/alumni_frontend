import React from 'react'
import { useEffect,useState } from 'react';
import { DataImage } from './ImageData';

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
    }, 10000);
  }, [index]);

  const styles = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Image.img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    Transition: "3s linear",
    zIndex: "-100",
  };
  return (
    <div style={styles}>
    </div>
  )
}

export default ImageSlide
