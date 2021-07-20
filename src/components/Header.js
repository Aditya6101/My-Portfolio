import React from "react";
import logo from "../images/logo.svg";
import "./scss/Header.scss";
const Header = () => {
  // Adding event listener to burger-menu
  function navChange() {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");
    const navLink = document.querySelectorAll(".nav-link");

    navLinks.classList.toggle("active");
    burgerMenu.classList.toggle("toggle");

    navLink.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `nav-link-fade 500ms ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  }
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <div className="burger-menu" onClick={navChange}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="goggle.com">Home</a>
          </li>
          <li className="nav-link">
            <a href="goggle.com">About</a>
          </li>
          <li className="nav-link">
            <a href="goggle.com">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
