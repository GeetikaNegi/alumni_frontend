import React from "react";
import "./ViewMore.css";
const ViewMore = (props) => {
  console.log(props.data);
  return (
    <div className='viewmore-container'>
      <div className='job-header'>
        <div className='job-header-inner'>
          <h1 id='job-postition'>{props.data.position}</h1>
          <span id='job-subheader'>
            <span>{props.data.company_name}</span>
            <span>{props.data.location}</span>
          </span>
          <span>DEADLINE</span>
        </div>

        <div className='job-header-inner'>
          <button>Apply</button>
        </div>
      </div>
      <hr />
      <div className='job-details'>
        <h2>Job Details</h2>
        <h3>Job Description</h3>
        <span>JOB DESCRIPTION</span>
        <h3>Company Description</h3>
        <span>{props.data.description}</span>
        <h3>Approx Salary</h3>
        <span>
          {props.data.min_package} LPA - {props.data.max_package} LPA
        </span>
      </div>

      {/* <span>
        <span>{props.data.position}</span>
        <span>{props.data.location}</span>
      </span>
      <span id='job-description'>{props.data.description}</span>
      <span className='job-location'>img and {props.data.location}</span> */}
    </div>
  );
};

export default ViewMore;
