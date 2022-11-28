import React from "react";
import Slider from "react-slick";
import "./social impact.css";

const Social = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="cial">
      <div className="imp">
        <h1>GLOBAL SOCIAL IMPACT PROGRAMS</h1>
        <Slider {...settings}>
          <div>
            <img
              src="	https://www.dellaleaders.com/images/events/SocialImpact/dlcwomenentrepreneurshipprogram.webp"
              width="350"
              height="200"
            />
            <div>
              <p>
                DLC Women Entrepreneurship Program
                <br />
              </p>
              <h3>
                Sustainable Growth for Women <br />
                Entrepreneurship and Export Promotion <br />
                2022 is a global event orgainised by madhya...
                <br />
              </h3>
              <div className="inter">
                <button>KNOW MORE</button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://www.dellaleaders.com/images/events/SocialImpact/dlce-wastemanagementprogram.webp"
              width="350px"
              height="200"
            />
            <div>
              <p>
                DLCE-waste Management Program
                <br />
              </p>
              <h3>
                DLc is partnering with EcoReco with a vision
                <br />
                to engage at a global level to help bring out <br />
                the best practice for E-waste Managemen...
              </h3>
              <div className="inter">
                <button>KNOW MORE</button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://www.dellaleaders.com/images/events/SocialImpact/enterprenurship.webp"
              width="350px"
              height="200"
            />
            <div>
              <p>
                DLc Entrepreneurship for EWS Program
                <br />
              </p>
              <h3>
                Chef Sans Frontieres has been created for
                <br />
                the purpose of raising funds for small <br />
                artisanal food producer and farmers that
              </h3>
              <div className="inter">
                <button>KNOW MORE</button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://www.dellaleaders.com/images/events/SocialImpact/cyber-harassment.webp"
              width="350px"
              height="200"
            />
            <div>
              <p>
                DLc Cyber Harassment Prevention <br />
                Program
                <br />
              </p>
              <h3>
                DLC in partnership with CyberBaap will be <br />
                creating a curriculum to prevent children <br />
                from cyber harrasement. Spearheaded by...
              </h3>
              <div className="inter">
                <button>KNOW MORE</button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://www.dellaleaders.com/images/events/SocialImpact/specially-abled.webp"
              width="350px"
              height="200px"
            />
            <div>
              <p>
                DLC Specially-abled Inclusion Program
                <br />
              </p>
              <h3>
                This program is ideated to create hiring
                <br />
                practices for organisations to become more <br />
                inclusive in their hiring practices by...
              </h3>
              <div className="inter">
                <button>KNOW MORE</button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://www.dellaleaders.com/images/events/SocialImpact/DLCBeefAlternativesProgram.webp"
              width="350px"
              height="200px"
            />
            <div>
              <p>
                DLC Meat Alternatives Program
                <br />
              </p>
              <h3>
                DLC Meat Alternative Program Meat
                <br />
                Production is a nuge contributor to climate <br />
                Change Emissinons from livestock especiall..
              </h3>
              <div className="inter">
                <button>KNOW MORE</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Social;
