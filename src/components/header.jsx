import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Head = () => {
  const logo = new URL("../assets/images/logo.svg", import.meta.url);
  const icon = new URL("../assets/images/nodp.png", import.meta.url);
  const search = new URL("../assets/images/search.png", import.meta.url);
  const innermenu = new URL("../assets/images/menu.png", import.meta.url);

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/Home">
            <img src={logo} width="90px" height="90px" />
          </Link>

          <div className="contenthead">
            <div>
              <a href="#">DLC Channel</a>
            </div>

            <div class="dropdown">
              <button class="dropbtn">Member Offerings</button>
              <div class="dropdown-content">
                <Link to="/forum"> Forum</Link> <hr></hr>
                <a href="#">Events</a> <hr></hr>
                <Link to="summit"> Global Summits</Link> <hr></hr>
                <a href="#"> Brand Experiences</a>
                <hr></hr>
                <a href="/"> Social Impacts</a>
              </div>
            </div>

            <div class="dropdown">
              <button class="dropbtn">Membership</button>
              <div class="dropdown-content">
                <Link to="/DLC">What is DLC?</Link> <hr></hr>
                <a href="#">Individual membership</a> <hr></hr>
                <Link to="/corpo"> Corporate Membership</Link> <hr></hr>
              </div>
            </div>

            <div class="dropdown">
              <button class="join">Join Us</button>
              <div class="dropdown-content">
                <Link to="/apply">Apply For Membership</Link> <hr></hr>
                <Link to="/enquiery">Enquire Now</Link> <hr></hr>
              </div>
            </div>

            <div>
              <a href="#">
                <img src={icon} width="25px" height="25 px" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={search} width="25px" height="25px" />
              </a>
            </div>
            <div className="menutwo">
              <a href="#">
                <img src={innermenu} width="59px" height="59px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Head;
