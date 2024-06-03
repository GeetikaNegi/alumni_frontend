import Navbar from "./Components/LandingPage/Navbar/Navbar";
import "./App.css";
import Footer from "./Components/LandingPage/Footer/Footer";
import Home from "./Components/Home";
import { /*BrowserRouter,*/ Routes, Route } from "react-router-dom";
import Aboutus from "./Components/About/Aboutus";
import Ourteam from "./Components/About/Ourteam";
import Batchmate from "./Components/Connect/Batchmate";
import CollegeDirectory from "./Components/Connect/AlumniDirectory/CollegeDirectory";
import Gallery from "./Components/Gallery/Gallery";
import { useState } from "react";
import { NavbarNew } from "./Components/NavbarNew/NavbarNew";
import OpportunityForm from "./Components/Career/Jobs/OpportunityForm";
import Showjobs from "./Components/Career/Jobs/Showjobs";
import Internship from "./Components/Career/Jobs/Internship";
import MyBatchmate from "./Components/Connect/AlumniDirectory/MyBatchmate";
import UpdateProfileHome from "./Components/RegisterLogin/UpdateProfile/UpdateProfileHome";
import Register from "./Components/RegisterLogin/Registration/Register";
function App() {
  const [viewProfile, setViewProfile] = useState(false);

  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP
    setViewProfile(false);
  };
  return (
    <div className='App'>
      <NavbarNew />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/ourteam' element={<Ourteam />} />
        <Route path='/invitebatchmate' element={<Batchmate />} />
        <Route path='/alumnidirectory' element={<CollegeDirectory />} />
        <Route path='/jobs' element={<Showjobs />} />
        <Route path='/internship' element={<Internship />} />

        <Route path='/gallery' element={<UpdateProfileHome />} />

        <Route path='/post-opportunity' element={<OpportunityForm />} />
        <Route path='/my-upload' element={<uploadPic />} />
        <Route path='/register' element={<Register />} />
        <Route path='/my-batchmate' element={<MyBatchmate />} />
        <Route path='/update-profile' element={<UpdateProfileHome />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
