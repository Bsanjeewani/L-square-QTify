import React from "react";
import "./mainpage.css";
import HeroSection from "../HeroPage/HeroSection";
import Navbar from "../NavBar/NavBar";

const MainPage = () => {
  return (
    <div className="mainPage">
      <div>
        <Navbar />
      </div>
      <div>
        <HeroSection
          content={"100 Thousand Songs, ad fee"}
          content2={"Over thhousands podcast episodes"}
        />
      </div>
    </div>
  );
};

export default MainPage;
