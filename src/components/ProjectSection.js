import { useState } from "react";

import "./scss/ProjectSection.scss";
import Project from "./Project";
import img1 from "../images/where-in-the-world.png";
import img2 from "../images/ip-address-tracker.png";
import img3 from "../images/url-shortener.png";
import img4 from "../images/easy-bank-landing-page.png";

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      img: img1,
      title: "Where in the World",
      stack: "React, SCSS, API",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium assumenda numquam nam dolor ad modi exercitationem provident. Velit beatae iste neque nulla adipisci!",
      code: "https://github.com/Aditya6101/FEM-Rest-Countries-Api-Using-React",
      site: "adityarestcountries.netlify.app/",
    },
    {
      img: img2,
      title: "IP Address Tracker",
      stack: "Javascript, Mapbox, LeafletJS",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium assumenda numquam nam dolor ad modi exercitationem provident. Velit beatae iste neque nulla adipisci!",
      code: "https://github.com/Aditya6101/Fem--IP-Address-Tracker",
      site: "adityaipaddresstracker.netlify.app/",
    },
    {
      img: img3,
      title: "URL Shortener",
      stack: "Javascript, API",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium assumenda numquam nam dolor ad modi exercitationem provident. Velit beatae iste neque nulla adipisci!",
      code: "https://github.com/Aditya6101/FEM--URL-Shortening-API",
      site: "adityaurlshortner.netlify.app/",
    },
    {
      img: img4,
      title: "Easy Bank Landing Page",
      stack: "HTML, SCSS, Javascript",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium assumenda numquam nam dolor ad modi exercitationem provident. Velit beatae iste neque nulla adipisci!",
      code: "https://github.com/Aditya6101/FEM--Easy-Bank-Landing-Page",
      site: "adityakambleeasybank.netlify.app/",
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
