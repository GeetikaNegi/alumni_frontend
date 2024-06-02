import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import "../Register.css";
import uploadBtn from "../../../Assets/svgs/upload-btn.svg";
import userImg from "../../../Assets/svgs/user-image.svg";

const ProfilePic = ({ enroll }) => {
  const [file, setFile] = useState(null);
  const [img, setImg] = useState({
    placeHolder: userImg,
    image: null,
  });

  const onFileChangeHandler = (event) => {
    const selectedFile = event.target.files[0];

    if (
      selectedFile.type === "image/png" ||
      selectedFile.type === "image/jpeg"
    ) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = (r) => {
        setImg({
          placeHolder: r.target.result,
        });
      };
      reader.readAsDataURL(selectedFile);
    } else {
      toast.error("Invalid File ", {
        position: `bottom-right`,
        duration: 4000,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    const toastId = toast.loading("Loading ...", {
      position: `bottom-right`,
      duration: 4000,
    });
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/alumni/uploadProfilePic/" + enroll,
        formData
      );
      console.log(res);
      if (res.data.status.success) {
        toast.success(` ${res.data.status.message}`, {
          id: toastId,
          position: `bottom-right`,
          duration: 4000,
        });
      } else {
        toast.error(` ${res.data.status.message}`, {
          id: toastId,
          position: `bottom-right`,
          duration: 4000,
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <img id='alumni-image-preview' src={img.placeHolder} alt='' />
      <form onSubmit={handleSubmit}>
        <input
          type='file'
          id='img-upload-input'
          name='file'
          onChange={onFileChangeHandler}
        />
        <button type='submit' id='img-upload-btn'>
          <img src={uploadBtn} alt='upload' id='img-upload-btn-svg' />
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default ProfilePic;
