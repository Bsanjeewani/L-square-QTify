import React from "react";
import styles from "./HeroSection.module.css";
import Headphone from "../../assets/headphone.png";

const HeroSection = ({ content, content2 }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.heroImageWrapper}>
          <div className={styles.banner}>
            <h1>{content}</h1>
            <h1>Over thhousands podcast episodes</h1>
          </div>
          <div>
            <img src={Headphone} alt="Headphone" height="212px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
