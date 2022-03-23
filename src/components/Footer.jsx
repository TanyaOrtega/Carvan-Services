import React from "react";
import "./Footer.module.css"
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

export function Footer () {
    return ( 
    <div className="footer">
        <div className="social">
            <FaFacebook className="icons" />
            <FaInstagram className="icons" />
            <FaTwitter className="icons" />
            <FaPinterest className="icons" />
        </div>
        <div className="container">
            <div className="col">
                <h3> About</h3>
                <p>Company</p>
                <p>Details</p>
                <p>About Us</p>
            </div>
            <div className="col">
                <h3> Company</h3>
                <p>Company</p>
                <p>Details</p>
                <p>About Us</p>
            </div>
            <div className="col">
                <h3> Legal</h3>
                <p>Company</p>
                <p>Details</p>
                <p>About Us</p>
            </div>
            <div className="col">
                <h3> Information</h3>
                <p>Company</p>
                <p>Details</p>
                <p>About Us</p>
            </div>
        </div>
    </div>
    );
}


