import React from "react";
import Limpieza8 from "../../src/assets/Images/Limpieza8.jfif";
export function AboutCompany() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p className="about-content">
            Now more than ever you must choose a cleaning partner that has extensive
        experience and is qualified to offer Cleaning and Disinfecting services.
        With over 5 years of experience, CARVAN is OSHA certified for safety and
        work applications and IICRC certified for Carpet and Fabric Cleaning. We
        have extensive knowledge and are trained on the correct use of PPE,
        disinfectants, and cleaning practices with the goal not only to clean
        for appearance, but to improve the health of your establishment and
        provide a safe environment for your employees and customers.
      </p>
      <div>
          <img src={Limpieza8} alt=''/>
      </div>
    </div>
  );
}
