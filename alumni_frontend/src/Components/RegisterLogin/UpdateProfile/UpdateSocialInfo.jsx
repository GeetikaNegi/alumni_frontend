import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

function UpdateSocialInfo() {
  const [cookies] = useCookies("accessToken");

  const [professionProfile, setProfessionalProfile] = useState({
    enrollNo: "",
    occupation: "",
    organisation: "",
    linked_url: "",
    about: "",
  });

  useEffect(() => {
    async function fetchProfile() {
      try {
        const token = cookies.accessToken;
        const enroll = jwtDecode(token).sub;
        professionProfile.enrollNo = enroll;
        const response = await axios.get(
          "http://localhost:8080/api/v1/alumni/get-professional-profile/" +
            enroll
        );
        setProfessionalProfile(response.data.data);
        // onData(response.data.data.profile_pic_name);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProfile();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    professionProfile.enrollNo = jwtDecode(cookies.accessToken).sub;
    console.log(professionProfile);
    const toastId = toast.loading("Loading ...", {
      position: `bottom-right`,
      duration: 4000,
    });
    try {
      const response = await axios.put(
        "http://localhost:8080/api/v1/alumni/update-prof-profile",
        professionProfile,
        {
          headers: {
            Authorization: "Bearer " + cookies.accessToken,
          },
        }
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
            value={professionProfile.occupation}
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
            name='linkedInUrl'
            value={professionProfile.linked_url}
            onChange={(event) => {
              setProfessionalProfile({
                ...professionProfile,
                linkedInUrl: event.target.value,
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
            value={professionProfile.about}
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

export default UpdateSocialInfo;
