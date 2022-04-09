import React from "react";
import AboutPart from "../AboutPart/AboutPart";
import Banner from "../Banner/Banner";
import Booking from "../Booking/Booking";
import BookText from "../BookText/BookText";
import Feature from "../Feature/Feature";
import FeatureCore from "../FeatureCore/FeatureCore";

const Home = () => {
  return (
    <div>
      {/* <h2>this is home</h2> */}
      <Banner />
      <Booking />
      <AboutPart />
      <BookText />
      <FeatureCore />
      <Feature />
    </div>
  );
};

export default Home;
