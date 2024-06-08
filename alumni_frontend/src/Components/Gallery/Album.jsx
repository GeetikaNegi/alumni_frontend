import { useState } from "react";
import Gallery from "./Gallery";

import LightGallery from "lightgallery/react";
import "../Gallery/Album.css";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

export function Album({ data }) {
  const [back, setBack] = useState(false);

  const handleBackButton = () => {
    setBack(true);
  };

  if (back) {
    return <Gallery />;
  }

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className='outer-album'>
      <div>
        <button className='back-btn' onClick={handleBackButton}>
          back
        </button>
      </div>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[
          lgThumbnail,
          lgZoom,
          lgAutoplay,
          lgFullscreen,
          lgRotate,
          lgShare,
        ]}
      >
        {data.pic.map((image, index) => {
          return (
            <a href={image} key={index}>
              <img className='album-image' src={image} />
            </a>
          );
        })}
      </LightGallery>
    </div>
  );
}
