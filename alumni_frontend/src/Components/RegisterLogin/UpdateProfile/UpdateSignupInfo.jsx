import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

function UpdateSignupInfo({ onData }) {
  const [cookies] = useCookies("accessToken");
  const [enroll, setEnroll] = useState();
  const [alumniData, setAlumniData] = useState({
    fname: " ",
    lname: "",
    email: "",
    dateOfJoining: "  ",
    dateOfCompletion: " ",
    course: " ",
    mobileNo: " ",
    collegeNo: 0,
  });

  const [currentYear] = useState(new Date().getFullYear());

  const joiningyears = Array.from(
    { length: currentYear - 1991 + 1 },
    (_, i) => currentYear - i
  );
  const years = Array.from(
    { length: currentYear + 3 - 1991 + 1 },
    (_, i) => currentYear + 3 - i
  );

  const colleges = ["IISE", "IISE LU", "FIeMITS"];

  const lookup = {
    IISE: ["MCA", "MBA"],
    "IISE LU": ["BBA", "BCOM", "BCA"],
    FIeMITS: ["BAJMC", "BCA"],
    Select: ["select"],
    // Add more mappings as needed
  };

  useEffect(() => {
    async function fetchProfile() {
      try {
        const token = cookies.accessToken;
        setEnroll(jwtDecode(token).sub);
        const enroll = jwtDecode(token).sub;

        const response = await axios.get(
          "http://localhost:8080/api/v1/alumni/get-profile/" + enroll,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAlumniData(response.data.data);
        setSelectedValue(colleges[alumniData.collegeNo]);
        onData(response.data.data.profile_pic_name);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProfile();
  }, []);

  const [selectedValue, setSelectedValue] = useState(
    colleges[alumniData.collegeNo]
  );
  const handleFirstSelectChange = (event) => {
    const newValue = event.target.value;

    switch (newValue) {
      case "IISE":
        alumniData.collegeNo = 0;
        alumniData.course = "";
        break;
      case "IISE LU":
        alumniData.collegeNo = 1;
        alumniData.course = "";
        break;

      case "FIeMITS":
        alumniData.collegeNo = 2;
        alumniData.course = "";
        break;
      case "Select":
        alumniData.course = "";
        break;
      default:
        alumniData.collegeNo = null;
        break;
    }
    setSelectedValue(newValue);
  };

  const options = lookup[selectedValue];

  const [passwords, setPasswords] = useState({
    pwd: "",
    cnfpwd: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(alumniData);

    if (alumniData.dateOfCompletion < alumniData.dateOfJoining) {
      toast.error("Date of Completion must be after Date of Joining", {
        position: `bottom-right`,
        duration: 4000,
      });
    } else {
      const toastId = toast.loading("Loading ...", {
        position: `bottom-right`,
        duration: 4000,
      });
      //''
      // onData(true);
      console.log(alumniData);

      try {
        onData(true);
        const response = await axios.put(
          "http://localhost:8080/api/v1/alumni/update-profile",
          alumniData,
          {
            headers: {
              Authorization: "Bearer " + cookies.accessToken,
            },
          }
        );

        if (response.data.status.success) {
          toast.success(`This worked: ${response.data.status.message}`, {
            id: toastId,
            position: `bottom-right`,
            duration: 4000,
          });

          // onData(true);
          // onEnroll(alumniData.enrollNo);

          setAlumniData({
            fname: "",
            lname: "",
            email: "",
            password: "",
            dateOfJoining: "",
            dateOfCompletion: "",
            course: "",
            mobileNo: "",
            collegeNo: "",
          });
          setPasswords({
            pwd: "",
            cnfpwd: "",
          });
        } else {
          toast.error(` ${response.data.status.message}`, {
            id: toastId,
            position: `bottom-right`,
            duration: 4000,
          });
        }

        // Log the entire response object
      } catch (error) {
        console.error("Error sending data:", error); // Log any
        toast.error(` Network Error`, {
          id: toastId,
          position: `bottom-right`,
          duration: 4000,
        });
      }

      // Reset form (optional)
    }
  };

  return (
    <div>
      <div className='form-container '>
        <form onSubmit={handleSubmit}>
          <div className='input-container form-group'>
            <label htmlFor='email'>College Id *</label>
            <input
              type='text'
              id='enroll-no'
              name='enrollNo'
              disabled
              value={enroll}
            />
          </div>
          <div className='input-container form-group'>
            {" "}
            <label htmlFor='fname'>First Name *</label>
            <input
              type='text'
              id='fname'
              name='fname'
              value={alumniData.fname}
              onChange={(event) => {
                setAlumniData({ ...alumniData, fname: event.target.value });
              }}
              required
            />
            <label htmlFor='lname'>Last Name *</label>
            <input
              type='text'
              id='lname'
              name='lname'
              value={alumniData.lname}
              onChange={(event) => {
                setAlumniData({ ...alumniData, lname: event.target.value });
              }}
              required
            />
          </div>

          <div className='input-container form-group'>
            <label htmlFor='email'>Email *</label>
            <input
              type='email'
              id='email'
              name='email'
              value={alumniData.email}
              onChange={(event) => {
                setAlumniData({ ...alumniData, email: event.target.value });
              }}
              required
            />

            <label htmlFor='mobile'>Mobile No</label>
            <input
              type='tel'
              id='mobile'
              name='mobileNo'
              pattern='^[6789]\d{9}$'
              value={alumniData.mobileNo}
              onChange={(event) => {
                setAlumniData({ ...alumniData, mobileNo: event.target.value });
              }}
              required
            />
          </div>

          <div className='input-container form-group'>
            <label htmlFor='joining-date'>Joining Date </label>

            <select
              id='joining-date'
              name='dateOfJoining'
              value={alumniData.dateOfJoining}
              onChange={(event) => {
                setAlumniData({
                  ...alumniData,
                  dateOfJoining: event.target.value,
                });
              }}
            >
              <option>select</option>
              {joiningyears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <label htmlFor='completion-date'>Completion Date </label>

            <select
              id='completion-date'
              name='dateOfCompletion'
              value={alumniData.dateOfCompletion}
              onChange={(event) => {
                setAlumniData({
                  ...alumniData,
                  dateOfCompletion: event.target.value,
                });
              }}
            >
              <option>select</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className='input-container form-group'>
            <label htmlFor='college'>College </label>

            <select
              name='collegeNo'
              defaultChecked
              value={
                colleges[alumniData.collegeNo] === "IISE"
                  ? "IISE"
                  : colleges[alumniData.collegeNo] === "IISE LU"
                  ? "IISE LU"
                  : "FIeMITS"
              }
              onChange={handleFirstSelectChange}
            >
              {/* <option value='Select' disabled>
                Select
              </option> */}
              <option value='Select' disabled>
                Select
              </option>
              <option value='IISE'>IISE</option>
              <option value='IISE LU'>IISE LU</option>
              <option value='FIeMITS'>FIeMITS</option>
              {/* Add more options as needed */}
            </select>

            <label htmlFor='course'>Course </label>
            <select
              name='course'
              value={alumniData.course}
              onChange={(event) => {
                setAlumniData({ ...alumniData, course: event.target.value });
              }}
            >
              {/* <option value='' disabled>
                Select
              </option> */}
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button type='submit' className='submit-btn'>
            {" "}
            Submit
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default UpdateSignupInfo;
