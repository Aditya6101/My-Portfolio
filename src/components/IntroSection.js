import HeroImg from "../images/hero.svg";
import "./scss/IntroSection.scss";
import Button from "./Button";

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-img">
        <img src={HeroImg} alt="intro-img" />
      </div>
      <div className="intro-text">
        <h1>
          Hey, I'm <span className="gradient-text">Aditya</span>
        </h1>
        <h3>Developer & Designer</h3>
        <p>Stay tuned to know about me.</p>
        <Button
          text="See My Work"
          href="#project-section"
          target="_self"
          rel="noopener noreferrer"
        />
        {/* <button className="cta-btn">
          <a href="#project-section" target="_self" rel="noopener noreferrer">
            See My Work
          </a>
        </button> */}
      </div>
    </section>
  );
};

export default IntroSection;
