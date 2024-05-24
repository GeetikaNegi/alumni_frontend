import Navbar from "./Components/LandingPage/Navbar/Navbar";
import "./App.css";
import Footer from "./Components/LandingPage/Footer/Footer";
import Home from "./Components/Home";
import { /*BrowserRouter,*/ Routes, Route } from "react-router-dom";
import Aboutus from "./Components/About/Aboutus";
import Ourteam from "./Components/About/Ourteam";
import Batchmate from "./Components/Connect/Batchmate";
import CollegeDirectory from "./Components/Connect/AlumniDirectory/CollegeDirectory";
import LoginSign from "./Components/Career/LoginSignup/LoginSign";
import Gallery from "./Components/Gallery/Gallery";
import MyPopup from "./Components/Popup/MyPopup";
import { useState } from "react";
import OpportunityForm from "./Components/Career/Jobs/OpportunityForm";
import Signup from "./Components/Career/LoginSignup/Signup";
import Showjobs from "./Components/Career/Jobs/Showjobs";
import ForgotPassword from "./Components/Career/LoginSignup/PasswordForgot";
import Internship from "./Components/Career/Internship";
function App() {
  const [viewProfile, setViewProfile] = useState(false);

  const handleClosePopup = () => {
    //THIS IS THE FN SENT AS PROP TO CLOSE POPUP
    setViewProfile(false);
  };
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/ourteam' element={<Ourteam />} />
        <Route path='/invitebatchmate' element={<Batchmate />} />
        <Route path='/alumnidirectory' element={<CollegeDirectory />} />
        <Route path='/jobs' element={<Showjobs />} />
        <Route path='/internship' element={<Internship />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/gallery' element={<ForgotPassword />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
