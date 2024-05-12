import Navbar from './Components/LandingPage/Navbar/Navbar';
import './App.css';
import Footer from './Components/LandingPage/Footer/Footer';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './Components/About/Aboutus';
import Ourteam from './Components/About/Ourteam';
import Batchmate from './Components/Connect/Batchmate';
import Directory from './Components/Connect/Directory';
import Login from './Components/Career/LoginSignup/LoginSign'
import Gallery from './Components/Gallery/Gallery';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/invitebatchmate" element={<Batchmate />} />
        <Route path="/alumnidirectory" element={<Directory />} />
        <Route path="/jobs" element={<Login />} />
        <Route path="/internship" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
