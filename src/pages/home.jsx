import React from "react";

import Hero from "../components/hero";
import Slides from "../components/simple/slide";
import Caro from "../components/Caro/mulity";

import Box from "../components/imagebox/box";
import Box2 from "../components/box2/box2";
import Mem from "../components/member/membership";
import Social from "../components/Social/social impact";
import Hard from "../components/Hard/ultiOne";
import Event from "../components/dlcEvents/events";
import Photos from "../components/Photos/img";
import Global from "../components/Global/global";
import Glo from "../components/Glo/glo";
import Hybrid from "../components/hybrid event/hybrid";
import Upcoming from "../components/upcome/up";
import Dis from "../components/discover/dis";
import Peo from "../components/people/people";

function Home() {
  return (
    <>
      <Hero />
      <Slides />
      <Caro />

      <Box />
      <Box2 />
      <Mem />
      <Social />
      <Hard />
      <Event />
      <Photos />
      <Global />
      <Glo />
      <Hybrid />
      <Upcoming />
      <Dis />
      <Peo />
    </>
  );
}
export default Home;
