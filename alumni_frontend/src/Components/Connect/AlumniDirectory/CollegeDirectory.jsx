import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast, Toaster } from "react-hot-toast";

import Directory from "./Directory";
import MyBatchmate from "./MyBatchmate";
import MyPopup from "../../Popup/MyPopup";
import LoginSign from "../../RegisterLogin/LoginSign";

const CollegeDirectory = () => {
  const [isDeptActive, setIsDeptActive] = useState(false);
  const [clgno, setClgno] = useState(null);
  const [showBatchmates, setShowBatchmates] = useState(false);
  const collegeNames = ["IISE", "IISE LU", "FIeMITS"];
  const [viewProfile, setViewProfile] = useState(false);
  const [renderPopup, setRenderPopup] = useState(false);
  const [collegeDetail, setCollegeDetail] = useState([
    {
      college_no: "",
      count: "",
    },
  ]);
  const [cookies] = useCookies(["accessToken"]);
  const handleClickOnCollege = (index) => {
    setClgno(index);
    setIsDeptActive(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const toastId = toast.loading("Fetching Data", {
        position: "bottom-center",
        duration: 4000,
      });

      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/alumni/get-collegeMember"
        );
        setCollegeDetail(response.data.data);
        toast.success("Fetching Complete", {
          position: "bottom-center",
          id: toastId,
          duration: 4000,
        });
      } catch (error) {
        console.log(error);

        toast.error(`Oops ${error.message}`, {
          position: "bottom-center",
          id: toastId,
          duration: 4000,
        });
      }
    };

    fetchData();
  }, []); //
  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP
    setRenderPopup(false);
    if (cookies.accessToken !== undefined) {
      setShowBatchmates(true);
    }
  };

  const handleClickOnMyBatchmate = () => {
    if (cookies.accessToken !== undefined) {
      setShowBatchmates(true);
    } else {
      setRenderPopup(true);
    }
  };
  if (showBatchmates) {
    return <MyBatchmate />;
  }

  if (isDeptActive) {
    return <Directory data={clgno} />;
  }

  return (
    <div className=' dir-container'>
      <div className='upper-division'>
        <span>Year Book</span>
        <span>IISE Group of Institutions</span>
      </div>
      <div id='view-batch-btn'>
        <button className='dir-container' onClick={handleClickOnMyBatchmate}>
          MY BATCHMATES
        </button>
      </div>

      <div>
        <div className='cards-container'>
          {collegeDetail.map((member, index) => (
            <div
              key={index}
              className='cards card  card-txt-style dir-cards-bg'
              onClick={() => handleClickOnCollege(member.college_no)}
            >
              <span>{collegeNames[member.college_no]}</span>
              <span>Total Member : {member.count}</span>
            </div>
          ))}
        </div>
      </div>
      {renderPopup && (
        <MyPopup component={<LoginSign />} onClose={handleClosePopup} />
      )}
      <Toaster />
    </div>
  );
};

export default CollegeDirectory;
