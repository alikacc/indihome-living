import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Onboarding from './Onboarding/Onboarding.jsx';
import Home from './Homepage/Home'; // Correctly import AnotherPage component
import Deet from './Homepage/Details'; // Correctly import AnotherPage component
import Coba from './Homepage/RoomManagement1.js'; // Correctly import AnotherPage component
import Cam from './Cam/Cam'; // Correctly import AnotherPage component
import View from './View/View'; // Correctly import AnotherPage component
import Coba1 from './Homepage/RoomManagement2'; // Correctly import AnotherPage component
import Setting from './View/Setting'; // Correctly import AnotherPage component
import Profile from './Profile/Profile.jsx'; // Correctly import AnotherPage component
import DetailAnggota from './Homepage/DetailAnggota'; // Correctly import AnotherPage component
import Cloud from './Cloud/Cloud1'; // Correctly import AnotherPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/cam" element={<Cam />} />
        <Route path="/home1" element={<Coba />} />
        <Route path="/view" element={<View />} />
        <Route path="/deet" element={<Deet />} />
        <Route path="/home2" element={<Coba1 />} /> */}
        {/* <Route path="/setting" element={<Setting />} /> */}
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/detailang" element={<DetailAnggota />} /> */}
        <Route path="/cloud" element={<Cloud />} />
      </Routes>
    </Router>
  );
}

export default App;