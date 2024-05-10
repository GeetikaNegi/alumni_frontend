import React from "react";
import "./AlumniVision.css";

export default function AlumniVision() {
  return (
    <div className='alumni-vision-color center-align-txt'>
      <div>
        <h1> Alumni Platform Vision </h1>
        <p className='vision-txt '>
          A platform to bridge the gap of student - alumni interaction driven by
          the ideals and values that shall ensure the upliftment of both present
          and future alumnus.
        </p>
      </div>
      <div className='vision-card-container '>
        <div className='vision-card '>
          <span className='large-no '>500+</span>
          <span className=''>Members</span>
          <button className=' alumni-vision-color'>View Directory</button>
        </div>
        <div className='vision-card'>
          <span className='large-no'>50+</span>
          <span>Batches</span>
          <button className=' alumni-vision-color'>My Batchmates</button>
        </div>
        <div className='vision-card'>
          <span className='large-no'>100+</span>
          <span>Cities</span>
          <button>View Alumni Map</button>
        </div>
        <div className='vision-card'>
          <span className='large-no'>100+</span>
          <span>Cities</span>
          <button className=' alumni-vision-color'>View Profile</button>
        </div>
      </div>
    </div>
  );
}
