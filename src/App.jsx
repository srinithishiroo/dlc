import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Head from "./components/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import Enquire from "./pages/enquire now/enquire";
import Forum from "./pages/Forum Member/forum";
import JoinUs from "./pages/join Us/join";
import Dells from "./pages/W is DLC/DLC";
import Corpo from "./pages/corporate/corporate";

const App = () => {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="/enquiery" element={<Enquire />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/apply" element={<JoinUs />} />
        <Route path="/DLC" element={<Dells />} />
        <Route path="/corpo" element={<Corpo />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
