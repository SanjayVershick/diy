import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import Community from './Components/Community';
import Navi from './Components/Navi';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import '@fortawesome/fontawesome-free/css/all.min.css';
import newz from './Components/newz';

function App() {
  return (
    <Router>
        <Navi /> 
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ForgotPassword" element={<ForgotPassword/>} />
            <Route path="/newz" element={<newz/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
