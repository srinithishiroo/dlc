import React from "react";
import Slider from "react-slick";
import "./up.css";

const Upcoming = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="up">
      <div className="come">
        <h1>UPCOMINIG EVENTS</h1>
        <Slider {...settings}>
          <div>
            <img
              src="https://www.dellaleaders.com/images/events/upcoming/upcoming-ahmedabad.jpg"
              width="350"
              height="200"
            />
            <div>
              <p>
                Ahmedabad Workshop
                <br />
              </p>
              <h3>
                Nov 25 2022,Ahmedabad,India <br />
              </h3>
              <div className="outer">
                <a href="#">Register Now </a>
              </div>
            </div>
          </div>

          <div>
            <img
              src="	https://www.dellaleaders.com/images/events/upcoming/upcoming-dubai.jpg"
              width="350"
              height="200"
            />
            <div>
              <p>
                Dubai Workshop
                <br />
              </p>
              <h3>
                Dec 11 2022, Dubai, USA <br />
              </h3>
              <div className="outer">
                <a href="#">Register Now </a>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://www.dellaleaders.com/images/events/upcoming/upcoming-delhi.jpg"
              width="350"
              height="200"
            />
            <div>
              <p>
                Delhi Workshop
                <br />
              </p>
              <h3>
                Dec 16 2022, Delhi, India <br />
              </h3>
              <div className="outer">
                <a href="#">Register Now </a>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://www.dellaleaders.com/images/events/upcoming/upcoming-hyderabad.jpg"
              width="350"
              height="200"
            />
            <div>
              <p>
                Hyderabad Workshop
                <br />
              </p>
              <h3>
                Dec 22 2022, Hyderabad, India <br />
              </h3>
              <div className="outer">
                <a href="#">Register Now </a>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://www.dellaleaders.com/images/events/upcoming/upcoming-newyork.webp"
              width="350"
              height="200"
            />
            <div>
              <p>
                New York Intellect Pop up
                <br />
              </p>
              <h3>
                Jan 26 2022, One WorldTrade Center, New York <br />
              </h3>
              <div className="outer">
                <a href="#">Register Now </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Upcoming;
