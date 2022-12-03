import React from "react";
import "./join.css";

const JoinUs = () => {
  return (
    <div className="form">
      <div className="content-form">
        <div className="pa_rra">
          <h1>Join Our DLC Global Community</h1>
          <h1>
            We are a global community of Entrepreneurs, Professionals & Young
            Leaders across the world
          </h1>
          We will help high performance people actualize the full potential of
          their lives. Members of our community have a passion for impact and
          believe in <br></br>the power of technology to create a better future
          for all humanity.
        </div>
        <div className="details">
          <select>
            <option value="0">Mr</option>
            <option value="0">Mrs</option>
            <option value="0">Miss</option>
            <option value="0">Dr</option>
            <option value="0">Mr</option>
          </select>
          <input className="name" type="text" placeholder="First Name" />
          <input className="name" type="text" placeholder="Last Name" />
          <input className="name" type="text" placeholder="Email ID" />
          <select>
            <option value="">india</option>
            <option value="">Iran</option>
            <option value="">Indonesia</option>
            <option value="">Iceland</option>
            <option value="">Hungary</option>
            <option value="">Italy</option>
            <option value="">Israel</option>
            <option value="">Japan</option>
            <option value="">Jordon</option>
            <option value="">Kenya</option>
            <option value="">North Korea</option>
          </select>
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Mobile Number" />
          <select>
            <option value="">How did you hear about us?</option>
            <option value="">Instagram</option>
            <option value="">Twitter</option>
            <option value="">Facebook</option>
            <option value="">Linked In</option>
            <option value="">Google</option>
            <option value="">Web Article</option>
            <option value="">DLC Employee</option>
          </select>
          <input type="text" placeholder="Company Name" />
          <select>
            <option value="">Select Designation</option>
            <option value="">CEO</option>
            <option value="">MD</option>
            <option value="">Founder</option>
            <option value="">Co-Founder</option>
            <option value="">Director</option>
            <option value="">VP</option>
            <option value="">V Suite</option>
          </select>
        </div>
        <button className="btnn">Submit</button>
      </div>

      <hr />
      <div className="criteria">
        <p>
          In addition to individuals who meet the above membership criteria, DLC
          is also looking for individuals who have been committed to <br />
          giving back to society and created Social Impact in the community at
          large
        </p>
        <button className="bttn">JOIN DLC GLOBALMOVEMENT</button>
      </div>
    </div>
  );
};
export default JoinUs;
