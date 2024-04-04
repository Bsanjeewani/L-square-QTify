import React from "react";
import styles from "./HeroSection.module.css";
import HeroLogo from "../HeroLogo";

const HeroSection = ({ content, content2 }) => {
  return (
    <>
      <div className={styles.heroimage}>
        <div>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>

        <div className={styles.herologo}>
          <HeroLogo />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
