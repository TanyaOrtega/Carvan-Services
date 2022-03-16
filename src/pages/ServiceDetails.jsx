import React from "react";
import Limpieza14 from "../../src/assets/Images/Limpieza14.jpg";
export function ServiceDetails() {
  return (
    <div className="home">
      <h1>Home Services</h1>
      <p className="home-content">
        Our recurring house cleaning services will maintain your home always
        clean and fresh. Whether you are a busy executive, a retired senior, or
        a large family with pets we can help you scratch all those cleaning
        chores off your to do list!
      </p>
      <div>
          <img src={Limpieza14} alt=''/>
      </div>
    </div>
  );
}
