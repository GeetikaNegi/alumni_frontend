import React from "react";
import faculty1 from "../../../Assets/team/DEEPTI GUPTA.jpg";
import phone from "../../../Assets/phone.png";
import email from "../../../Assets/svgs/email.svg";
import address from "../../../Assets/svgs/address.svg";
import action from "../../../Assets/svgs/action.svg";
import contact from "../../../Assets/svgs/contact.svg";
import preference from "../../../Assets/svgs/preferences.svg";
import work from "../../../Assets/svgs/work.svg";
import linkdin from "../../../Assets/linkedin.png";
import "./AlumniProfile.css";
const AlumniProfile = () => {
  const Team_data = {
    name: `Arshad Shrivastava ANAND`,
    image: faculty1,
    collegeName: `FIeMITS`,
    courseName: `Master's In Computer Applications`,
    batch: `2022`,
    enrollmentNo: `1033`,
    email: `chandrawanshe@gmail.com`,
    mobile: `9984981991`,
    linkedin: `https://linkedin.com/in/akvghost`,
    address: `Banaras hindu university `,
    city: `Varanasi`,
    pincode: `234422`,
    jobProfile: `Jr. Software Developer`,
    companyName: `Amazon`,
    startDate: `Aug 2018`,
    endDate: `Till Now`,
  };
  const handleDelete = () => {
    const collegeId = prompt(`Are You Sure\nEnter Your College Id To Proceed`);
    console.log(collegeId);
  };
  return (
    <div>
      <div className='profile-card '>
        <div className='alumniprofile-card  ' id='basic-detail'>
          <span>
            <img src={Team_data.image} id='profile-pic' alt='error' />
          </span>
          <span>{Team_data.name}</span>

          <span>{Team_data.collegeName}</span>

          <span>{Team_data.courseName}</span>
          <span>Batch of {Team_data.batch}</span>
          <span>College ID : {Team_data.enrollmentNo}</span>
        </div>
        <div className=' alumniprofile-card alumniprofile-card-font'>
          <span className='profilecard-header'>
            <span>
              <img className='header-icon' src={contact} alt='img' />
            </span>
            Contact Information
          </span>
          <span>
            <span>
              <img className='icon' src={email} alt='linked' />
            </span>{" "}
            <a href={`mailto:${Team_data.email}`}>{Team_data.email}</a>
          </span>

          <span>
            <span>
              <img className='icon' src={phone} alt='' />
            </span>
            {` `}
            {Team_data.mobile}
          </span>

          <span>
            <span>
              <img className='icon' src={linkdin} alt='linked' />
            </span>{" "}
            <a href={Team_data.linkedin} target='_blank' rel='noreferrer'>
              {Team_data.linkedin}
            </a>
          </span>
          <span>
            <span>
              <img className='icon' src={address} alt='linked' />
            </span>{" "}
            <span id='address'>
              {Team_data.address},{Team_data.city},{Team_data.pincode}
            </span>
          </span>
        </div>
        <div className=' alumniprofile-card alumniprofile-card-font '>
          <span className='profilecard-header'>
            <span>
              <img className='header-icon' src={work} alt='img' />
            </span>
            Work Experience
          </span>
          <span id='profile-heading1'>{Team_data.jobProfile}</span>
          <span id='profile-heading2'>{Team_data.companyName}</span>
          <span id='profile-heading3'>
            {Team_data.startDate} to {Team_data.endDate}
          </span>
        </div>
        <div className=' alumniprofile-card alumniprofile-card-font'>
          <span className='profilecard-header'>
            <span>
              <img className='header-icon' src={preference} alt='img' />
            </span>
            Preferences
          </span>
          <span id='profile-heading1'>Job Profile</span>
          <span>
            {Team_data.jobProfile},{Team_data.jobProfile},{Team_data.jobProfile}
            ,{Team_data.jobProfile},{Team_data.jobProfile},
            {Team_data.jobProfile}, .
          </span>
          <span id='profile-heading1'>City</span>
          <span>{Team_data.city}</span>
        </div>
        <div className=' alumniprofile-card alumniprofile-card-font'>
          <span className='profilecard-header'>
            <span>
              <img className='header-icon' src={action} alt='img' />
            </span>
            Actions
          </span>
          <div className='profile-actions '>
            <button>Edit Profile</button>
            <button>Set Job Preferences</button>
            <button onClick={handleDelete}>Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniProfile;
