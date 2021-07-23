import React from "react";
import logo from "../images/logo.svg";
import "./scss/Header.scss";
const Header = () => {
  // Function to make change Nav
  function navChange() {
    const burgerMenu = document.querySelector(".burger-menu");
    burgerMenu.classList.toggle("toggle");

    animateNavBar();
    animateNavLinks();
  }

  // Function to make Nav faed-in
  function animateNavBar() {
    const navBar = document.querySelector(".nav-links");
    navBar.classList.toggle("active");

    if (navBar.style.animation) {
      navBar.style.animation = "";
    } else {
      navBar.style.animation = `fade-navbar 500ms ease-in`;
    }
  }

  // Function to make Nav-Links faed-in
  function animateNavLinks() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((navLink, index) => {
      if (navLink.style.animation) {
        navLink.style.animation = "";
      } else {
        navLink.style.animation = `nav-link-fade 500ms ease forwards ${
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
            <a href="/">Home</a>
          </li>
          <li className="nav-link">
            <a href="#about">About</a>
          </li>
          <li className="nav-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
