import React from "react";
import "./footer.css";
import Down from "../../assets/images/download.svg";
import Mail from "../../assets/images/mail.svg";
import Phone from "../../assets/images/phone.svg";
import Icon1 from "../../assets/images/icon1.png";
import Icon2 from "../../assets/images/icon2.png";
import Icon3 from "../../assets/images/icon8.png";
import Icon4 from "../../assets/images/icon0.png";

const Footer = () => {
  return (
    <>
      <div className="main_flex">
        <div className="row_1">
          <div>
            The World’s 1<sup>st </sup>Business Platform
          </div>
          <div>
            <img src={Phone} width="20px" height="25px" /> +1(917)6919838
          </div>
          <div>
            <img src={Phone} width="20px" height="25px" />
            +91-9000054411
          </div>
          <div>
            <img src={Mail} width="20px" height="25px" />
            info@dellaleaders.com
          </div>
          <div>
            <img src={Down} width="20px" height="25px" />
            View Brochure
          </div>
        </div>

        <div className="row_1">
          <div>About Us</div>
          <div>Member Offerings</div>
          <div>Membership</div>
        </div>

        <div className="row_1">
          <div>DLC Global Chapters</div>
          <div>Social Impact</div>
          <div>Press & Media</div>
        </div>

        <div className="row_1">
          <div>Contact Us</div>
          <div>Legal</div>
          <div>Never miss an update</div>
          <div className="subscribe">
            <input
              type="text"
              placeholder="Subscribe to our newsletter"
            ></input>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="main_flex">
        <div className="topic1">
          © 2022 Della Leaders Club. All Rights Reserved
        </div>
        <div className="topic2">
          Follow Us
          <a href="#">
            <img src={Icon1} height="26px" width="28px" />
          </a>
          <a href="#">
            <img src={Icon2} height="26px" width="28px" />
          </a>
          <a href="#">
            {" "}
            <img src={Icon3} height="26px" width="28px" />
          </a>
          <a href="#">
            {" "}
            <img src={Icon4} height="26px" width="28px" />
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
