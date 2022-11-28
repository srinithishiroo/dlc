import React from "react";
import "./people.css";
import Round from "../../assets/images/nation.webp";

const Peo = () => {
  return (
    <div className="more_people">
      <div className="bgg"></div>
      <div className="gray">
        <div className="rot">
          <img src={Round} width="670px" height="670px" />
        </div>
        <p>
          Our DLC Global Community<br></br> is inclusive and we value<br></br>
          diversity. We are from <br></br> different cultures, religions
          <br></br> and backgrounds but DLC binds us together. <br></br>
          <br></br>
          <button>READ MORE</button>
        </p>
      </div>
    </div>
  );
};
export default Peo;
