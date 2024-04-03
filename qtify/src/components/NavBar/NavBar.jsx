import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo id={styles.logo} />
      <Search placeholder="Search a song of your choice" />
      <Button>Give Feedback</Button>
    </div>
  );
};

export default Navbar;
