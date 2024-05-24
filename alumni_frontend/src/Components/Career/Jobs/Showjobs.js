import React, { useState, useEffect } from "react";
import axios from "axios";
import MyPopup from "../../Popup/MyPopup";
import ViewMore from "./ViewMore";
import "./Showjobs.css"; // Import your CSS file
import LoginSign from "../LoginSignup/LoginSign";
import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";
let jj = {};
function Showjobs() {
  const [jobsData, setJobsData] = useState([]);
  const [viewMoreJob, setViewMoreJob] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewProfile, setViewProfile] = useState(false);
  const [cookies] = useCookies(["accessToken"]);
  // console.log(`access token :${cookies.accessToken}`);

  // console.log(`this is decodd:${decoded.sub}`);

  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP
    setViewProfile(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (cookies.accessToken !== undefined) {
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
          console.log(response.data);
          setJobsData(response.data.data || []); // Assuming jobs are nested under "jobs"
          console.log("This is jobs data:", jobsData);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      } else console.log("in islse");
    };

    fetchData();
  }, []);

  const handleViewMore = (job) => {
    // Replace with your actual navigation/modal logic

    jj = job;
    console.log("View More clicked for:", job);
    setViewProfile((current) => !current);
  };

  return (
    <div className='jobs-table-container'>
      {isLoading ? (
        <div className='loading-indicator'>Loading jobs...</div>
      ) : error ? (
        <div className='error-message'>
          Error fetching jobs: {error.message}
        </div>
      ) : (
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
                <td>{job.min_package}</td>
                <td>
                  <button onClick={() => handleViewMore(job)}>View More</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {viewProfile && (
        <MyPopup
          component={<ViewMore data={jj} />}
          onClose={handleClosePopup}
        />
      )}
      {cookies.accessToken === undefined && (
        <MyPopup component={<LoginSign />} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default Showjobs;
