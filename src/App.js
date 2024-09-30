import React, { useState, useEffect } from 'react';
import { HashRouter,BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import NB from './components/NB';
import Home from './components/Home';
import { SR } from './components/SR';
import Events from './components/Event';
import Aboutus from './components/Aboutus';
import Services from './components/Book';




import Booking from './components/Booking';
import Footer from './components/footer';
import Annualroutinecheckup from './components/Services/MentalHealth';
import Dermatology from './components/Services/Dermatology';
import Genralphysician from './components/Services/Generalphysician';
import Oncology from './components/Services/YogaMeditation';
import Preventivehealthcheckup from './components/Services/Preventivehealthcheckup';
import Panchakarma from './components/Services/Panchakarma';
import BookEvent from './components/BookEvent';
import Contactus from './components/Contactus';
import Paragraph from './components/Paragraph';
import FeaturdArticles from './components/About_Svtol_Read_More/FeaturdArticles';
import SuccessStories from './components/About_Svtol_Read_More/SussessStories';
import International_Appointement from './components/International_Appointement'
import Directors from './components/Directors';
import OurDoctors from './components/OurDoctors';
import YogaMeditation from './components/YogaMeditation';
import YogaDietMeditation from './components/Services/YogaMeditation';
import MentalHealth from './components/Services/MentalHealth';

// Keyframes for pulsating animation
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled component for the loading container
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  // background-color: black; // Set the background color to black
`;

// Styled component for the loading image with size adjustment
const LoadingImage = styled.img`
  animation: ${pulse} 1.5s infinite;
  width: 400px;  // Set the desired width
  height: 400px; // Set the desired height
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change the delay time as needed

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingContainer>
          <LoadingImage src={require("./components/Logo.png")} alt="Loading..." />
        </LoadingContainer>
      ) : (
        <div className="home">
            <HashRouter>
   <NB/>
   
   
     
    
     
    <Routes>
     
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/Events" element={<Events/>} > </Route>Services
      <Route path="/Services" element={<Services/>}> </Route>
      <Route path="/Directors" element={<Directors/>}> </Route>
      <Route path="/Aboutus" element={<Aboutus/>}> </Route>
      <Route path="/what_we_stands_for" element={<SR/>}> </Route>
      <Route path="/ourDoctors" element={<OurDoctors/>}></Route>
      <Route path="/YogaMeditation" element={<YogaMeditation/>}> </Route>

      <Route path="/Contactus" element={<Contactus/>}> </Route>
      <Route path="/book_appointment" element={<Booking/>}> </Route>
      <Route path="/BookEvent" element={<BookEvent/>}> </Route>


      <Route path="/sr_mental_health" element={<MentalHealth/>}> </Route>
      <Route path="/sr_dermatology" element={<Dermatology/>}> </Route>
      <Route path="/sr_general_wellness" element={<Genralphysician/>}> </Route>
      <Route path="/sr_yoga_diet_Meditation" element={<YogaDietMeditation/>}> </Route>
      <Route path="/sr_Panchakarma" element={<Panchakarma/>}> </Route>
      <Route path="/sr_Preventivehealthcheckup" element={<Preventivehealthcheckup/>}> </Route>

      <Route path="/Reserch" element={<Paragraph/>}> </Route>
      <Route path="/Success_story" element={<SuccessStories/>}> </Route>
      <Route path="/FeaturdArticles" element={<FeaturdArticles/>}> </Route>
      <Route path="/International" element={<International_Appointement/>}> </Route>



      
      

     
    </Routes>
    <Footer/>
    </HashRouter>
        </div>
      )}
    </div>
  );
}

export default App;
