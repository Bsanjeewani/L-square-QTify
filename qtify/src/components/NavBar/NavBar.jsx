import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <div className={styles.logoWrapper}>
          {" "}
          <Logo className={styles.logo} />
        </div>

        <Search placeholder="Search a song of your choice" />
        <Button>Give Feedback</Button>
      </div>
    </div>
  );
};

export default Navbar;
