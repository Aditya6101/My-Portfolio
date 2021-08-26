import { useState } from "react";
import "./scss/ProjectSection.scss";
import Project from "./Project";
import img1 from "../images/where-in-the-world.png";
import img2 from "../images/ip-address-tracker.png";
import img3 from "../images/url-shortener.png";
import img4 from "../images/easy-bank-landing-page.png";
import img5 from "../images/chat-app-css-illustration.png";

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      img: img1,
      title: "Where in the World",
      stack: "React, SCSS, API",
      desc: "This my solution for the is a coding challenge from frontendmentor.io. I decided to go with React. This is my first react-app which I built on my own.",
      code: "https://github.com/Aditya6101/FEM-Rest-Countries-Api-Using-React",
      site: "https://adityarestcountries.netlify.app/",
    },
    {
      img: img2,
      title: "IP Address Tracker",
      stack: "Javascript, Mapbox, LeafletJS",
      desc: "This challenge was pretty complicated in terms of logic for me. I used Leaflet JS along with Mapbox to display the map. It's wen with plain JS to built this.",
      code: "https://github.com/Aditya6101/Fem--IP-Address-Tracker",
      site: "https://adityaipaddresstracker.netlify.app/",
    },
    {
      img: img3,
      title: "URL Shortener",
      stack: "Javascript, API",
      desc: "This was pretty state forward challenge from frontendmentor. I built this using Vanilla JS. I used SCSS for styling and went with mobile first approach.",
      code: "https://github.com/Aditya6101/FEM--URL-Shortening-API",
      site: "https://adityaurlshortner.netlify.app/",
    },
    {
      img: img4,
      title: "Easy Bank Landing Page",
      stack: "HTML, SCSS, Javascript",
      desc: "This was my first frontendmentor chllenge. It was bit complex in terms of design so, it took more time than expected. But finally I made it.",
      code: "https://github.com/Aditya6101/FEM--Easy-Bank-Landing-Page",
      site: "https://adityakambleeasybank.netlify.app/",
    },
    {
      img: img5,
      title: "Chat app CSS Illustration",
      stack: "HTML, CSS",
      desc: "In this frontendmentor challenge, I've built out the entire app illustration from scratch. This seriously tested my CSS skills.",
      code: "https://github.com/Aditya6101/FEM--Chat-App-CSS-Illustration",
      site: "https://aditya6101.github.io/FEM--Chat-App-CSS-Illustration/",
    },
  ];

  const getNavNumber = (number) => {
    return number <= 9 ? `0${number}` : number;
  };

  const showNextProject = () => {
    setActiveProject(activeProject + 1);

    if (activeProject >= projects.length - 1) {
      setActiveProject(0);
    }
  };

  const showPrevProject = () => {
    setActiveProject(activeProject - 1);

    if (activeProject <= 0) {
      setActiveProject(projects.length - 1);
    }
  };

  return (
    <section className="project-section" id="project-section">
      <h3 className="section-heading">Projects</h3>
      <div className="carousel">
        {projects.map((project, index) => (
          <Project
            key={index}
            isActive={index === activeProject ? true : false}
            img={project.img}
            title={project.title}
            stack={project.stack}
            desc={project.desc}
            code={project.code}
            site={project.site}
          />
        ))}
      </div>
      <div className="project-navigation">
        <button className="navigation-btn" onClick={showPrevProject}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="navigation-text">
          <span>{getNavNumber(activeProject + 1)}/</span>
          <span>{getNavNumber(projects.length)}</span>
        </div>
        <button className="navigation-btn" onClick={showNextProject}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default ProjectSection;
