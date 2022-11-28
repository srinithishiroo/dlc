import React from "react";
import "./membership.css";

const Mem = () => {
  return (
    <div className="offering">
      <h1>DLC MEMBERSHIP OFFERINGS</h1>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="img-area">
              <img
                src="https://www.dellaleaders.com/images/forum.webp"
                alt="Forums"
              />
              <div className="img-text">
                <h2>
                  1. FORUMS <br />
                  <h6> Your Personal Board Of Directors</h6>
                </h2>
                <br></br>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="img-area">
              <img
                src="https://www.dellaleaders.com/images/intellect-pop-up-new.png"
                alt="intellect"
              />
              <div className="img-text">
                <h2>
                  2. EVENTS <br />
                  <h6>
                    Intellect Pop Up <br />
                    Workshops & Exhibitions <br />
                    Retreats
                  </h6>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="img-area">
              <img
                src="https://www.dellaleaders.com/images/knowledge-platforms-new.webp"
                alt="platforms"
              />
              <div className="img-text">
                <h2>
                  3. DLC CHANNEL <br />
                  <h6>
                    13 Business Domains <br />
                    13 Lifestyle Domains <br />
                    2500++ Knowledge Experts Across 56 Countries
                  </h6>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="img-area">
              <img
                src="https://www.dellaleaders.com/images/global-summit-new.webp"
                alt="Forums"
              />
              <div className="img-text">
                <h2>
                  4. GLOBAL SUMMITS <br />
                  <h6>12 Global Summits Per Year</h6>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="img-area">
              <img
                src="	https://www.dellaleaders.com/images/brand-collab.png"
                alt="brand"
              />
              <div className="img-text">
                <h2>
                  5. BRAND EXPERIENCES <br />
                  <h6>Global Brand Experiences</h6>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="img-area">
              <img
                src="	https://www.dellaleaders.com/images/social-imapct-new.webp"
                alt="impact"
              />
              <div className="img-text">
                <h2>
                  6. SOCIAL IMPACT <br />
                  <h6>
                    Touch Human Lives Positively <br />
                    Heal The Planet
                  </h6>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bu">
        <button className="view">VIEW ALL OFFERINGS</button>
      </div>
    </div>
  );
};
export default Mem;
