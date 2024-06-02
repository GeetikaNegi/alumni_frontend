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
import AlumniProfile from "./Components/Connect/AlumniDirectory/AlumniProfile";
import { useState } from "react";
import { NavbarNew } from "./Components/NavbarNew/NavbarNew";

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
        <Route
          path='/jobs'
          element={
            <MyPopup component={<LoginSign />} onClose={handleClosePopup} />
          }
        />
        <Route path='/internship' element={<LoginSign />} />
        <Route path='/gallery' element={<AlumniProfile />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
