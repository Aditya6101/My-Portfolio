import { useState } from 'react';
import './scss/ProjectSection.scss';
import Project from './Project';
import img1 from '../images/mern-notes-app.png';
import img2 from '../images/netflix-clone.png';
import img3 from '../images/where-in-the-world.png';
import img4 from '../images/ip-address-tracker.png';
import img5 from '../images/url-shortener.png';
import img6 from '../images/easy-bank-landing-page.png';
import img7 from '../images/chat-app-css-illustration.png';
import img8 from '../images/node-cli-quiz.png';

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      img: img1,
      title: 'Notes App',
      stack: 'MERN Stack,Redux toolkot, Typescript, Tailwindcss',
      desc: 'A simple note app using MERN stack. Users can log in and create notes. This app has simple and pleasant UI.',
      code: 'https://github.com/Aditya6101/MERN-Notes-App',
      site: 'https://aditya-mern-notes-app.herokuapp.com',
    },
    {
      img: img2,
      title: 'Netflix Clone',
      stack: 'React, CSS, Axios, Firebase',
      desc: 'This is a Netflix Clone created in React with the help of Axios to fetch the movies data from API. Users can explore various genres of the movies & can see the teaser/trailer of them.',
      code: 'https://github.com/Aditya6101/Netflix-Clone',
      site: 'https://netflix-clone-d1f9b.web.app/',
    },
    {
      img: img3,
      title: 'Where in the World',
      stack: 'React, SCSS, API',
      desc: 'This web app is created in react. Users can see the various information about each country such as its name, capital city, population, etc. ',
      code: 'https://github.com/Aditya6101/FEM-Rest-Countries-Api-Using-React',
      site: 'https://adityarestcountries.netlify.app/',
    },
    {
      img: img4,
      title: 'IP Address Tracker',
      stack: 'Javascript, Mapbox, LeafletJS',
      desc: 'This is project is purely built in Javascript. I used Leaflet JS along with Mapbox to display the map. Users can search with an IP Address or a domain name to get information such as location, timezone, etc.',
      code: 'https://github.com/Aditya6101/Fem--IP-Address-Tracker',
      site: 'https://adityaipaddresstracker.netlify.app/',
    },
    {
      img: img5,
      title: 'URL Shortener',
      stack: 'Javascript, API',
      desc: 'I built this using pure javascript and SCSS for styling. Users can simply paste the URL and gets its shortened version.',
      code: 'https://github.com/Aditya6101/FEM--URL-Shortening-API',
      site: 'https://adityaurlshortner.netlify.app/',
    },
    {
      img: img6,
      title: 'Easy Bank Landing Page',
      stack: 'HTML, SCSS, Javascript',
      desc: 'Simple yet beautiful landing page built using HTML, SCSS, and Javascript.It is also mobile-friendly and responsive in terms of design.',
      code: 'https://github.com/Aditya6101/FEM--Easy-Bank-Landing-Page',
      site: 'https://adityakambleeasybank.netlify.app/',
    },
    {
      img: img7,
      title: 'Chat app CSS Illustration',
      stack: 'HTML, CSS',
      desc: 'A simple and responsive illustration made using only CSS. It is an example of what CSS can do.',
      code: 'https://github.com/Aditya6101/FEM--Chat-App-CSS-Illustration',
      site: 'https://aditya6101.github.io/FEM--Chat-App-CSS-Illustration/',
    },
    {
      img: img8,
      title: 'Node CLI Quiz',
      stack: 'Nodejs, Inquirer',
      desc: "A Simple Quiz CLI game created using Nodejs. User can start the quiz and can answer the questions right from there terminal. Just hit 'npx node-quiz' to start the game.",
      code: 'https://github.com/Aditya6101/node-cli-quiz',
      site: 'https://www.npmjs.com/package/node-quiz',
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
