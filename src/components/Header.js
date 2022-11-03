import React from "react";
import logoImage from "../images/pepe-face-header.png";

function Header() {
  return (
    <header className="header">
      <img src={logoImage} className="header-image" alt="" />
      <h2 className="header-title">Welcome to Meme Generator App</h2>
      <h4 className="header-text">A Dynamic Web App in React@18</h4>
    </header>
  );
}

export default Header;
