import React from "react";
import "./forum.css";
import Collage from "../../assets/images/collage.png";
import Ring from "../../assets/images/ring.png";
import joining from "../../assets/images/joining.png";

const Forum = () => {
  return (
    <>
      <div className="top_flex">
        <div>
          <b>DLC Forum introduction</b>
        </div>
        <div>DLC Channel</div>
        <div>Committee</div> <div> Brand Partners </div>
        <div> Training & Events</div>
      </div>

      <div className="two_box">
        <div className="words">
          <h3> What Would You Pay For </h3> <h1>Your Personal Board</h1>{" "}
          <h1> of Directors?</h1>
        </div>
        <div className="words">
          <img src={Collage} width="700px" height="170px" />
        </div>
      </div>

      <div className="join_dlc">
        <h2>Why Join a DLC Forum </h2> <br></br>
        <p>
          Forums are a complete gamechanger in a Leader's Personal and<br></br>
          Professional Life.<br></br> <br></br> We at DLC know that leaders are
          often lonely at the top. While one<br></br> may share 95% of their
          highs and lows with one another, Forums have <br></br> the potential
          to address the remaining 5%. <br></br> <br></br>Thereby stems our
          endeavor to demolish this elitist mindset and Democratize
          <br></br> the world of Forums by bringing the World's Best Forum
          Facilitators on one of <br></br>the most advanced Forum Applications.{" "}
          <br></br> <br></br>
          <button>JOIN A FORUM NOW</button>
        </p>
      </div>
      <div className="his">
        <h2>THE HISTORY OF FORUMS</h2>
      </div>
      <div className="ring">
        <img src={Ring} height="238px" width="238px" />

        <div className="r1">
          <h1>1977</h1>
          <p>
            The first recorded forum: in<br></br> J.R.R. Tolkein’s The Lord of
            <br></br>the Rings
          </p>
        </div>
        <div className="r2">
          <h1>1978</h1>
          <p>
            The Young Presidents <br></br>Organization (YPO) adopted forums{" "}
          </p>
        </div>
        <div className="r3">
          <h1>1990's</h1>
          <p>
            More peer leadership <br></br>organizations such as the
            <br></br>
            Entrepreneurs’ Organization <br></br> (EO), YEO, CEO Forum <br></br>
            adopted forums and its<br></br> popularity grew rapidly
          </p>
        </div>
        <div className="r4">
          <h1>2020</h1>
          <p>
            Forums are thriving and have<br></br> been integrated globally, by
            <br></br>leading companies like Google
          </p>
        </div>
      </div>

      <div
        className="joiningg"
        style={{
          backgroundImage: `url(${joining}`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <h1>
          Benefits of<br></br> Joining a Forum
        </h1>

        <div className="flex_flex">
          <div>Forums are life</div> <br></br>
          <hr></hr> <br></br>
          <div>Confidentiality:creating your own safe space</div> <br></br>{" "}
          <hr></hr>
          <br></br>
          <div>
            Peer-to-peer shared learning <br></br>
            <br></br>DLC Forums provide a safer space to discuss various
            personal and business issues. Your peers <br></br>are like your
            close group of friends who have faced similar problems. As a result,
            being part of a<br></br> group of people having like-minded thinking
            can act as a learning experience for all the Forum <br></br>{" "}
            members. <br></br> <br></br>
            <hr></hr>
          </div>
        </div>
      </div>
    </>
  );
};
export default Forum;
