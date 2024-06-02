import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function SignupInfo({ onData, onEnroll }) {
  const [alumniData, setAlumniData] = useState({
    enrollNo: "", // Default selection
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

  const [currentYear] = useState(new Date().getFullYear());

  const joiningyears = Array.from(
    { length: currentYear - 1991 + 1 },
    (_, i) => currentYear - i
  );
  const years = Array.from(
    { length: currentYear + 3 - 1991 + 1 },
    (_, i) => currentYear + 3 - i
  );

  const lookup = {
    Select: ["Select"],
    IISE: ["MCA", "MBA"],
    "IISE LU": ["BBA", "BCOM", "BCA"],
    FIeMITS: ["BAJMC", "BCA"],
    // Add more mappings as needed
  };

  const [selectedValue, setSelectedValue] = useState("Select");
  const handleFirstSelectChange = (event) => {
    console.log("submitted", alumniData);
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

    alumniData.password =
      passwords.pwd === passwords.cnfpwd ? passwords.pwd : null;
    console.log(alumniData);
    if (alumniData.password === null) {
      toast.error("Passwords Not Matched", {
        duration: 4000,
        position: "bottom-right",
      });
    }

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

      try {
        onData(true);
        const response = await axios.post(
          "http://localhost:8080/api/v1/alumni/register",
          alumniData
        );

        if (response.data.status.success) {
          toast.success(`This worked: ${response.data.status.message}`, {
            id: toastId,
            position: `bottom-right`,
            duration: 4000,
          });

          onData(true);
          onEnroll(alumniData.enrollNo);

          setAlumniData({
            enrollNo: "", // Default selection
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
              value={alumniData.enrollNo}
              onChange={(event) => {
                setAlumniData({ ...alumniData, enrollNo: event.target.value });
              }}
              required
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
          <div className='input-container form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='pwd'
              // value={passwords.pwd}
              onChange={(event) => {
                setPasswords({ ...passwords, pwd: event.target.value });
              }}
              required
            />
            <label htmlFor='cnf-password'>Confirm Password</label>
            <input
              type='password'
              id='cnf-password'
              name='cnfpwd'
              // value={passwords.cnfpwd}
              onChange={(event) => {
                setPasswords({ ...passwords, cnfpwd: event.target.value });
              }}
              required
            />
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

export default SignupInfo;
