import React from "react";
import "./summits.css";
import sum from "../../assets/images/banner.jpg";
import Awards from "../../assets/images/awards.png";
import Why1 from "../../assets/images/why1.png";
import Why2 from "../../assets/images/why3.png";
import Why3 from "../../assets/images/why4.png";

const Summit = () => {
  return (
    <>
      <div
        className="enjoy"
        style={{
          backgroundImage: `url(${sum}`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "450px",
          width: "1519px",
        }}
      >
        <h1>DLC GLOBAL SUMMIT HQ </h1> <br></br> Meet. Learn. Enjoy. <br></br>
        <br></br> <br></br>
        <div className="twelve_button">
          <button>12GLOBALSUMMITS</button>
        </div>
      </div>
      <div className="aboutforum">
        <h1> ABOUT SUMMIT </h1>
        <p>
          DLC Global Summit is headquartered in Lonavala India. The venue is
          created for hosting 12 Domain specific Global Summits. The building
          houses the<br></br> production studios, banquets, indoor & outdoor
          lounges, lobby, amphitheater, besides 300 rooms, 12 banquets, 7
          restaurants and Global summit<br></br> offices. Every Global Summit
          will create a mix of business and entertainment, which will remind you
          of Tomorrowland and the sheer buzz and<br></br> excitement each summit
          will have. World-class DLC speakers & companies taking the stage,
          eminent invited personalities to interact with. Amidst all
          <br></br> the connections you will be forging, you will be indulging
          in some of the best cuisine, music and entertainment the world has to
          offer.
        </p>
      </div>

      <div className="awards">
        <img src={Awards} height="447px" width="144px" />
        <p>
          <h1>DLC GLOBAL SUMMIT AWARDS </h1>
          <hr></hr> <br></br>
          Each Summit will have an award ceremony to celebrate the best
          transformational men, women<br></br> and brands of eminence who???ve
          made an indelible mark with their efforts in their respective<br></br>
          domains. The winners are voted in by DLC???s Global Committee Members in
          a manner that they <br></br>can see each other???s votes, thus giving
          complete transparency & credibility to the global awards <br></br>
          <div className="yellow">
            <button>EXPLORE</button>
          </div>
        </p>
        <br></br>
      </div>
      <div className="sli_im">
        <div className="twesummits">
          <p>
            <h2>WHY ATTEND</h2>
            The DLC Global Summits have been meticulously designed like no other
            summit. Apart from specially curated<br></br> sessions with
            distinguished speakers, the summits would have a number of varied
            experiences and <br></br>
            entertainment programmes that would provide a marvelously
            all-encompassing experience.
          </p>
        </div>
      </div>

      {/* <div className="box_imagess">
        <div
          className="immaages"
          style={{
            backgroundImage: `url(${Why1} linear-gradient(to bottom, rgba(.9, 0, 0, 0) 0, #000 )`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "350px",
            width: "350px",
          }}
        >
          <p>
            <b>
              LEARN FROM THE INDUSTRY <br></br> EXPERTS <br></br>
            </b>{" "}
            <br></br>
            DLC Global Summits will provide invitees the <br></br> opportinity
            to meet and interact with industry <br></br>leaders in an intimate
            environment <br></br> <br></br>
            <button>MORE INFO</button>
          </p>
        </div>
      </div> */}
    </>
  );
};
export default Summit;
