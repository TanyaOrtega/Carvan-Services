import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ServiceDetails } from "../pages/ServiceDetails";
import { AboutCompany } from "../pages/AboutCompany";
import { CommercialDetails } from "../pages/CommercialDetails";
import { Contact } from "../pages/Contact";

import "./Navbar.module.css";


export function Navbar () {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <Router>
      <div className="navbar">
        <div className="container">
          <h1>
            <span>
              <BsFillHouseFill />
              CARVAN CLEANING</span> SERVICES
          </h1>
          <button className="btn">Log In</button>
          <ul className= {click ? 'nav-menu active': 'nav-menu'}>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Home Services</Link>
            </li>
            <li>
              <Link to="/commercial">Commercial</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
          <div className="menuresponsive" onClick={handleClick}>{ click ? (<FaRegTimesCircle className="icon" />) : (<HiOutlineMenuAlt4 className="icon" />)}
          </div>
        </div>
      </div>  
          <main>
            <Routes>
              <Route path="/about" element={<AboutCompany />} />
              <Route path="/services" element={<ServiceDetails />} />
              <Route path="/commercial" element={<CommercialDetails />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
    </Router>
  );
}

