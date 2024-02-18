import React, { useState } from 'react';
import './JobForm.css'
import axios from 'axios';

const JobForm = () => {
  const [formData, setFormData] = useState({
    jobPosition: '',
    companyName: '',
    minExperience: '',
    maxExperience: '',
    location: '',
    minSalary: '',
    maxSalary: '',
    jobDescription: '',
  });

  const experienceOptions = [
    { value: '0', label: '0 year' },
    { value: '1', label: '1 year' },
    { value: '2', label: '2+ years' },
    { value: '5', label: '5+ years' },
    // ...add more experience options as needed
    { value: '10', label: '10+ years' },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/alumni/post-job',formData);

      if (response.status === 200) {
        console.log('Job posting successfully created:', response.data);
        // Clear the form or display a success message
        setFormData({
          jobPosition: '',
          companyName: '',
          minExperience: '',
          maxExperience: '',
          location: '',
          minSalary: '',
          maxSalary: '',
          jobDescription: '',
      })
    }
       else {
        console.error('Error posting job:', response.statusText);
        // Handle API errors gracefully (e.g., display an error message)
      }
    } catch (error) {
      console.error('Error sending request:', error);
      // Handle network or other errors (e.g., display a generic error message)
    }
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <h2>Job Posting Form</h2>

      <div className="form-group">
      <label htmlFor="jobPosition">Job Position:</label>
      <input
        type="text"
        id="jobPosition"
        name="jobPosition"
        value={formData.jobPosition}
        onChange={handleInputChange}
        required
      />
      </div>

      <div className="form-group">
      <label htmlFor="companyName">Company Name:</label>
      <input
        type="text"
        id="companyName"
        name="companyName"
        value={formData.companyName}
        onChange={handleInputChange}
        required
      />
      </div>

      <div className="form-group">
      <label htmlFor="minExperience">Minimum Experience (Years):</label>
      <select
        id="minExperience"
        name="minExperience"
        value={formData.minExperience}
        onChange={handleInputChange}
        required
      >
        {experienceOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      </div>

      <div className="form-group">
      <label htmlFor="maxExperience">Maximum Experience (Years):</label>
      <select
        id="maxExperience"
        name="maxExperience"
        value={formData.maxExperience}
        onChange={handleInputChange}
      >
        {experienceOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      </div>

      <div className="form-group">
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        required
      />
      </div>

      <div className="form-group">
      <label htmlFor="minSalary">Minimum Salary Package (LPA):</label>
      <input
        type="number"
        id="minSalary"
        name="minSalary"
        value={formData.minSalary}
        onChange={handleInputChange}
        required
      />
      </div>

      <div className="form-group">
      <label htmlFor="maxSalary">Maximum Salary Package (LPA):</label>
      <input
        type="number"
        id="maxSalary"
        name="maxSalary"
        value={formData.maxSalary}
        onChange={handleInputChange}
        required
      />
      </div>

      <div className="form-group">
      <label htmlFor="jobDescription">Job Description:</label>
      <textarea
        id="jobDescription"
        name="jobDescription"
        value={formData.jobDescription}
        onChange={handleInputChange}
        required
      />
      </div>

      <div className="form-group">
      <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
};

export default JobForm;
