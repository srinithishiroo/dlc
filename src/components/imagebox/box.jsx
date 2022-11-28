import React from "react";
import "./box.css";
import Rectangle from "../../assets/images/rec.png";

const Box = () => {
  return (
    <div className="rectangle">
      <div className="text_s">
        <h2>WHAT IS DLC? </h2>
        <br></br>
        <p>
          DLC is the World’s 1st <b>Business Platform</b> that offers a
          <b> 360-degree </b>support system for <b>Entrepreneurs</b>,<br></br>{" "}
          <b>Professionals, & Young Leaders</b>. The platform gives access to
          first-degree connects and <b>knowledge</b> content from<br></br>{" "}
          <b>2500+ men and women of eminence</b> across
          <b> 26 domains (13 business and 13 lifestyle)</b> to keep you ahead of
          the
          <br></br>
          curve.<br></br> <br></br>DLC offers its members access to personalized
          Forum, access to peer-to-peer learning via its proprietary DLC
          <br></br>
          Channel, exclusive invites to DLC Events, access to exclusive Brand
          Collaborations, and an opportunity to<br></br> associate with member
          curated programs designed to create a meaningful Social Impact.
        </p>
        <br></br>
        <a href="#"> Learn more about DLC</a>
      </div>
    </div>
  );
};
export default Box;
