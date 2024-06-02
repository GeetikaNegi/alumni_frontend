import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import "./ViewMore.css";
import Whatsapp from "../../../Assets/whatsap.png";
import locationSvg from "../../../Assets/svgs/location.svg";
import deadlineSvg from "../../../Assets/svgs/deadline.svg";
import toast, { Toaster } from "react-hot-toast";

const ViewMore = (props) => {
  console.log(props.data);
  const [cookies] = useCookies(["accessToken"]);
  const [alumniProfile, setAlumniProfile] = useState([]);
  // const [collegeName, setCollegeName] = useState("");
  useEffect(() => {
    const token = cookies.accessToken;
    const fetchData = async () => {
      if (token !== undefined) {
        const decoded = jwtDecode(cookies.accessToken);
        console.log(`decoded ${decoded}`);
        console.log(`this is enroll : ${props.data.alumni_enroll_no}`);

        try {
          const response = await axios.get(
            "http://localhost:8080/api/v1/alumni/get-alumniforjob",
            {
              params: {
                enroll_no: props.data.alumni_enroll_no,
              },
              headers: {
                Authorization: `Bearer ${cookies.accessToken}`,
              },
            }
          );
          console.log(response.data);
          setAlumniProfile(response.data.data || []); // Assuming jobs are nested under "jobs"
          console.log("This is jobs data:", alumniProfile);
        } catch (error) {
          console.log(error);
        }
      } else console.log("in islse");
    };

    fetchData();
  }, []);

  let collegeName = "";
  const joinYear = alumniProfile.dateOfJoining || "join yearyyyyy";
  console.log(
    `tyep of ${joinYear} : ${typeof alumniProfile.dateOfJoining} ${joinYear.substring(
      0,
      5
    )}`
  );
  const batch = joinYear.substring(0, 4);
  // console.log(`sub : ${joinYear.substring(0, 5)}`);

  switch (alumniProfile.collegeNo) {
    case 0:
      collegeName = "IISE";
      break;
    case 1:
      collegeName = "IISE LU";
      break;

    case 2:
      collegeName = "FIeMITS";
      break;
    default:
      collegeName = null;
      break;
  }

  return (
    <div className='viewmore-container'>
      <div className='job-header'>
        <div className='job-header-inner'>
          <h1 id='job-position'>{props.data.position}</h1>
          <span id='job-subheader'>
            <span>{props.data.company_name}</span>

            <span>
              <span>
                <img src={locationSvg} alt='' id='alumni-details-svg' />
              </span>
              <span>{props.data.location}</span>
            </span>
          </span>
          <span>
            Deadline : <b>{props.data.deadline}</b>
            <img src={deadlineSvg} alt='' id='alumni-details-svg' />
          </span>
        </div>

        <div className='job-header-inner'>
          <button>Apply</button>
        </div>
      </div>
      <hr />
      <div className='job-details'>
        <h2>Job Details</h2>
        <h3>Job Description</h3>
        <span>{props.data.description}</span>
        <h3>Job Roles & Responsibilities</h3>
        <span>{props.data.job_responsibility}</span>

        <h3>Eligibility</h3>
        <span>{props.data.job_eligibility}</span>
        <h3>Approx Salary</h3>
        <span>
          {props.data.min_package} LPA - {props.data.max_package} LPA
        </span>
        <h3>Company Description</h3>
        <span>{props.data.description}</span>
      </div>

      <div className='alumni-details'>
        <span>Posted By</span>
        <span id='alumni-details-name'>
          {alumniProfile.fname} {alumniProfile.lname}
        </span>
        <span>
          <b>{collegeName}</b>
        </span>
        <span>
          Batch of <b>{batch}</b>
        </span>

        <span className='display-flex'>
          <span>Contact Recruiter 👉</span>
          <a
            href={`https://wa.me/${alumniProfile.mobileNo}`}
            target='_blank'
            rel='noopener noreferrer'
            id='contact'
          >
            <img src={Whatsapp} alt='Whatsapp' id='whatsapp-img' />
          </a>
        </span>
      </div>
    </div>
  );
};

export default ViewMore;
