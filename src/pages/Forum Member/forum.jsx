import React from "react";
import "./forum.css";
import Collage from "../../assets/images/collage.png";
import Ring from "../../assets/images/ring.png";
import joining from "../../assets/images/joining.png";
import Imageone from "../../assets/images/picture1.png";
import Region from "../../assets/images/regional.png";
import Chap from "../../assets/images/chapter.png";
import Memone from "../../assets/images/membersone.png";
import Memtwo from "../../assets/images/memberstwo.png";
import Memthree from "../../assets/images/membersthree.png";
import Desktop from "../../assets//images/desktopbg.png";

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
            can act as a learning experience for all the Forum <br></br>
            members. <br></br> <br></br>
            <hr></hr>
          </div>
        </div>
      </div>

      <div className="chapter">
        <div className="text_chapters">
          <h1>Global, Regional and Chapter Forum </h1>{" "}
          <p>
            {" "}
            Members, their Spouse / Partner and Young Adult Children can select
            a format to reap the <br></br>
            benefits of Forum that best suit their needs. Following the same
            Forum fundamentals, all Forums <br></br>must comprise of 6 to 10
            Forumites who are from non–competing backgrounds. All Forum{" "}
            <br></br> Meetings are Member, Spouse or Young Adult - moderator led
            meetings. It is recommended to <br></br> hold a Forum Meeting each
            month and 1 mandatory in-person Forum Retreat every year.
          </p>
        </div>
      </div>

      <div className="ball">
        <p>
          <h1> Global</h1> <br></br>
          <br></br> For those who want to learn of the business practices,
          culture and <br></br> personal experiences from other countries. Gain
          a truly global <br></br>perspective comprising of the same 6 to 10
          Forumites fromacross the <br></br> world. By blurring geographical
          boundaries, monthly meetings will be held <br></br>
          online, culminating in one mandatory in-person Forum Retreat every
          year.
        </p>
        <img src={Imageone} height="350px" width="650px" />
      </div>

      <div className="ball_2">
        <img src={Region} height="350px" width="650px" />
        <p>
          <h1> REGIONAL</h1> <br></br>
          Offers the perfect balance for those members who wish to gain a
          broader perspective and experience share with Forumites beyond their
          chapter city but would wish to be more locally connected and grounded
          to members within their region. Monthly meetings will be held online.
          However, owing to the closer proximity, Forumites might find it
          beneficial to hold more In-Person Forum Meetings besides the mandatory
          In-person Forum Retreat.
        </p>
      </div>

      <div className="ball_3">
        <p>
          <h1> CHAPTER</h1> <br></br>
          CHAPTER For those who prefer the intimacy of a monthly physical
          meeting, chapter forums are an ideal option. Interact, converse and
          share experience with Forumites from the same Chapter City. Monthly
          in-person meetings offer a chance to build deeper connections.
        </p>
        <img src={Chap} height="350px" width="650px" />
      </div>

      <div className="types">
        <div className="te_xt">
          <h1> Types of DLC Forums</h1> <br></br>
          <p>
            We extend the benefits of forum to the entire family, be it a
            member, spouse/ <br></br> partner or their young adult children. All
            Forums must adhere to the DLC Forum <br></br> process to best avail
            its benefits.
          </p>
          <div className="images_inbox">
            <img src={Memone} height="350px" width="650px" />
            <p>
              <h1>MEMBER FORUM </h1> <br></br>The Global Honorary Forum
              Committee is composed of experienced and <br></br>recognized Forum
              Facilitators from all over the globe. Having come on <br></br>
              board with sheer passion for our vision, our Committee will ensure
              that<br></br> all DLC Members are placed in a suitable
              non-competing environment so<br></br> that they can derive the
              maximum value they can.
            </p>
          </div>
          <div className="images_inbox2">
            <p>
              <h1>SPOUSE / PARTNER FORUM</h1> <br></br>Extend your DLC Forum
              benefits to your spouse or partner. Have them join a
              Spouse/Partner Forum; authentic, confidential sharing spaces for
              their personal transformation.
            </p>
            <img src={Memtwo} height="350px" width="650px" />
          </div>
          <div className="images_inbox3">
            <img src={Memthree} height="350px" width="650px" />
            <p>
              <h1>YOUNG LEADERS FORUM</h1>
              <br></br> Young Leaders deal with their own trials and
              tribulations in the nascent stages of their entrepreneurial
              journey. The Young Leaders Forum proves to be an ideal launchpad
              for success, connecting with peers in similar inculcating the
              benefits of a forum very early in their journey.
            </p>
          </div>
        </div>
      </div>

      <div
        className="application"
        style={{
          backgroundImage: `url(${Desktop}`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "400px",
          width: "1517px",
        }}
      >
        <div className="app_text">
          <p>
            <h2> THE APPLICATION</h2> <br></br>
            The Global Honorary Forum Committee is composed of <br></br>
            experienced and recognized Forum Facilitators from all<br></br> over
            the globe. Having come on board with sheer passion <br></br>for our
            vision,
          </p>{" "}
          <br></br>
          <div className="joinforum">
            <button>JOIN FORUM NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Forum;
