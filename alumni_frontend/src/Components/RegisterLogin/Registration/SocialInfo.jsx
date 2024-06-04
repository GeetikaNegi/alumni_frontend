import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function SocialInfo({ onData, enroll }) {
  console.log(enroll);
  const [professionProfile, setProfessionalProfile] = useState({
    enrollNo: enroll,
    occupation: "",
    organisation: "",
    linked_url: "",
    about: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("subd", professionProfile);
    onData(true);
    const toastId = toast.loading("Loading ...", {
      position: `bottom-right`,
      duration: 4000,
    });
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/alumni/register-prof",
        professionProfile
      );
      console.log("Response", response);
      if (response.data.status.success) {
        toast.success(`This worked: ${response.data.status.message}`, {
          id: toastId,
          position: `bottom-right`,
          duration: 4000,
        });
      } else {
        toast.error(` ${response.data.status.message}`, {
          id: toastId,
          position: `bottom-right`,
          duration: 4000,
        });
      }
    } catch (error) {
      console.log("error");
      toast.error(` Network Error`, {
        id: toastId,
        position: `bottom-right`,
        duration: 4000,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='occupation'>Current Occupation * </label>
          <input
            type='text'
            id='occupation'
            name='occupation'
            value={professionProfile.companyName}
            onChange={(event) => {
              setProfessionalProfile({
                ...professionProfile,
                occupation: event.target.value,
              });
            }}
            required
          />
        </div>

        <div className='form-group '>
          <label htmlFor='organisation'>Current Organisation </label>
          <input
            type='text'
            id='organisation'
            name='organisation'
            value={professionProfile.organisation}
            onChange={(event) => {
              setProfessionalProfile({
                ...professionProfile,
                organisation: event.target.value,
              });
            }}
            required
          />
        </div>

        <div className='form-group horizontal'>
          <label htmlFor='linkedIn'>Your Linked In Url</label>
          <input
            type='text'
            id='linkedIn'
            name='linked_url'
            value={professionProfile.deadline}
            onChange={(event) => {
              setProfessionalProfile({
                ...professionProfile,
                linked_url: event.target.value,
              });
            }}
            required
          />
        </div>

        <div className='description-container'>
          <label htmlFor='my-description'>About Me *</label>
          <textarea
            id='my-description'
            name='about'
            value={professionProfile.description}
            onChange={(event) => {
              setProfessionalProfile({
                ...professionProfile,
                about: event.target.value,
              });
            }}
            required
          ></textarea>
        </div>
        <button type='submit' id='post-job'>
          Save Your Profession Profile
        </button>
      </form>
      <hr />
      <Toaster />
    </div>
  );
}

export default SocialInfo;
