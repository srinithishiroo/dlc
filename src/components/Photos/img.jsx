import React from "react";
import "./img.css";

const Photos = () => {
  return (
    <div className="img_flex">
      <div className="high">
        <a href="#">
          <img
            src="https://www.dellaleaders.com/images/hcm-banner-new.jpg"
            alt="total"
            width="100%"
          />
        </a>
        <div className="text">
          <h1>
            JOIN THE LEAGUE OF <br />
            EXTRAORDINARY INDIVIDUALS
          </h1>{" "}
          <br />
          <div className="num">
            <span>
              2500+
              <p>LEADERS</p>
            </span>
            <span>
              56
              <p>CONUTRIES</p>
            </span>
          </div>
          <button className="test">TESTIMONIALS</button>
        </div>
      </div>
    </div>
  );
};
export default Photos;
