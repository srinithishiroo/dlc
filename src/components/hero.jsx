import React from "react";
import "./header.css";
import Della from "../assets/images/homedella.jpg";

const Hero = () => {
  return (
    <div className="allbox">
      <div className="bld">
        THE WORLD'S 1 <sup>ST</sup>
        <br></br> BUSINESS PLATFORM
      </div>
      <p>
        Founder Jimmy Mistry innovated<br></br> <b>Della Leaders Club </b>- a
        community of{" "}
        <b>
          Entrepreneurs,<br></br>Professionals, & Young Leaders
        </b>
        created to build priceless<br></br> relationships with top Leaders in
        any industry, any type of <br></br>business, anywhere in the world.
      </p>
      <p>
        Membership to the world’s most influential community of <br></br>
        <b>2500+ Domain Experts</b> from <b>56 countries</b>
      </p>
      <br></br>
      <div className="apply">
        <button>APPLY FOR MEMBERSHIP</button>
      </div>
      <div className="box">
        <div className="box_over"></div>
      </div>
      <div className="videoo">
        <img src={Della} width="738px" height="410px" />
      </div>
    </div>
  );
};
export default Hero;
