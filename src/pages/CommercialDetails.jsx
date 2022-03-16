import React from "react";
import { ServicesGrid } from "../components/ServicesGrid";
import Limpieza12 from "../../src/assets/Images/Limpieza12.jfif";

export function CommercialDetails() {
  return (
    <div className="commercial">
      <h1>Commercial Services</h1>
      <p className="commercial-details">
        CARVAN Cleaning Services is committed to provide quality and dependable
        cleaning services.<br></br>
        QUALITY because this is part of your image and your brand values. We
        help you uphold a good image by making sure your business is always
        clean and fresh.<br></br>
        DEPENDABILITY because we know how important your business schedule is.
        If we miss a day or finish late your business will be affected. We
        eliminate this issue by hiring the best staff, always supervising the
        work, and having backup staff in case of emergencies.
      </p>
      <div>
          <img src={Limpieza12} alt=''/>
      </div>
    </div>
  );
}
