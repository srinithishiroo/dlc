import React from "react";
import "./img.css";
import New from "../../assets/images/newbanner.jpg";

const Photos = () => {
  return (
    <div
      className="img_flex"
      style={{
        backgroundImage: `url(${New}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "850px",
        width: "1519px",
      }}
    >
      <div className="text">
        <h1>
          JOIN THE LEAGUE OF <br />
          EXTRAORDINARY INDIVIDUALS
        </h1>
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
        <div className="textbu">
          <button className="test">TESTIMONIALS</button>
        </div>
      </div>
    </div>
  );
};
export default Photos;
