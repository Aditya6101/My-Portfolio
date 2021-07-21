// import React from 'react'
import "./scss/Project.scss";
import Button from "./Button";

// import img1 from "../images/ip-address-tracker.png";

const Project = ({ isActive, img, title, stack, desc, code, site }) => {
  return (
    <div className="project project-1" id={isActive ? "active" : ""}>
      <div className="project-mockup">
        <img src={img} alt={title} />
      </div>
      <div className="project-text-content">
        <h2 className="gradient-text project-title">{title}</h2>
        <h4 className="project-stack">{stack}</h4>
        <p className="project-desc">{desc}</p>
        <div className="project-ctas">
          <Button
            text="Preview"
            icon="fas fa-external-link-alt"
            href={site}
            target="_blank"
          />
          <Button
            text="Code"
            icon="fab fa-github"
            href={code}
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
