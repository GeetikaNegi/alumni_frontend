import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import "./Signup.css";
import { useCookies } from "react-cookie";
const Signup = () => {
  const [passwords, setPasswords] = useState({
    pwd: "",
    cnfpwd: "",
  });

  const [cookies] = useCookies(["myToken"]);

  const lookup = {
    IISE: ["MCA", "MBA"],
    "IISE LU": ["BBA", "BCOM", "BCA"],
    FIeMITS: ["BAJMC", "BCA"],
    // Add more mappings as needed
  };

  const [opportunity, setOpportunity] = useState({
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

  const [selectedValue, setSelectedValue] = useState("IISE");

  const handleFirstSelectChange = (event) => {
    const newValue = event.target.value;

    switch (newValue) {
      case "IISE":
        opportunity.collegeNo = 0;
        break;
      case "IISE LU":
        opportunity.collegeNo = 1;
        break;

      case "FIeMITS":
        opportunity.collegeNo = 2;
        break;
      default:
        opportunity.collegeNo = null;
        break;
    }
    console.log(opportunity.collegeNo);
    setSelectedValue(newValue);
  };

  const options = lookup[selectedValue];

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setOpportunity((prevOpportunity) => ({
      ...prevOpportunity,
      [name]: type === "checkbox" ? value : value,
    }));
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [name]: type === "checkbox" ? value : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Form Data:", opportunity); // Log form data to console

    opportunity.password =
      passwords.pwd === passwords.cnfpwd ? passwords.pwd : null;
    console.log(`opp pass : ${opportunity.password}`);
    if (opportunity.password === null) {
      console.log("in if");
      toast.error("Passwords Not Matched", {
        duration: 4000,
        position: "bottom-right",
      });
    }

    if (opportunity.dateOfCompletion < opportunity.dateOfJoining) {
      toast.error("Date of Completion must be after Date of Joining", {
        position: `bottom-right`,
        duration: 4000,
      });
    } else {
      const toastId = toast.loading("Loading 1...", {
        position: `bottom-right`,
        duration: 4000,
      });
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/alumni/register",
          opportunity
        );

        // ...
        if (response.data.status.success) {
          toast.success(`This worked: ${response.data.status.message}`, {
            id: toastId,
            position: `bottom-right`,
            duration: 4000,
          });

          setOpportunity({
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
    <div className='signup-container'>
      <h1 className='signup-header'>
        <u>Alumni Registration</u>
      </h1>

      <div className='form-container '>
        <form onSubmit={handleSubmit}>
          <div className='input-container form-group'>
            <label htmlFor='email'>College Id *</label>
            <input
              type='text'
              id='enroll-no'
              name='enrollNo'
              value={opportunity.enrollNo}
              onChange={handleChange}
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
              value={opportunity.fname}
              onChange={handleChange}
              required
            />
            <label htmlFor='lname'>Last Name *</label>
            <input
              type='text'
              id='lname'
              name='lname'
              value={opportunity.lname}
              onChange={handleChange}
              required
            />
          </div>

          <div className='input-container form-group'>
            <label htmlFor='email'>Email *</label>
            <input
              type='email'
              id='email'
              name='email'
              value={opportunity.email}
              onChange={handleChange}
              required
            />

            <label htmlFor='mobile'>Mobile No</label>
            <input
              type='tel'
              id='mobile'
              name='mobileNo'
              pattern='^[6789]\d{9}$'
              value={opportunity.mobileNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-container form-group'>
            <label htmlFor='joining-date'>Joining Date </label>
            <input
              type='date'
              id='joining-date'
              name='dateOfJoining'
              value={opportunity.dateOfJoining}
              onChange={handleChange}
            />
            <label htmlFor='completion-date'>Completion Date </label>
            <input
              type='date'
              id='completion-date'
              name='dateOfCompletion'
              value={opportunity.dateOfCompletion}
              onChange={handleChange}
            />
          </div>
          <div className='input-container form-group'>
            <label htmlFor='college'>College </label>

            <select
              name='collegeNo'
              defaultChecked
              onChange={handleFirstSelectChange}
            >
              <option value='' selected disabled>
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
              value={opportunity.course}
              onChange={handleChange}
            >
              <option value='' selected disabled>
                Select
              </option>
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
              value={passwords.pwd}
              onChange={handleChange}
              required
            />
            <label htmlFor='cnf-password'>Confirm Password</label>
            <input
              type='password'
              id='cnf-password'
              name='cnfpwd'
              value={passwords.cnfpwd}
              onChange={handleChange}
              required
            />
          </div>
          <button type='submit'> Submit</button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;
