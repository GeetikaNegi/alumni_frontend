import React, { useEffect, useState } from "react";
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
import { useCookies } from "react-cookie";
import toast, { Toaster } from "react-hot-toast";
import MyPopup from "../../Popup/MyPopup";
import LoginSign from "../../RegisterLogin/LoginSign";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
const AlumniProfile = (props) => {
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
  const [cookies] = useCookies(["accessToken"]);

  const collegeNames = ["IISE", "IISE LU", "FIeMITS"];

  const [professionalData, setProfessionalData] = useState({
    occupation: "",
    organisation: "",
    linked_url: "",
    about: "",
  });

  const [showAction, setShowAction] = useState(false);
  const [renderPopup, setRenderPopup] = useState(false);

  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP
    setRenderPopup(false);
  };

  const handleDelete = async () => {
    const collegeId = prompt(`Are You Sure\nEnter Your College Id To Proceed`);
    console.log(collegeId);
    if (collegeId !== null) {
      const toastId = toast.loading("Loading", {
        position: `bottom-right`,
        duration: 4000,
      });
      try {
        const response = await axios.delete(
          "http://localhost:8080/api/v1/alumni/delete-alumni",
          {
            params: {
              enroll_no: collegeId,
            },
            headers: {
              Authorization: `Bearer ${cookies.accessToken}`,
            },
          }
        );

        if (response.data.status.success) {
          toast.success(`${response.data.status.message}`, {
            id: toastId,
            position: "bottom-right",
            duration: 4000,
          });
        } else {
          toast.error(`${response.data.status.message}`, {
            id: toastId,
            position: "bottom-right",
            duration: 4000,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const token = cookies.accessToken;

  const hey = () => {
    try {
      //.
      const enr = jwtDecode(token).sub;

      if (props.data.enroll_no.toString() === enr) {
        setShowAction(true);
      }
    } catch (InvalidTokenError) {
      console.log(InvalidTokenError);
    }
  };

  useEffect(() => {
    //..mmmm.....nnnhhh
    hey();
    const fetchAlumniOtherData = async () => {
      try {
        console.log(`roll :${props.data.enroll_no}`);
        const response = await axios.get(
          "http://localhost:8080/api/v1/alumni/get-professional-profile/" +
            props.data.enroll_no
        );
        if (response.data.status.success) {
          if (response.data.status.statusCode === 200) {
            setProfessionalData(response.data.data);
          }
        } else {
          toast.error(`${response.data.errorMessage}`, {
            position: "bottom-right",
            duration: 4000,
          });
        }
      } catch (error) {
        console.log(`we got struck. ${error}`);
      }
    };

    fetchAlumniOtherData();
  }, []); //.

  return (
    <div>
      <div className='profile-card '>
        <div className='alumniprofile-card  ' id='basic-detail'>
          <span className='alumni-image-container'>
            <img
              className='alumni-image'
              src={
                props.data.profile_pic_name === null
                  ? faculty1
                  : "http://localhost:8080/api/v1/alumni/image?fileName=" +
                    props.data.profile_pic_name
              }
              alt='alumniImage'
            />
          </span>
          <span>
            {props.data.fname} {props.data.lname}
          </span>

          <span>{collegeNames[props.data.collegeNo]}</span>

          <span>{props.data.course}</span>
          <span>Batch of {props.data.dateOfJoining}</span>
          <span>College ID : {props.data.enroll_no}</span>
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
            <a href={`mailto:${props.data.email}`}>{props.data.email}</a>
          </span>

          <span>
            <span>
              <img className='icon' src={phone} alt='' />
            </span>
            {` `}
            {props.data.mobileNo}
          </span>

          <span>
            <span>
              <img className='icon' src={linkdin} alt='linked' />
            </span>{" "}
            <a
              href={
                professionalData.linked_url !== ""
                  ? professionalData.linked_url
                  : "#"
              }
              target='_blank'
              rel='noreferrer'
            >
              {professionalData.linked_url !== ""
                ? professionalData.linked_url
                : "N/A"}
            </a>
          </span>
          <span>
            <span>
              <img className='icon' src={address} alt='linked' />
            </span>{" "}
            <span id='address'>
              {professionalData.about !== "" ? professionalData.about : "N/A"}
            </span>
          </span>
        </div>
        <div className=' alumniprofile-card alumniprofile-card-font '>
          <span className='profilecard-header'>
            <span>
              <img className='header-icon' src={work} alt='img' />
            </span>
            Work Profile
          </span>
          <span id='profile-heading1'>
            {professionalData.occupation !== ""
              ? professionalData.occupation
              : "N/A"}
          </span>
          <span id='profile-heading2'>
            {professionalData.occupation !== ""
              ? professionalData.occupation
              : "N/A"}
          </span>
        </div>
        {/* <div className=' alumniprofile-card alumniprofile-card-font'>
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
        </div> */}
        {showAction && (
          <div className=' alumniprofile-card alumniprofile-card-font'>
            <span className='profilecard-header'>
              <span>
                <img className='header-icon' src={action} alt='img' />
              </span>
              Actions
            </span>
            <div className='profile-actions '>
              <button>
                <a href='/post-opportunity'>Post an Opportunity</a>{" "}
              </button>
              <button>
                <a href='/update-profile'>Edit Profile</a>
              </button>
              <button onClick={handleDelete}>Delete Account</button>
            </div>
          </div>
        )}
      </div>
      {renderPopup && (
        <MyPopup component={<LoginSign />} onClose={handleClosePopup} />
      )}
      <Toaster />
    </div>
  );
};

export default AlumniProfile;
