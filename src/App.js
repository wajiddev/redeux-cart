import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contacts from "./Components/Contacts";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="bg-blue-500 p-4 flex justify-center">
          <ul className="flex vw-[auto] gap-10 flex-wrap text-white font-medium">
           
            <li>
              <NavLink
                to="/"
                className= {({ isActive }) => isActive ? "text-yellow-300" : ""}
                end
              >
                Home
              </NavLink>
            </li>
          
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "text-yellow-300" : ""}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => isActive ? "text-yellow-300" : ""}
              >
                Services
              </NavLink>
            </li>
            
            <li> 
              <NavLink
                to="/contacts"
                className={({ isActive }) => isActive ? "text-yellow-300" : ""}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



















































