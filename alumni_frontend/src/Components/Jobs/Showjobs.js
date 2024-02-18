import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Showjobs.css'; // Import your CSS file

function Showjobs() {
  const [jobsData, setJobsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/alumni/all-jobs',
        {
          headers: {Authorization:`Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMjAwNTcwMTQwMDIyIiwiaWF0IjoxNzA4MTg2MTg2LCJleHAiOjE3MDgyMDQxODZ9.g_ewKm2w5apxN8LceuEyup5T_RjtndXCcnJUkVfRsDo`}
        });
        console.log(response.data);
        setJobsData(response.data.data || []); // Assuming jobs are nested under "jobs"
        console.log("This is jobs data:",jobsData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleViewMore = (job) => {
    // Replace with your actual navigation/modal logic
    console.log('View More clicked for:', job);
  };

  return (
    <div className="jobs-table-container">
      {isLoading ? (
        <div className="loading-indicator">Loading jobs...</div>
      ) : error ? (
        <div className="error-message">
          Error fetching jobs: {error.message}
        </div>
      ) : (
        <table>
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
    </div>
  );
}

export default Showjobs;
