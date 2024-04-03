import React from "react";

const Logo = () => {
  return (
    <img
      className="logo"
      src={require("../../assets/logo.png")}
      alt="logo"
      width={67}
      style={{ marginLeft: "1rem" }}
    />
  );
};

export default Logo;
