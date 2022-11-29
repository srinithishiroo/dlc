import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Head from "./components/header";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="/enquiery" element={<Enquire />} />
      </Routes>
      <Footer />

      <Forum />
    </>
  );
};
export default App;
