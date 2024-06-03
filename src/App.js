import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Inicio from "./Views/Inicio";
import BasicLogin from "./Views/Login/BasicLogin";
import EmailLogin from "./Views/Login/EmailLogin";
import TwoFactorLogin from "./Views/Login/TwoFactorLogin";
import FacebookLogin from "./Views/Login/FacebookLogin";
import GoogleLoginComponent from "./Views/Login/GoogleLogin";


function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/button1" element={<BasicLogin />} />
            <Route path="/button2" element={<EmailLogin />} />
            <Route path="/button3" element={<TwoFactorLogin />} />
            <Route path="/button4" element={<GoogleLoginComponent />} />
            <Route path="/button5" element={<FacebookLogin />} />
          </Routes>
        </Router>
  );
}

export default App;
