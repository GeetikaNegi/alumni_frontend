import Navbar from './Components/Navbar/Navbar';
import './App.css';
import ImageSlide from './Components/imgSlider/ImageSlide';
import ImgCarousel from './Components/AlumniCards/ImgCarousel';
import LoginSign from './Components/LoginSignup/LoginSign';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ImageSlide/>
      <ImgCarousel/>
      <LoginSign/>
    </div>
  );
}

export default App;
