import React, { useState } from 'react'
import { gallery } from './GalData'
import '../Gallery/Gallery.css'
import { Album } from './Album';


function Gallery() {
  const[toGallery,setToGallery]=useState(false);
  const[eventId,setEventId]=useState(null);

  const handleClickOnAlbum = (eventId) => {
    console.log(`EventIdPasses: ${eventId}`)
    const index=gallery.find((event)=> event.id === eventId);
    console.log(`index: ${index}`)
    setEventId(index);
    setToGallery(true);
  };

  console.log(`eventid; ${eventId}`)

  if(toGallery)
    {
      return eventId && <Album data={eventId}/>
    }


  return (
    <div className="div-container">
      <div className="upper-div">
          <span>Picture Gallery</span>
          <span>IISE Group of Institutions</span>
      </div>
      <div className="pic-container">
        {
          gallery.map((pic,index)=>(
            <div
            key={index}
            className='inner-container'
            onClick={()=>handleClickOnAlbum(pic.id)}
            >
              <img src={pic.img}/>
              <span className='title'>{pic.title}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Gallery
