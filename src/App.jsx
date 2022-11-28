import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "./components/header";
import Hero from "./components/hero";
import Caro from "./components/hero/mulity";
import Slides from "./components/simple/slide";
import Mem from "./components/member/membership";
import Box from "./components/imagebox/box";
import Box2 from "./components/box2/box2";
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
      <Dis />
      <Peo />
      <Footer />
    </>
  );
};
export default App;
