import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Head from "./components/header";
import Hero from "./components/hero";
import Slides from "./components/simple/slide";
import Caro from "./components/Caro/mulity";
import Box from "./components/imagebox/box";
import Box2 from "./components/box2/box2";
import Mem from "./components/member/membership";
import Social from "./components/Social/social impact";
import Hard from "./components/Hard/ultiOne";
import Event from "./components/dlcEvents/events";
import Photos from "./components/Photos/img";
import Global from "./components/Global/global";
import Glo from "./components/Glo/glo";
import Hybrid from "./components/hybrid event/hybrid";
import Upcoming from "./components/upcome/up";
import Dis from "./components/discover/dis";
import Peo from "./components/people/people";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Head />
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
      <Footer />
    </>
  );
};
export default App;
