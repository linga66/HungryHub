import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="section footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
            <h3>Nizampet</h3>
            <p>Opposite to Apollo Clinic</p>
            <p>Hyderabad, Telangana</p>
            <p>+91 9100568555</p>
            <Link to="#" className="text-white">
              sreeja@hungryhub-restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>Miyapur</h3>
            <p>Near Cinetown</p>
            <p>Hyderabad, Telangana</p>
            <p>+91 9989203301</p>
            <Link to="#" className="text-white">
              bhuvan@hungryhub-restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>Madhapur</h3>
            <p>Hyderabad, Telangana</p>
            <p>+91 9989548380</p>
            <Link to="#" className="text-white">
              ashok@hungryhub-restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>Ameerpet</h3>
            <p>Metro Station</p>
            <p>Hyderabad, Telangana</p>
            <p>+91 9000914933</p>
            <Link to="#" className="text-white">
              lakshmi@hungryhub-restaurant.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
