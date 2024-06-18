import React, { useState, useEffect } from "react";
import axios from "axios";
import MyPopup from "../../Popup/MyPopup";
import ViewMore from "./ViewMore";
import "./Showjobs.css"; // Import your CSS file
import LoginSign from "../../RegisterLogin/LoginSign";
import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";
import { toast, Toaster } from "react-hot-toast";
let jj = {};
function Showjobs() {
  const [jobsData, setJobsData] = useState([]);
  const [viewMoreJob, setViewMoreJob] = useState({});
  const [viewJob, setViewJob] = useState({});
  const [viewProfile, setViewProfile] = useState(false);
  const [cookies] = useCookies(["accessToken"]);
  // console.log(`access token :${cookies.accessToken}`);

  // console.log(`this is decodd:${decoded.sub}`);

  const handleViewMore = (job) => {
    // Replace with your actual navigation/modal logic

    setViewJob(job);
    setViewProfile((current) => !current);
  };

  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP

    setViewProfile(false);
  };

  useEffect(() => {
    const token = cookies.accessToken;
    const fetchData = async () => {
      if (token !== undefined) {
        const decoded = jwtDecode(cookies.accessToken);
        try {
          const response = await axios.get(
            "http://localhost:8080/api/v1/alumni/all-jobs",
            {
              headers: {
                Authorization: `Bearer ${cookies.accessToken}`,
              },
            }
          );
          setJobsData(response.data.data || []);
        } catch (error) {
          console.log(error);
          toast.error(`Error Loading Jobs ${error.message}`, {
            position: "bottom-right",
            duration: 4000,
          });
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className='jobs-table-container'>
      <div className='post-job-container'>
        <span>
          IISE Group Of Institutions has a huge pool of talent in almost all the
          fields and provides an opportunity to the organizations to select best
          minds out of this vast pool. I request all the Job providers to kindly
          share the job and internship opportunity in this portal. For posting
          the job opportunity please write to us on -
          <span id='emailid-text'> iisecollege@rediffmail.com </span>
          For any other query please contact Coordinator, Career Guidance and
          Training Cell on mob - +91-7236002222
        </span>
        <span>
          <a href='/post-opportunity' id='register'>
            <button id='post-jobBtn'>post an opportunity</button>
          </a>
        </span>
      </div>
      <br />
      {cookies.accessToken === undefined && (
        <MyPopup component={<LoginSign />} onClose={handleClosePopup} />
      )}
      {
        <table className='jobs-table'>
          <thead>
            <tr>
              <th>Position</th>
              <th>Company Name</th>
              <th>Location</th>
              <th>Package</th>
              <th>View More</th>
            </tr>
          </thead>
          <tbody>
            {jobsData.map((job) => (
              <tr key={job.job_id}>
                <td>{job.position}</td>
                <td>{job.company_name}</td>
                <td>{job.location}</td>
                <td>
                  {job.min_package}-{job.max_package} LPA
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleViewMore(job);
                    }}
                  >
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
      {viewProfile && (
        <MyPopup
          component={<ViewMore data={viewJob} />}
          onClose={handleClosePopup}
        />
      )}
      <Toaster />
    </div>
  );
}

export default Showjobs;
