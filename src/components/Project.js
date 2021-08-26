import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./scss/Project.scss";
import Button from "./Button";

const Project = ({ isActive, img, title, stack, desc, code, site }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current, {
      autoAlpha: 0,
      ease: "none",
      delay: 0.5,
    });
  }, [isActive]);

  return (
    <div className="project" id={isActive ? "active" : ""} ref={ref}>
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
            rel="noopener noreferrer"
          />
          <Button
            text="Code"
            icon="fab fa-github"
            href={code}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
