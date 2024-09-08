import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-contents">
        <div className="footer-contents-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            assumenda voluptatibus corrupti, officiis quis aperiam modi maxime
            ipsum impedit molestias vero tenetur nobis beatae omnis! Nam ad
            consectetur voluptas veritatis!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
              <div className="footer-contents-centre">
                  <h2>COMPANY</h2>
                  <ul>
                      <li>Home</li>
                      <li>Abouts us</li>
                      <li>Delivery</li>
                      <li>Privacy policy</li>
                  </ul>
        </div>
              <div className="footer-contents-right">
                  <h2>GET IN TOUCH</h2>
                  <ul>
                      <li>+1-212-456-7890</li>
                      <li>contact@tomato.com</li>
                  </ul>
        </div>
          </div>
          <hr />
          <p className="footer-copyright">
              Copyright 2024 &copy; Tomato.com - All Right reservd. 
          </p>
    </div>
  );
};

export default Footer;
