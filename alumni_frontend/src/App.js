import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home';
import AlumniVision from './Components/AlumniVision/AlumniVision';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './Components/Aboutus/Aboutus';
import OurTeam from './Components/Team/OurTeam';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        
      </Routes>
      <Footer/>

      
    </div>
  );
}

export default App;
