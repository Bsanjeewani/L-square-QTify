import React from "react";
import "./Navbar.css";
import Logo from "../../Images/Logo";
import Search from "../Searchbar/Searchbar";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

const Navbar = ({ onFeedbackButtonClick }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <div>
        <Search />
      </div>
      <div className="feedback">
        <FeedbackForm onFeedbackButtonClick={onFeedbackButtonClick} />
      </div>
    </div>
  );
};

export default Navbar;
