import React, { useState } from "react";
import MyPopup from "../../Popup/MyPopup";
import { useCookies } from "react-cookie";
import LoginSign from "../LoginSignup/LoginSign";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import "./OpportunityForm.css";

function OpportunityForm() {
  const [cookies] = useCookies(["accessToken"]);
  const [viewProfile, setViewProfile] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const token = cookies.accessToken;

  const [opportunity, setOpportunity] = useState({
    type: "", // Default selection
    companyName: "",
    position: "",
    location: "",
    minExperienceYrs: "",
    maxExperienceYrs: "",
    min_package: "",
    max_package: "",
    deadline: "",
    description: "",
    jobResponsibility: "",
    jobEligibility: "",
    companyDescription: "",
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setOpportunity((prevOpportunity) => ({
      ...prevOpportunity,
      [name]: type === "radio" ? value : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    console.log("Form Data:", opportunity); // Log form data to console

    // You can also use formData for further actions like updating state
    // or sending an API call (not included here)
    // console.log(`tkn ${token} `);
    const toastId = toast.loading("Posting Opportunity...", {
      position: `bottom-right`,
      duration: 4000,
    });
    try {
      setOpportunity({});
      const response = await axios.post(
        "http://localhost:8080/api/v1/alumni/post-job",
        opportunity, // 'opportunity' is request body
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // Other headers if needed (e.g., 'Content-Type')
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        toast.success(` ${response.data}`, {
          id: toastId,
          position: `bottom-center`,
          duration: 4000,
        });
      } else {
        toast.error(` ${response.data}`, {
          id: toastId,
          position: `bottom-center`,
          duration: 4000,
        });
      }
    } catch (error) {
      try {
        setErrorMessage(error.response.data.status.errorMessage);
      } catch (error2) {
        setErrorMessage(error.message);
      } finally {
        toast.error(` ${error.code} : ${errorMessage}`, {
          id: toastId,
          position: `bottom-center`,
          duration: 4000,
        });
        setErrorMessage("");
      }
    }

    // Reset form (optional)
  };

  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP
    setViewProfile(false);
  };

  return (
    <div className='opportunity-container'>
      {token === undefined && (
        <MyPopup component={<LoginSign />} onClose={handleClosePopup} />
      )}
      <h2 id='post-header'>Post an Opportunity </h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Opportunity Type:</label>
          <div>
            <input
              type='radio'
              id='job'
              name='type'
              value='internship'
              onChange={handleChange}
            />
            <label htmlFor='job'>Internship</label>
          </div>
          <div>
            <input
              type='radio'
              id='internship'
              name='type'
              value='job'
              onChange={handleChange}
            />
            <label htmlFor='internship'>Job</label>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='companyName'>Company Name *</label>
          <input
            type='text'
            id='companyName'
            name='companyName'
            value={opportunity.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='title'>Title *</label>
          <input
            type='text'
            id='title'
            name='position'
            value={opportunity.position}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group '>
          {" "}
          {/* Added horizontal class */}
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            id='location'
            name='location'
            value={opportunity.location}
            onChange={handleChange}
          />
          <label htmlFor='deadline'>Deadline To Apply</label>
          <input
            type='date'
            id='deadline'
            name='deadline'
            value={opportunity.deadline}
            onChange={handleChange}
          />
        </div>

        <div className='form-group horizontal'>
          {" "}
          {/* Added horizontal class */}
          <label htmlFor='min_exp'>Min Experience (months) </label>
          <input
            type='number'
            id='min_exp'
            name='minExperienceYrs'
            value={opportunity.minExperienceYrs}
            onChange={handleChange}
          />
          <label htmlFor='max_exp'>Max Experience (months)</label>
          <input
            type='number'
            id='max_exp'
            name='maxExperienceYrs'
            value={opportunity.maxExperienceYrs}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group horizontal'>
          {" "}
          {/* Added horizontal class */}
          <label htmlFor='min_package'>Min Salary Package (LPA) </label>
          <input
            type='text'
            id='min_package'
            name='minPackage'
            value={opportunity.minPackage}
            onChange={handleChange}
          />
          <label htmlFor='max_package'>Max Salary Package (LPA)</label>
          <input
            type='text'
            id='max_package'
            name='maxPackage'
            value={opportunity.maxPackage}
            onChange={handleChange}
            required
          />
        </div>

        <div className='description-container'>
          <label htmlFor='job-description'>Job Description *</label>
          <textarea
            id='job-description'
            name='description'
            value={opportunity.description}
            onChange={handleChange}
            required
          ></textarea>
          <label htmlFor='responsibility'>Roles & Responsibilities</label>
          <textarea
            id='responsibility'
            name='jobResponsibility'
            value={opportunity.jobResponsibility}
            onChange={handleChange}
            required
          ></textarea>

          <label htmlFor='eligibility'>Eligibility</label>
          <textarea
            id='eligibility'
            name='jobEligibility'
            value={opportunity.jobEligibility}
            onChange={handleChange}
          ></textarea>
          <label htmlFor='companyDescription'>Company Description</label>

          <textarea
            id='companyDescription'
            name='companyDescription'
            value={opportunity.companyDescription}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type='submit' id='post-job'>
          Save Opportunity
        </button>
      </form>
      <hr />

      <Toaster />
    </div>
  );
}

export default OpportunityForm;
